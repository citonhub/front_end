(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WalletCard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/CardView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-horizontal */ "./node_modules/vue-horizontal/dist/vue-horizontal.esm.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      page: 1,
      that: this,
      loading: false,
      loadingPaymentCard: false,
      currencyData: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN',
        symbol: '&#8358;'
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
        name: 'British Pound Sterling (GBP)',
        code: 'GBP',
        symbol: '&#163;'
      }, {
        name: 'Ghanainan Cedi (GHS)',
        code: 'GHS',
        symbol: '&#8373;'
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
        symbol: 'KSh'
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
        symbol: '&#8355;'
      }, {
        name: 'Sierra Leonean Leone (SLL)',
        code: 'SLL',
        symbol: 'Le'
      }, {
        name: 'Sao Tome and Principe Dobra (STD)',
        code: 'STD',
        symbol: 'STD'
      }, {
        name: 'Tanzanian Shilling (TZS)',
        code: 'TZS',
        symbol: 'TSh'
      }, {
        name: 'Ugandan Shilling (UGX)',
        code: 'UGX',
        symbol: 'Ush'
      }, {
        name: 'CSA Franc BEAC (XAF)',
        code: 'XAF',
        symbol: '&#8355;'
      }, {
        name: 'CSA Franc BCEAO (XOF)',
        code: 'XOF',
        symbol: '&#8355;'
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
      transactions: [],
      loadingTransactions: false,
      currentpage: 1,
      lastPage: 0
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.showTopBar = false;
    this.fetchPaymentCard();
    this.$root.cardViewComponent = this;
  },
  methods: {
    handleInput: function handleInput(page) {
      this.loadingTransactions = true;
      this.fetchTransactions(page);
    },
    manageCard: function manageCard() {
      this.$router.push({
        path: '/board/wallet/manage/' + this.$root.selectedPaymentCard.card_no
      });
    },
    makePayout: function makePayout() {
      this.$root.infoType = 'payout';
      this.$root.showWalletinfo = true;
    },
    showFee: function showFee() {
      this.$root.infoType = 'fee';
      this.$root.showWalletinfo = true;
    },
    showTransaction: function showTransaction(transaction) {
      this.$root.selectedTransaction = transaction;
      this.$root.infoType = 'transaction';
      this.$root.showWalletinfo = true;
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    formatMoney: function formatMoney(number, decPlaces, decSep, thouSep) {
      decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces, decSep = typeof decSep === "undefined" ? "." : decSep;
      thouSep = typeof thouSep === "undefined" ? "," : thouSep;
      var sign = number < 0 ? "-" : "";
      var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
      var j = (j = i.length) > 3 ? j % 3 : 0;
      return sign + (j ? i.substr(0, j) + thouSep : "") + i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) + (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    },
    handleDateFormat: function handleDateFormat(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      return moment(realTimeHour).format("MMM D, YYYY");
    },
    currencyToCharacter: function currencyToCharacter(currency) {
      var thisCurrency = this.currencyData.filter(function (eachCurrency) {
        return currency == eachCurrency.code;
      });

      if (thisCurrency[0]) {
        return thisCurrency[0].symbol;
      }
    },
    fetchPaymentCard: function fetchPaymentCard() {
      var _this = this;

      this.loadingPaymentCard = true;
      var storedPaymentCard = this.$root.getLocalStore('user_payment_card_' + this.$route.params.card_no + this.$root.username);
      storedPaymentCard.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this.$root.selectedPaymentCard = finalResult.payment_card;
          _this.$root.payoutAccounts = finalResult.payout_account;
          _this.$root.planSubscriptions = finalResult.subscriptions;

          _this.fetchTransactions(1);

          _this.loadingPaymentCard = false;

          _this.checkForNewPaymentCard();
        } else {
          axios.get('/payment-cards/' + _this.$route.params.card_no).then(function (response) {
            if (response.status == 200) {
              _this.$root.LocalStore('user_payment_card_' + _this.$route.params.card_no + _this.$root.username, response.data);

              _this.$root.selectedPaymentCard = response.data.payment_card;
              _this.$root.payoutAccounts = response.data.payout_account;
              _this.$root.planSubscriptions = response.data.subscriptions;
              _this.loadingPaymentCard = false;

              _this.fetchTransactions(1);
            }
          })["catch"](function (error) {
            _this.showAlert('Oops!', 'Something went wrong', 'error');

            _this.loadingPaymentCard = false;
          });
        }
      });
    },
    checkForNewPaymentCard: function checkForNewPaymentCard() {
      var _this2 = this;

      axios.get('/payment-cards/' + this.$route.params.card_no).then(function (response) {
        if (response.status == 200) {
          _this2.$root.LocalStore('user_payment_card_' + _this2.$route.params.card_no + _this2.$root.username, response.data);

          _this2.$root.selectedPaymentCard = response.data.payment_card;
          _this2.$root.payoutAccounts = response.data.payout_account;
          _this2.$root.planSubscriptions = response.data.subscriptions;
          _this2.loadingPaymentCard = false;

          _this2.fetchTransactions(1, false);
        }
      })["catch"](function (error) {});
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.warning({
          title: title,
          message: message,
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    },
    fetchTransactions: function fetchTransactions(pageNum) {
      var _this3 = this;

      var showLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.loadingTransactions = showLoading;
      axios.get('/fetch-transactions?page=' + pageNum).then(function (response) {
        if (response.status == 200) {
          _this3.transactions = response.data.transactions.data;
          _this3.currentpage = response.data.transactions.current_page;
          _this3.lastPage = response.data.transactions.last_page;
          _this3.loadingTransactions = false;
        }
      })["catch"](function (error) {
        _this3.loadingTransactions = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-horizontal */ "./node_modules/vue-horizontal/dist/vue-horizontal.esm.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      page: 1,
      loading: false,
      paymentCards: [],
      loadingPaymentCard: false,
      currencyData: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN',
        symbol: '&#8358;'
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
        name: 'British Pound Sterling (GBP)',
        code: 'GBP',
        symbol: '&#163;'
      }, {
        name: 'Ghanainan Cedi (GHS)',
        code: 'GHS',
        symbol: '&#8373;'
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
        symbol: 'KSh'
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
        symbol: '&#8355;'
      }, {
        name: 'Sierra Leonean Leone (SLL)',
        code: 'SLL',
        symbol: 'Le'
      }, {
        name: 'Sao Tome and Principe Dobra (STD)',
        code: 'STD',
        symbol: 'STD'
      }, {
        name: 'Tanzanian Shilling (TZS)',
        code: 'TZS',
        symbol: 'TSh'
      }, {
        name: 'Ugandan Shilling (UGX)',
        code: 'UGX',
        symbol: 'Ush'
      }, {
        name: 'CSA Franc BEAC (XAF)',
        code: 'XAF',
        symbol: '&#8355;'
      }, {
        name: 'CSA Franc BCEAO (XOF)',
        code: 'XOF',
        symbol: '&#8355;'
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
      transactions: [],
      loadingTransactions: false,
      currentpage: 1,
      lastPage: 0
    };
  },
  components: {
    VueHorizontal: vue_horizontal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.fetchPaymentCard();
  },
  methods: {
    handleInput: function handleInput(page) {
      this.loadingTransactions = true;
      this.fetchTransactions(page);
    },
    showTransaction: function showTransaction(transaction) {
      this.$root.selectedTransaction = transaction;
      this.$root.infoType = 'transaction';
      this.$root.showWalletinfo = true;
    },
    formatMoney: function formatMoney(number, decPlaces, decSep, thouSep) {
      decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces, decSep = typeof decSep === "undefined" ? "." : decSep;
      thouSep = typeof thouSep === "undefined" ? "," : thouSep;
      var sign = number < 0 ? "-" : "";
      var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
      var j = (j = i.length) > 3 ? j % 3 : 0;
      return sign + (j ? i.substr(0, j) + thouSep : "") + i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) + (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    },
    currencyToCharacter: function currencyToCharacter(currency) {
      var thisCurrency = this.currencyData.filter(function (eachCurrency) {
        return currency == eachCurrency.code;
      });
      return thisCurrency[0].symbol;
    },
    goToCardView: function goToCardView(paymentCard) {
      this.$root.selectedPaymentCard = paymentCard;
      this.$router.push({
        path: '/board/wallet/card-view/' + paymentCard.card_no
      });
    },
    fetchPaymentCard: function fetchPaymentCard() {
      var _this = this;

      this.loadingPaymentCard = true;
      var storedPaymentCard = this.$root.getLocalStore('user_payment_card_' + this.$root.username);
      storedPaymentCard.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this.paymentCards = finalResult.payment_cards;

          _this.paymentCards.sort(function (a, b) {
            return b.balance - a.balance;
          });

          setTimeout(function () {
            if (_this.paymentCards.length > 3) {
              _this.$refs.horizontal.hasNext = true;
            }
          }, 1000);

          _this.fetchTransactions(1);

          _this.loadingPaymentCard = false;

          _this.checkForNewPaymentCard();
        } else {
          axios.get('/payment-cards').then(function (response) {
            if (response.status == 200) {
              _this.$root.LocalStore('user_payment_card_' + _this.$root.username, response.data);

              _this.paymentCards = response.data.payment_cards;

              _this.paymentCards.sort(function (a, b) {
                return b.balance - a.balance;
              });

              _this.loadingPaymentCard = false;
              setTimeout(function () {
                if (_this.paymentCards.length > 3) {
                  _this.$refs.horizontal.hasNext = true;
                }
              }, 1000);

              _this.fetchTransactions(1);
            }
          })["catch"](function (error) {
            _this.showAlert('Oops!', 'Something went wrong', 'error');

            _this.loadingPaymentCard = false;
          });
        }
      });
    },
    checkForNewPaymentCard: function checkForNewPaymentCard() {
      var _this2 = this;

      axios.get('/payment-cards').then(function (response) {
        if (response.status == 200) {
          _this2.$root.LocalStore('user_payment_card_' + _this2.$root.username, response.data);

          _this2.paymentCards = response.data.payment_cards;

          _this2.paymentCards.sort(function (a, b) {
            return b.balance - a.balance;
          });

          _this2.fetchTransactions(1, false);
        }
      })["catch"](function (error) {});
    },
    fetchTransactions: function fetchTransactions(pageNum) {
      var _this3 = this;

      var showLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.loadingTransactions = showLoading;
      axios.get('/fetch-transactions?page=' + pageNum).then(function (response) {
        if (response.status == 200) {
          _this3.transactions = response.data.transactions.data;
          _this3.currentpage = response.data.transactions.current_page;
          _this3.lastPage = response.data.transactions.last_page;
          _this3.loadingTransactions = false;
        }
      })["catch"](function (error) {
        _this3.loadingTransactions = false;
      });
    },
    handleDateFormat: function handleDateFormat(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      return moment(realTimeHour).format("MMM D, YYYY");
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.warning({
          title: title,
          message: message,
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.normalText[data-v-0e112ba0]{\n  font-family: BodyFont;\n  font-size: 13px;\n}\n.boldText[data-v-0e112ba0]{\n  font-family: MediumFont;\n  font-size: 13px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.normalText[data-v-6b20396a]{\n  font-family: BodyFont;\n  font-size: 13px;\n}\n.boldText[data-v-6b20396a]{\n  font-family: MediumFont;\n  font-size: 13px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.horizontal[data-v-6b20396a] {\n  --count: 1;\n  --gap: 4px;\n \n  --margin:20px;\n}\n@media (min-width: 640px) {\n.horizontal[data-v-6b20396a] {\n    --count: 2;\n}\n}\n@media (min-width: 768px) {\n.horizontal[data-v-6b20396a] {\n    --count: 2;\n    --margin: 0;\n}\n}\n@media (min-width: 1024px) {\n.horizontal[data-v-6b20396a] {\n    --count: 2;\n}\n}\n@media (min-width: 1280px) {\n.horizontal[data-v-6b20396a] {\n    --gap: 24px;\n    --count: 3;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (max-width: 767.98px) {\n.item[data-v-6b20396a] {\n    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count));\n    padding: 0 calc(var(--gap) / 2);\n}\n.item[data-v-6b20396a]:first-child {\n    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));\n    padding-left: var(--margin);\n}\n.item[data-v-6b20396a]:last-child {\n    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) - (var(--gap) / 2));\n    padding-right: var(--margin);\n}\n.item[data-v-6b20396a]:only-child {\n    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) * 2 - var(--gap));\n}\n.horizontal[data-v-6b20396a] {\n    margin: 0 calc(var(--margin) * -1);\n}\n.horizontal[data-v-6b20396a] .v-hl-container {\n    scroll-padding: 0 calc(var(--margin) - (var(--gap) / 2));\n}\n.horizontal[data-v-6b20396a] .v-hl-btn {\n    display: none;\n}\n}\n@media (min-width: 768px) {\n.item[data-v-6b20396a] {\n    width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));\n    margin-right: var(--gap);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=template&id=0e112ba0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/CardView.vue?vue&type=template&id=0e112ba0&scoped=true& ***!
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
  return _c("div", { staticStyle: { "overflow-x": "hidden" } }, [
    _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",
        staticStyle: {
          position: "sticky",
          background: "#F5F5FB",
          "z-index": "999999999999",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-6 py-0 my-0 d-flex flex-row",
              staticStyle: { "align-items": "center" }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-1",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.goBack()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(this.$root.selectedPaymentCard.name))])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-6  py-0 my-0 text-right" })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: " px-1 col-12 pb-0 d-md-none d-block fixed-top",
        staticStyle: {
          position: "sticky",
          background: "#F5F5FB",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-8 py-0 my-0",
              staticStyle: {
                "align-items": "center",
                "white-space": "nowrap",
                overflow: "hidden",
                "text-overflow": "ellipsis"
              }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.goBack()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _c("h6", { staticClass: "d-inline-block" }, [
                _c("h6", [_vm._v(_vm._s(this.$root.selectedPaymentCard.name))])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-4 py-0 my-0 text-right" },
            [
              _c(
                "v-btn",
                {
                  staticStyle: {
                    "font-size": "12px",
                    color: "white",
                    "font-family": "MediumFont",
                    "text-transform": "none"
                  },
                  attrs: { small: "", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.manageCard()
                    }
                  }
                },
                [_vm._v("\n             Manage\n           ")]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-lg-10 offset-lg-1 py-0 pb-2 px-1 px-md-2",
        staticStyle: { "overflow-x": "hidden" }
      },
      [
        _c("div", { staticClass: "col-12 d-flex px-md-2 px-0 flex-row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-4 d-md-flex d-none",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c(
                "v-card",
                {
                  attrs: { "min-width": "180" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.showFee()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex px-2 pb-2 flex-column text-left" },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex flex-row" },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                "font-family": "BodyFont"
                              }
                            },
                            [_vm._v("Fees")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ml-auto",
                              attrs: { "x-small": "", icon: "" }
                            },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "19px" } },
                                [_vm._v("las la-exclamation-circle")]
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
                          staticStyle: {
                            "font-size": "18px",
                            "font-family": "HeaderFont"
                          }
                        },
                        [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.currencyToCharacter(
                                  _vm.that.$root.selectedPaymentCard.currency
                                )
                              )
                            }
                          }),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.formatMoney(
                                  _vm.that.$root.selectedPaymentCard
                                    .platform_fee +
                                    _vm.that.$root.selectedPaymentCard
                                      .payout_fee +
                                    _vm.that.$root.selectedPaymentCard
                                      .payment_processing_fee
                                )
                              )
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4  d-flex flex-column px-1  py-md-2 py-0",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c(
                "v-card",
                {
                  staticStyle: {
                    "background-repeat": "height:200px !important",
                    "border-radius": "10px",
                    background: "url(/imgs/card_bg_6.jpg)",
                    "background-size": "cover"
                  },
                  attrs: { height: "200", width: "100%", "max-width": "370px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-row",
                      staticStyle: {
                        position: "absolute",
                        width: "100%",
                        top: "0%",
                        left: "0%",
                        height: "25%",
                        "align-items": "center"
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "pl-2 pt-2",
                        attrs: {
                          height: "50",
                          src: "/imgs/credit-card-chip.png"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-row",
                      staticStyle: {
                        position: "absolute",
                        width: "100%",
                        top: "25%",
                        left: "0%",
                        height: "50%",
                        "align-items": "center"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex px-2 flex-column text-left",
                          staticStyle: { width: "50%" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              }
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                color: "white",
                                "font-family": "HeaderFont"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.that.$root.selectedPaymentCard.name)
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex px-2 flex-column text-right",
                          staticStyle: { width: "50%" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              }
                            },
                            [_vm._v("Number")]
                          ),
                          _vm._v(" "),
                          _vm.that.$root.selectedPaymentCard.card_no
                            ? _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    color: "white",
                                    "font-family": "HeaderFont"
                                  }
                                },
                                [
                                  _vm._v(
                                    "**** **** " +
                                      _vm._s(
                                        _vm.that.$root.selectedPaymentCard.card_no.substr(
                                          _vm.that.$root.selectedPaymentCard
                                            .card_no.length - 4
                                        )
                                      )
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-row",
                      staticStyle: {
                        position: "absolute",
                        width: "100%",
                        top: "75%",
                        left: "0%",
                        height: "25%",
                        "align-items": "center"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex px-2 pb-2 flex-column text-left"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              }
                            },
                            [_vm._v("Balance")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "22px",
                                color: "white",
                                "font-family": "HeaderFont"
                              }
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.currencyToCharacter(
                                      _vm.that.$root.selectedPaymentCard
                                        .currency
                                    )
                                  )
                                }
                              }),
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.formatMoney(
                                      _vm.that.$root.selectedPaymentCard.balance
                                    )
                                  )
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "pr-2 pb-2 ml-auto d-md-block d-none",
                        attrs: { height: "40", src: "/imgs/citonhub_grey.png" }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-md-none d-flex pr-2 pb-2 flex-column text-right ml-auto",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.showFee()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              }
                            },
                            [
                              _vm._v("Fees "),
                              _c(
                                "v-icon",
                                {
                                  staticStyle: {
                                    "font-size": "16px",
                                    color: "white"
                                  }
                                },
                                [_vm._v("las la-exclamation-circle")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "18px",
                                color: "white",
                                "font-family": "HeaderFont"
                              }
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.currencyToCharacter(
                                      _vm.that.$root.selectedPaymentCard
                                        .currency
                                    )
                                  )
                                }
                              }),
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.formatMoney(
                                      _vm.that.$root.selectedPaymentCard
                                        .platform_fee +
                                        _vm.that.$root.selectedPaymentCard
                                          .payout_fee +
                                        _vm.that.$root.selectedPaymentCard
                                          .payment_processing_fee
                                    )
                                  )
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 pb-md-2 pb-1 px-0 d-flex flex-row" },
                [
                  _c(
                    "div",
                    { staticClass: "col-12 py-0 px-0 text-center" },
                    [
                      _vm.that.$root.selectedPaymentCard.payout_status !=
                      "pending"
                        ? _c(
                            "v-btn",
                            {
                              staticStyle: { width: "60%" },
                              attrs: {
                                color: "#3C87CD",
                                outlined: "",
                                small: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.makePayout()
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-family": "MediumFont",
                                    "text-transform": "none"
                                  }
                                },
                                [_vm._v("Payout")]
                              )
                            ]
                          )
                        : _c(
                            "v-btn",
                            {
                              staticStyle: { width: "60%" },
                              attrs: {
                                color: "#3C87CD",
                                disabled: "",
                                outlined: "",
                                small: ""
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-family": "MediumFont",
                                    "text-transform": "none"
                                  }
                                },
                                [_vm._v("Payout pending")]
                              )
                            ]
                          )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-4 flex-column px-0 d-none  d-md-flex",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "#ffffff" },
                  on: {
                    click: function($event) {
                      return _vm.manageCard()
                    }
                  }
                },
                [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont",
                        "text-transform": "none"
                      }
                    },
                    [_vm._v("Manage")]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 px-0 px-md-1 pt-md-3 pt-0" },
          [
            _c("h6", [_vm._v("Transactions")]),
            _vm._v(" "),
            _vm.loadingTransactions
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
                  _vm.transactions.length == 0
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "mt-5 px-3 pt-5 text-center",
                            staticStyle: {
                              "font-size": "13px",
                              color: "gray",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm._v(
                              "\n                       No transaction yet.\n                    "
                            )
                          ]
                        )
                      ]
                    : [
                        _c(
                          "div",
                          {
                            staticClass: "col-12 px-0 d-flex py-0 flex-column"
                          },
                          _vm._l(_vm.transactions, function(
                            transaction,
                            index
                          ) {
                            return _c(
                              "v-card",
                              {
                                key: index + "transaction",
                                staticClass: "col-12 d-flex flex-row py-1 mb-2",
                                staticStyle: {
                                  "align-items": "center",
                                  background: "#EAEEF3"
                                },
                                attrs: { flat: "", tile: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.showTransaction(transaction)
                                  }
                                }
                              },
                              [
                                transaction.type == "payout"
                                  ? [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "bg-danger mr-2",
                                          attrs: { icon: "", small: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "19px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-check")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                transaction.type == "withdrawal"
                                  ? [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "bg-primary mr-2",
                                          attrs: { icon: "", small: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "19px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-check")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                transaction.type != "payout" &&
                                transaction.type != "withdrawal"
                                  ? [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "bg-success mr-2",
                                          attrs: { icon: "", small: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "19px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-check")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "normalText" },
                                  [
                                    transaction.type == "support"
                                      ? [
                                          _c(
                                            "span",
                                            { staticClass: "normalText" },
                                            [_vm._v("Received ")]
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "boldText" },
                                            [
                                              _c("span", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.currencyToCharacter(
                                                      transaction.currency
                                                    )
                                                  )
                                                }
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.formatMoney(
                                                      transaction.amount
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" support from "),
                                          _c(
                                            "span",
                                            { staticClass: "boldText" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  transaction.customer_name
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(
                                      "\n                         | " +
                                        _vm._s(
                                          _vm.handleDateFormat(
                                            transaction.created_at
                                          )
                                        ) +
                                        "\n                     "
                                    )
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "ml-auto pl-2" },
                                  [
                                    transaction.type == "payout"
                                      ? [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "boldText text-danger",
                                              staticStyle: {
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [_vm._v(_vm._s(transaction.type))]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    transaction.type == "withdrawal"
                                      ? [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "boldText text-primary",
                                              staticStyle: {
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [_vm._v(_vm._s(transaction.type))]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    transaction.type != "payout" &&
                                    transaction.type != "withdrawal"
                                      ? [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "boldText text-success",
                                              staticStyle: {
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [_vm._v(_vm._s(transaction.type))]
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ],
                              2
                            )
                          }),
                          1
                        )
                      ]
                ],
            _vm._v(" "),
            _vm.transactions.length != 0
              ? _c(
                  "div",
                  {
                    staticClass:
                      "text-center py-1 col-lg-10 offset-lg-2 application application--light fixed-bottom",
                    staticStyle: { background: "#F5F5FB" },
                    attrs: { "data-app": "true" }
                  },
                  [
                    _c("v-pagination", {
                      attrs: {
                        "total-visible": "5",
                        length: _vm.lastPage,
                        circle: "",
                        color: "#3C87CD"
                      },
                      on: { input: _vm.handleInput },
                      model: {
                        value: _vm.currentpage,
                        callback: function($$v) {
                          _vm.currentpage = $$v
                        },
                        expression: "currentpage"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 py-5 my-5" })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-10 offset-lg-1 py-0 pb-2 px-1 px-md-2" },
      [
        _c("div", { staticClass: "col-12 my-5 mt-md-0 d-md-none d-block" }),
        _vm._v(" "),
        _vm.loadingPaymentCard
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
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "vue-horizontal",
              { ref: "horizontal", staticClass: "horizontal py-2 " },
              _vm._l(_vm.paymentCards, function(paymentCard, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "item" },
                  [
                    _c(
                      "v-card",
                      {
                        staticStyle: {
                          "background-repeat": "no-repeat",
                          "border-radius": "10px",
                          background: "url(/imgs/card_bg_6.jpg)",
                          "background-size": "cover"
                        },
                        attrs: { height: "200" },
                        on: {
                          click: function($event) {
                            return _vm.goToCardView(paymentCard)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row",
                            staticStyle: {
                              position: "absolute",
                              width: "100%",
                              top: "0%",
                              left: "0%",
                              height: "25%",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "pl-2 pt-2",
                              attrs: {
                                height: "50",
                                src: "/imgs/credit-card-chip.png"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row",
                            staticStyle: {
                              position: "absolute",
                              width: "100%",
                              top: "25%",
                              left: "0%",
                              height: "50%",
                              "align-items": "center"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex px-2 flex-column text-left",
                                staticStyle: { width: "50%" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "12px",
                                      color: "white",
                                      "font-family": "BodyFont"
                                    }
                                  },
                                  [_vm._v("Name")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "14px",
                                      color: "white",
                                      "font-family": "HeaderFont"
                                    }
                                  },
                                  [_vm._v(_vm._s(paymentCard.name))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex px-2 flex-column text-right",
                                staticStyle: { width: "50%" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "12px",
                                      color: "white",
                                      "font-family": "BodyFont"
                                    }
                                  },
                                  [_vm._v("Number")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "14px",
                                      color: "white",
                                      "font-family": "HeaderFont"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "**** **** " +
                                        _vm._s(
                                          paymentCard.card_no.substr(
                                            paymentCard.card_no.length - 4
                                          )
                                        )
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row",
                            staticStyle: {
                              position: "absolute",
                              width: "100%",
                              top: "75%",
                              left: "0%",
                              height: "25%",
                              "align-items": "center"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex px-2 pb-2 flex-column text-left"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "12px",
                                      color: "white",
                                      "font-family": "BodyFont"
                                    }
                                  },
                                  [_vm._v("Balance")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "22px",
                                      color: "white",
                                      "font-family": "HeaderFont"
                                    }
                                  },
                                  [
                                    _c("span", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.currencyToCharacter(
                                            paymentCard.currency
                                          )
                                        )
                                      }
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.formatMoney(paymentCard.balance)
                                        )
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "pr-2 pb-2 ml-auto",
                              attrs: {
                                height: "40",
                                src: "/imgs/citonhub_grey.png"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 px-0 px-md-1 pt-md-5 pt-3" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm.loadingTransactions
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
                  _vm.transactions.length == 0
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "mt-5 px-3 pt-5 text-center",
                            staticStyle: {
                              "font-size": "13px",
                              color: "grey",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm._v(
                              "\n                       No wallet history yet.\n                    "
                            )
                          ]
                        )
                      ]
                    : [
                        _c(
                          "div",
                          {
                            staticClass: "col-12 px-0 d-flex py-0 flex-column"
                          },
                          _vm._l(_vm.transactions, function(
                            transaction,
                            index
                          ) {
                            return _c(
                              "v-card",
                              {
                                key: index,
                                staticClass: "col-12 d-flex flex-row py-1 mb-2",
                                staticStyle: {
                                  "align-items": "center",
                                  background: "#EAEEF3"
                                },
                                attrs: { tile: "", flat: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.showTransaction(transaction)
                                  }
                                }
                              },
                              [
                                transaction.type == "payout"
                                  ? [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "bg-danger mr-2",
                                          attrs: { icon: "", small: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "19px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-check")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                transaction.type == "withdrawal"
                                  ? [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "bg-primary mr-2",
                                          attrs: { icon: "", small: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "19px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-check")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                transaction.type != "payout" &&
                                transaction.type != "withdrawal"
                                  ? [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "bg-success mr-2",
                                          attrs: { icon: "", small: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "19px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-check")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "normalText" },
                                  [
                                    transaction.type == "support"
                                      ? [
                                          _c(
                                            "span",
                                            { staticClass: "normalText" },
                                            [_vm._v("Received ")]
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "boldText" },
                                            [
                                              _c("span", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.currencyToCharacter(
                                                      transaction.currency
                                                    )
                                                  )
                                                }
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.formatMoney(
                                                      transaction.amount
                                                    )
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" support from "),
                                          _c(
                                            "span",
                                            { staticClass: "boldText" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  transaction.customer_name
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" to "),
                                          _c(
                                            "span",
                                            { staticClass: "boldText" },
                                            [
                                              _vm._v(
                                                _vm._s(transaction.card_name)
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(
                                      "\n                         | " +
                                        _vm._s(
                                          _vm.handleDateFormat(
                                            transaction.created_at
                                          )
                                        ) +
                                        "\n                     "
                                    )
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "ml-auto pl-2" },
                                  [
                                    transaction.type == "payout"
                                      ? [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "boldText text-danger",
                                              staticStyle: {
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [_vm._v(_vm._s(transaction.type))]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    transaction.type == "withdrawal"
                                      ? [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "boldText text-primary",
                                              staticStyle: {
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [_vm._v(_vm._s(transaction.type))]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    transaction.type != "payout" &&
                                    transaction.type != "withdrawal"
                                      ? [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "boldText text-success",
                                              staticStyle: {
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [_vm._v(_vm._s(transaction.type))]
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ],
                              2
                            )
                          }),
                          1
                        )
                      ]
                ],
            _vm._v(" "),
            _vm.transactions.length != 0
              ? _c(
                  "div",
                  {
                    staticClass:
                      "text-center py-1 col-lg-10 offset-lg-2 application application--light fixed-bottom",
                    staticStyle: { background: "transparent" },
                    attrs: { "data-app": "true" }
                  },
                  [
                    _c("v-pagination", {
                      attrs: {
                        "total-visible": "5",
                        length: _vm.lastPage,
                        circle: "",
                        color: "#3C87CD"
                      },
                      on: { input: _vm.handleInput },
                      model: {
                        value: _vm.currentpage,
                        callback: function($$v) {
                          _vm.currentpage = $$v
                        },
                        expression: "currentpage"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 py-5 my-5" })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",
        staticStyle: {
          position: "sticky",
          background: "#F5F5FB",
          "z-index": "999999999999",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 py-0 my-0" }, [
            _c("h5", [_vm._v("Wallet")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6  py-0 my-0 text-right" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-flex flex-row",
        staticStyle: { "align-items": "center" }
      },
      [_c("h6", [_vm._v("Wallet history")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Wallet/CardView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Wallet/CardView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardView_vue_vue_type_template_id_0e112ba0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardView.vue?vue&type=template&id=0e112ba0&scoped=true& */ "./resources/js/components/Wallet/CardView.vue?vue&type=template&id=0e112ba0&scoped=true&");
/* harmony import */ var _CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardView.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/CardView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css& */ "./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardView_vue_vue_type_template_id_0e112ba0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardView_vue_vue_type_template_id_0e112ba0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e112ba0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/CardView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/CardView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Wallet/CardView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=style&index=0&id=0e112ba0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_0e112ba0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Wallet/CardView.vue?vue&type=template&id=0e112ba0&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/CardView.vue?vue&type=template&id=0e112ba0&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_template_id_0e112ba0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardView.vue?vue&type=template&id=0e112ba0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/CardView.vue?vue&type=template&id=0e112ba0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_template_id_0e112ba0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_template_id_0e112ba0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Wallet/card.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=6b20396a&scoped=true& */ "./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css& */ "./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css&");
/* harmony import */ var _card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css& */ "./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css&");
/* harmony import */ var _card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css& */ "./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b20396a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=0&id=6b20396a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=1&id=6b20396a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_1_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=style&index=2&id=6b20396a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_2_id_6b20396a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=6b20396a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);