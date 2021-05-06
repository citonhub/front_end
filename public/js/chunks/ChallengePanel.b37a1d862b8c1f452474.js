(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengePanel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selectedTab: '',
      that: this,
      currentChallenge: '',
      loadingChallenge: false,
      TimerValue: '00 : 00 : 00 : 00',
      countDownDate: '',
      loadingStater: false,
      loadingJoinAction: false,
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-node-js',
        border_color: '#263238',
        background: '#ffffff',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 'PHP'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square',
        border_color: '#263238',
        background: '#ffffff',
        id: 26
      }, {
        name: 'PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 35
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 39
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 100
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c',
        border_color: '#263238',
        background: '#ffffff',
        id: 4
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp',
        border_color: '#263238',
        background: '#ffffff',
        id: 11
      }, {
        name: 'Java',
        icon: 'lab la-java',
        border_color: '#263238',
        background: '#ffffff',
        id: 25
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp',
        border_color: '#263238',
        background: '#ffffff',
        id: 13
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang',
        border_color: '#263238',
        background: '#ffffff',
        id: 18
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin',
        border_color: '#263238',
        background: '#ffffff',
        id: 27
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran',
        border_color: '#263238',
        background: '#ffffff',
        id: 21
      }, {
        name: 'Perl',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 34
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r',
        border_color: '#263238',
        background: '#ffffff',
        id: 40
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby',
        border_color: '#263238',
        background: '#ffffff',
        id: 41
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go',
        border_color: '#263238',
        background: '#ffffff',
        id: 22
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell',
        border_color: '#263238',
        background: '#ffffff',
        id: 24
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua',
        border_color: '#263238',
        background: '#ffffff',
        id: 28
      }, {
        name: 'Pascal',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 33
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript',
        border_color: '#263238',
        background: '#ffffff',
        id: 46
      }, {
        name: 'Rust',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 42
      }, {
        name: 'Swift',
        icon: 'lab la-swift',
        border_color: '#263238',
        background: '#ffffff',
        id: 45
      }, {
        name: 'Scala',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 43
      }],
      selectLangValue: [],
      languageData: [],
      loadingEndChallenge: false
    };
  },
  mounted: function mounted() {
    this.setPage();
    this.$root.challengePanelComponent = this;
    this.$root.selectedChallenge = [];
    this.fetchChallenge();
  },
  methods: {
    shareChallenge: function shareChallenge() {
      this.$root.shareLink = 'https://link.citonhub.com/challenge/' + this.$route.params.challenge_id;
      this.$root.shareText = 'Check out this challenge on Citonhub';
      this.$root.infoText = 'Let others know about this challenge';
      this.$root.alertComponent = this;
      this.$root.showInvitation = true;
    },
    getChallengeLanguages: function getChallengeLanguages() {
      var _this2 = this;

      var languagesArray = this.$root.selectedChallenge.languages.split(',');
      var finalLangArray = [];

      var _loop = function _loop(index) {
        var langData = _this2.languageIcon.filter(function (lang) {
          return lang.id == languagesArray[index];
        });

        if (langData.length > 0) {
          finalLangArray.push(langData[0]);
        }
      };

      for (var index = 0; index < languagesArray.length; index++) {
        _loop(index);
      }

      this.languageData = finalLangArray;
    },
    checkIfCanVote: function checkIfCanVote() {
      var _this3 = this;

      if (this.$root.selectedChallenge.judges) {
        if (this.$root.selectedChallenge.judges == 'everyone') {
          return true;
        } else {
          var UserJudge = this.$root.selectedChallenge.selected_judges.filter(function (eachJudge) {
            return eachJudge.tempId == _this3.$root.user_temp_id;
          });

          if (UserJudge.length > 0) {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    goToPanel: function goToPanel() {
      if (!this.$root.isLogged) {
        this.$root.checkIfUserIsLoggedIn();
        return;
      }

      var projectSlug = this.$root.selectedChallenge.participant_data.project_slug;
      this.$root.panelFromChallenges = true;
      this.$router.push({
        path: '/board/projects/panel/' + projectSlug
      });
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          timeout: 2000,
          message: message,
          zindex: '9999999999',
          position: 'bottomRigh  t',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          timeout: 2000,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          timeout: 2000,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'question') {}
    },
    editChallenge: function editChallenge() {
      this.$router.push({
        path: '/board/challenges/create/edit'
      });
    },
    showResults: function showResults(type) {
      this.$router.push({
        path: '/board/challenges/panel/' + this.$route.params.challenge_id + '/results/' + type
      });
    },
    goToProfile: function goToProfile(username) {
      this.$root.selectedUsername = username;
      this.$router.push({
        path: '/profile-view/' + username
      });
    },
    joinChallenge: function joinChallenge(project) {
      var _this4 = this;

      if (!this.$root.isLogged) {
        this.$root.checkIfUserIsLoggedIn();
        return;
      }

      axios.post('/join-challenge', {
        duel_id: this.$route.params.challenge_id,
        project_slug: project.project_slug,
        panel_id: project.panel_id
      }).then(function (response) {
        if (response.status == 200) {
          _this4.loadingJoinAction = false;
          _this4.$root.selectedChallenge.user_participating = true;
          _this4.$root.selectedChallenge.participant_data = response.data.participant;

          _this4.$root.LocalStore('challenge_data_' + _this4.$route.params.challenge_id + _this4.$root.username, _this4.$root.selectedChallenge);

          var storedProjects = _this4.$root.getLocalStore('user_projects_' + _this4.$root.username);

          storedProjects.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              _this4.$root.projectList = finalResult;

              _this4.$root.projectList.user_projects.unshift(project);

              _this4.$root.LocalStore('user_projects_' + _this4.$root.username, _this4.$root.projectList);
            }
          });
          _this4.loadingJoinAction = false;
          var projectSlug = _this4.$root.selectedChallenge.participant_data.project_slug;
          _this4.$root.panelFromChallenges = true;

          _this4.$router.push({
            path: '/board/projects/panel/' + project.project_slug
          });
        }
      })["catch"](function (error) {});
    },
    updateChallenge: function updateChallenge() {
      var _this5 = this;

      axios.get('/fetch-challenge-data/' + this.$route.params.challenge_id).then(function (response) {
        if (response.status == 200) {
          _this5.$root.LocalStore('challenge_data_' + _this5.$route.params.challenge_id + _this5.$root.username, response.data[0]);

          _this5.$root.selectedChallenge = response.data[0];
        }
      })["catch"](function (error) {});
    },
    createProject: function createProject(lang) {
      var _this6 = this;

      this.loadingJoinAction = true;
      this.$root.showLanguageOption = false;
      axios.post('/create-project', {
        app_type: 'Multiple-pages',
        title: this.$root.selectedChallenge.title,
        panel_language: lang.id,
        language_name: lang.name.toUpperCase()
      }).then(function (response) {
        if (response.status == 200) {
          _this6.joinChallenge(response.data.project);
        }
      })["catch"](function (error) {
        _this6.loadingJoinAction = false;
      });
    },
    startChallenge: function startChallenge() {
      var _this7 = this;

      this.loadingStater = true;
      axios.post('/start-challenge', {
        duelId: this.$route.params.challenge_id
      }).then(function (response) {
        if (response.status == 200) {
          _this7.reloadChallenge();
        } else {}
      })["catch"](function (error) {});
    },
    endVoting: function endVoting() {
      var _this8 = this;

      this.loadingEndChallenge = true;
      axios.post('/end-challenge', {
        duelId: this.$route.params.challenge_id
      }).then(function (response) {
        if (response.status == 200) {
          _this8.reloadChallenge();

          _this8.loadingEndChallenge = false;

          _this8.showAlert('Nice!', ' Voting has ended', 'success');
        } else {}
      })["catch"](function (error) {
        _this8.loadingEndChallenge = false;

        _this8.showAlert('Oops!', ' Something went wrong, please try again.', 'error');
      });
    },
    reloadChallenge: function reloadChallenge() {
      var _this9 = this;

      axios.get('/fetch-challenge-data/' + this.$route.params.challenge_id).then(function (response) {
        if (response.status == 200) {
          _this9.$root.LocalStore('challenge_data_' + _this9.$route.params.challenge_id + _this9.$root.username, response.data[0]);

          _this9.$root.selectedChallenge = response.data[0];
          _this9.countDownDate = new Date(_this9.$root.selectedChallenge.duel_terminal_time).getTime();

          var status = _this9.checkDuelStatus(_this9.$root.selectedChallenge);

          _this9.countDownDate = new Date(_this9.$root.selectedChallenge.duel_terminal_time).getTime();

          if (status == 'Active') {
            _this9.countDownDate = new Date(_this9.$root.selectedChallenge.duel_terminal_time).getTime();
          }

          _this9.countDownTimer();

          _this9.loadingStater = false;
        }
      })["catch"](function (error) {});
    },
    fetchChallenge: function fetchChallenge() {
      var _this10 = this;

      this.loadingChallenge = true;
      var storedProjectData = this.$root.getLocalStore('challenge_data_' + this.$route.params.challenge_id + this.$root.username);
      storedProjectData.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this10.$root.selectedChallenge = finalResult;
          _this10.countDownDate = new Date(_this10.$root.selectedChallenge.duel_terminal_time).getTime();

          var status = _this10.checkDuelStatus(_this10.$root.selectedChallenge);

          _this10.countDownDate = new Date(_this10.$root.selectedChallenge.duel_terminal_time).getTime();

          if (status == 'Active') {
            _this10.countDownDate = new Date(_this10.$root.selectedChallenge.duel_terminal_time).getTime();
          }

          _this10.countDownTimer();

          _this10.loadingChallenge = false;

          _this10.getChallengeLanguages();

          _this10.updateChallenge();
        } else {
          axios.get('/fetch-challenge-data/' + _this10.$route.params.challenge_id).then(function (response) {
            if (response.status == 200) {
              _this10.$root.LocalStore('challenge_data_' + _this10.$route.params.challenge_id + _this10.$root.username, response.data[0]);

              _this10.$root.selectedChallenge = response.data[0];
              _this10.countDownDate = new Date(_this10.$root.selectedChallenge.duel_terminal_time).getTime();

              var status = _this10.checkDuelStatus(_this10.$root.selectedChallenge);

              _this10.countDownDate = new Date(_this10.$root.selectedChallenge.duel_terminal_time).getTime();

              if (status == 'Active') {
                _this10.countDownDate = new Date(_this10.$root.selectedChallenge.duel_terminal_time).getTime();
              }

              _this10.countDownTimer();

              _this10.getChallengeLanguages();

              _this10.loadingChallenge = false;
            }
          })["catch"](function (error) {
            _this10.loadingChallenge = false;
          });
        }
      });
    },
    knowDuelStatus: function knowDuelStatus(duel) {
      var result = this.checkDuelStatus(duel);

      if (result == 'Active' || result == 'Pending') {
        return true;
      } else {
        return false;
      }
    },
    setPage: function setPage() {
      if (this.$router.currentRoute.path.indexOf('description') >= 0) {
        this.selectedTab = 'description';
      }

      if (this.$router.currentRoute.path.indexOf('rules') >= 0) {
        this.selectedTab = 'rules';
      }

      if (this.$router.currentRoute.path.indexOf('judges') >= 0) {
        this.selectedTab = 'judges';
      }

      if (this.$router.currentRoute.path.indexOf('leaderboard') >= 0) {
        this.selectedTab = 'leaderboard';
      }

      if (this.$router.currentRoute.path.indexOf('discussion') >= 0) {
        this.selectedTab = 'discussion';
      }
    },
    countDownTimer: function countDownTimer() {
      var _this = this;

      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = _this.countDownDate - now; // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);

        if (days <= 9) {
          days = '0' + days;
        }

        if (hours <= 9) {
          hours = '0' + hours;
        }

        if (minutes <= 9) {
          minutes = '0' + minutes;
        }

        if (seconds <= 9) {
          seconds = '0' + seconds;
        }

        _this.TimerValue = days + " : " + hours + " : " + minutes + " : " + seconds; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(x);
          _this.TimerValue = "00 : 00 : 00 : 00";
        }
      }, 1000);
    },
    goToPage: function goToPage(page) {
      if (page == 'channel') {
        this.$root.autoOpenChat = true;
        this.$root.autoOpenChatId = this.$root.selectedChallenge.channel_id;
        this.$router.push({
          path: '/channels'
        });
        return;
      }

      this.$router.push({
        path: '/board/challenges/panel/' + this.$route.params.challenge_id + '/' + page
      });
      this.selectedTab = page;
    },
    goBack: function goBack() {
      this.$router.push({
        path: '/board/challenges/list'
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/thumbnails/' + imgLink + ');';
        return _styleString;
      }
    },
    imageStyle: function imageStyle(height, data, type) {
      var styleString = '';

      if (data.background_color == null) {
        if (type == 'large') {
          styleString = "position:absolute;height:" + height + ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5; background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;background-repeat: no-repeat;";
        } else {
          styleString = "position:absolute;height:" + height + ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;background-size: cover; border-radius:0px;background-repeat: no-repeat;";
        }

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:#ffffff; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:#ffffff; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:#ffffff; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        if (type == 'large') {
          styleString = "position:absolute;height:" + height + ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5; background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;background-repeat: no-repeat;";
        } else {
          styleString = "position:absolute;height:" + height + ";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;background-size: cover; border-radius:0px;background-repeat: no-repeat;";
        }

        var imgLink = data.image_name + '.' + data.image_extension;
        styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/challenges/thumbnails/' + imgLink + ');';
        return styleString;
      }
    },
    checkDuelStatus: function checkDuelStatus(duel) {
      if (duel.started == 0) {
        return 'Pending';
      }

      var now = moment();
      var terminalDateToMoment = moment(duel.duel_terminal_time);
      var differenceInSeconds = terminalDateToMoment.diff(now, 'seconds');

      if (differenceInSeconds <= 0) {
        return 'Ended';
      } else {
        return 'Active';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sideBar[data-v-5e8fef50]:hover{\n     \n      border-bottom:4px solid #3C87CD !important;\n      cursor: pointer;\n}\n.scroller[data-v-5e8fef50]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-5e8fef50]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true& ***!
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
        staticClass: "col-lg-10 offset-lg-2 py-0 px-0",
        staticStyle: {
          position: "fixed",
          height: "88%",
          left: "0",
          top: "10%",
          "z-index": "9999999999999999",
          "overflow-y": "auto"
        }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none py-0 px-0",
            staticStyle: {
              position: "absolute",
              left: "0%",
              top: "0%",
              height: "98%",
              background: "#ffffff",
              border: "1px solid #c5c5c5",
              "border-radius": "6px"
            }
          },
          [
            this.$root.selectedChallenge != []
              ? [
                  _c(
                    "div",
                    {
                      style: _vm.imageStyle(
                        "35%",
                        this.$root.selectedChallenge,
                        "large"
                      )
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-column",
                          staticStyle: {
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            top: "0",
                            left: "0",
                            background: "rgba(27, 27, 30, 0.5)",
                            "border-top-left-radius": "6px",
                            "border-top-right-radius": "6px"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-row px-2 pt-2 ",
                              staticStyle: {
                                height: "30%",
                                "z-index": "99999999999999999 !important"
                              }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-2 mt-2",
                                  staticStyle: {
                                    "z-index": "9999999999999999 !important"
                                  },
                                  attrs: { icon: "" },
                                  on: { click: _vm.goBack }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticStyle: {
                                        "font-size": "25px",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v("las la-arrow-left")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex flex-column pt-1" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "18px",
                                        "font-family": "HeaderFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          this.$root.selectedChallenge.title
                                        ) + " "
                                      ),
                                      this.$root.username ==
                                      this.$root.selectedChallenge.username
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "" },
                                              on: { click: _vm.editChallenge }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "#ffffff" } },
                                                [_vm._v("las la-edit")]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "pt-1",
                                      staticStyle: {
                                        "font-size": "14px",
                                        "font-family": "BodyFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          this.$root.selectedChallenge.summary
                                        ) + " "
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
                              staticClass: "d-flex px-2 py-2 ",
                              staticStyle: {
                                height: "40%",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex flex-column text-center"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "25px",
                                        "font-family": "HeaderFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.TimerValue))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "pt-1",
                                      staticStyle: {
                                        "font-size": "14px",
                                        "font-family": "BodyFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Days : Hours : Minutes : Seconds "
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
                              staticClass: "d-flex px-2 py-2 ",
                              staticStyle: { height: "30%", width: "100%" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-column-reverse text-center",
                                  staticStyle: { height: "100%", width: "100%" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-flex flex-row",
                                      staticStyle: {
                                        "align-items": "center",
                                        width: "100%"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-8 py-0 px-0 d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          this.$root.selectedChallenge
                                            .owner_profile
                                            ? _c("div", {
                                                staticClass:
                                                  "d-inline-block mx-2 ",
                                                style: _vm.imageStyleUser(
                                                  40,
                                                  this.$root.selectedChallenge
                                                    .owner_profile
                                                ),
                                                on: {
                                                  click: function($event) {
                                                    $event.stopPropagation()
                                                    return _vm.goToProfile(
                                                      _vm.that.$root
                                                        .selectedChallenge
                                                        .username
                                                    )
                                                  }
                                                }
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticStyle: {
                                                "font-size": "13px",
                                                "font-family": "BodyFont",
                                                color: "#ffffff"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  this.$root.selectedChallenge
                                                    .username
                                                ) + " "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "mx-1",
                                              staticStyle: {
                                                "font-size": "8px",
                                                color: "#ffffff"
                                              }
                                            },
                                            [_vm._v("mdi-record")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "d-md-block d-none",
                                              staticStyle: {
                                                "font-size": "13px",
                                                "font-family": "BodyFont",
                                                color: "#ffffff"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "  " +
                                                  _vm._s(
                                                    _vm.checkDuelStatus(
                                                      this.$root
                                                        .selectedChallenge
                                                    )
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "mx-1",
                                              staticStyle: {
                                                "font-size": "8px",
                                                color: "#ffffff"
                                              }
                                            },
                                            [_vm._v("mdi-record")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "d-md-block d-none",
                                              staticStyle: {
                                                "font-size": "14px",
                                                "font-family": "BodyFont",
                                                color: "#ffffff"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticStyle: {
                                                    "font-size": "20px"
                                                  },
                                                  attrs: { color: "#ffffff" }
                                                },
                                                [_vm._v("las la-user-friends")]
                                              ),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    this.$root.selectedChallenge
                                                      .current_participant
                                                  ) +
                                                  " "
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
                                          staticClass:
                                            "col-4 py-0 px-2 d-flex flex-row-reverse",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "ml-1",
                                              staticStyle: {
                                                "font-size": "13px",
                                                "font-weight": "bolder",
                                                background: "white",
                                                "font-family": "MediumFont"
                                              },
                                              attrs: {
                                                outlined: "",
                                                medium: "",
                                                rounded: "",
                                                color: "#3C87CD"
                                              },
                                              on: { click: _vm.shareChallenge }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "text-transform":
                                                      "capitalize"
                                                  }
                                                },
                                                [_vm._v("Share")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "ml-r",
                                                  staticStyle: {
                                                    "font-size": "18px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "mdi mdi-share-variant"
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          this.$root.username ==
                                            this.$root.selectedChallenge
                                              .username &&
                                          _vm.checkDuelStatus(
                                            this.$root.selectedChallenge
                                          ) == "Pending"
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bolder",
                                                    color: "white",
                                                    "font-family": "MediumFont"
                                                  },
                                                  attrs: {
                                                    loading: _vm.loadingStater,
                                                    medium: "",
                                                    rounded: "",
                                                    color: "#3C87CD"
                                                  },
                                                  on: {
                                                    click: _vm.startChallenge
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "white",
                                                        "text-transform":
                                                          "capitalize"
                                                      }
                                                    },
                                                    [_vm._v("Start")]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          this.$root.selectedChallenge
                                            .user_participating
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bolder",
                                                    color: "white",
                                                    "font-family": "MediumFont"
                                                  },
                                                  attrs: {
                                                    medium: "",
                                                    rounded: "",
                                                    color: "#3C87CD"
                                                  },
                                                  on: { click: _vm.goToPanel }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "white",
                                                        "text-transform":
                                                          "capitalize"
                                                      }
                                                    },
                                                    [_vm._v("Panel")]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !this.$root.selectedChallenge
                                            .user_participating &&
                                          !this.$root.selectedChallenge
                                            .participant_reached &&
                                          _vm.knowDuelStatus(
                                            this.$root.selectedChallenge
                                          )
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bolder",
                                                    color: "white",
                                                    "font-family": "MediumFont"
                                                  },
                                                  attrs: {
                                                    loading:
                                                      _vm.loadingJoinAction,
                                                    medium: "",
                                                    rounded: "",
                                                    color: "#3C87CD"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.that.$root.showLanguageOption = true
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "white",
                                                        "text-transform":
                                                          "capitalize"
                                                      }
                                                    },
                                                    [_vm._v("Join")]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          this.$root.selectedChallenge.voting ==
                                            null && _vm.checkIfCanVote()
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bolder",
                                                    color: "white",
                                                    "font-family": "MediumFont"
                                                  },
                                                  attrs: {
                                                    medium: "",
                                                    rounded: "",
                                                    color: "#3C87CD"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.showResults(
                                                        "vote"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "white",
                                                        "text-transform":
                                                          "capitalize"
                                                      }
                                                    },
                                                    [_vm._v("Vote")]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          this.$root.username ==
                                            this.$root.selectedChallenge
                                              .username &&
                                          _vm.checkDuelStatus(
                                            this.$root.selectedChallenge
                                          ) == "Ended" &&
                                          this.$root.selectedChallenge.voting ==
                                            null
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bolder",
                                                    color: "white",
                                                    "font-family": "MediumFont"
                                                  },
                                                  attrs: {
                                                    loading:
                                                      _vm.loadingEndChallenge,
                                                    medium: "",
                                                    rounded: "",
                                                    color: "#3C87CD"
                                                  },
                                                  on: { click: _vm.endVoting }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "white",
                                                        "text-transform":
                                                          "capitalize"
                                                      }
                                                    },
                                                    [_vm._v("End voting")]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.checkDuelStatus(
                                            this.$root.selectedChallenge
                                          ) == "Ended"
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bolder",
                                                    color: "white",
                                                    "font-family": "MediumFont"
                                                  },
                                                  attrs: {
                                                    medium: "",
                                                    rounded: "",
                                                    color: "#3C87CD"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.showResults(
                                                        "view"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        color: "white",
                                                        "text-transform":
                                                          "capitalize"
                                                      }
                                                    },
                                                    [_vm._v("Results")]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            !_vm.loadingChallenge
              ? [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        position: "absolute",
                        height: "46px",
                        width: "100%",
                        top: "35%",
                        left: "0",
                        "overflow-y": "hidden",
                        "overflow-x": "auto",
                        "border-bottom": "1px solid #c5c5c5",
                        background: "whitesmoke"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-12 px-0 d-flex flex-row py-0",
                          staticStyle: {
                            "align-items": "center",
                            height: "100%",
                            "border-right": "1px solid #c5c5c5",
                            position: "absolute",
                            top: "0"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "py-2 px-3 mr-1 sideBar",
                              style:
                                _vm.selectedTab == "description"
                                  ? " border-bottom:4px solid #3C87CD;"
                                  : "",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.goToPage("description")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    "font-family": "MediumFont"
                                  }
                                },
                                [_vm._v("Description")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "py-2 px-3 mr-1 sideBar",
                              style:
                                _vm.selectedTab == "rules"
                                  ? " border-bottom:4px solid #3C87CD;"
                                  : "",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.goToPage("rules")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    "font-family": "MediumFont"
                                  }
                                },
                                [_vm._v("Rules")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "py-2 px-3 mr-1 sideBar",
                              style:
                                _vm.selectedTab == "judges"
                                  ? " border-bottom:4px solid #3C87CD;"
                                  : "",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.goToPage("judges")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    "font-family": "MediumFont"
                                  }
                                },
                                [_vm._v("Judges")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "py-2 px-3 mr-1 sideBar",
                              style:
                                _vm.selectedTab == "leaderboard"
                                  ? " border-bottom:4px solid #3C87CD;"
                                  : "",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.goToPage("leaderboard")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    "font-family": "MediumFont"
                                  }
                                },
                                [_vm._v("Leaderboard")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          this.$root.selectedChallenge.channel_id
                            ? _c(
                                "div",
                                {
                                  staticClass: "py-2 px-3 mr-1 sideBar",
                                  style:
                                    _vm.selectedTab == "channel"
                                      ? " border-bottom:4px solid #3C87CD;"
                                      : "",
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.goToPage("channel")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "14px",
                                        "font-family": "MediumFont"
                                      }
                                    },
                                    [_vm._v("Join Channel")]
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
                      staticStyle: {
                        position: "absolute",
                        height: "59%",
                        width: "100%",
                        top: "41%",
                        left: "0",
                        "overflow-y": "auto",
                        "overflow-x": "hidden"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-12 scroller",
                          staticStyle: {
                            height: "100%",
                            position: "absolute",
                            top: "0%",
                            "overflow-y": "auto",
                            "overflow-x": "hidden"
                          }
                        },
                        [_c("router-view")],
                        1
                      )
                    ]
                  )
                ]
              : _vm._e()
          ],
          2
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-none d-block py-0 px-0",
        staticStyle: {
          position: "fixed",
          "z-index": "9999999999999",
          left: "0%",
          top: "0%",
          height: "100%",
          background: "#ffffff"
        }
      },
      [
        _c(
          "v-btn",
          {
            staticClass: "d-inline-block  ",
            staticStyle: {
              position: "fixed",
              background: "#3C87CD",
              top: "1%",
              right: "2%",
              "z-index": "990679797879"
            },
            attrs: { icon: "", color: "#ffffff" },
            on: { click: _vm.goBack }
          },
          [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
          1
        ),
        _vm._v(" "),
        this.$root.selectedChallenge != []
          ? [
              _c(
                "div",
                {
                  style: _vm.imageStyle(
                    "250px",
                    this.$root.selectedChallenge,
                    "small"
                  )
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-column",
                      staticStyle: {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        top: "0",
                        left: "0",
                        background: "rgba(27, 27, 30, 0.5)"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-row px-2 pt-2 ",
                          staticStyle: { height: "30%" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex flex-column pt-2 pr-2" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex flex-row",
                                  staticStyle: {
                                    "font-size": "14px",
                                    "font-family": "HeaderFont",
                                    color: "#ffffff",
                                    "align-items": "center"
                                  }
                                },
                                [
                                  _c("div", [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          this.$root.selectedChallenge.title
                                        )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  this.$root.username ==
                                  this.$root.selectedChallenge.username
                                    ? _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-1",
                                          staticStyle: { "font-size": "20px" },
                                          attrs: { color: "#ffffff" },
                                          on: { click: _vm.editChallenge }
                                        },
                                        [_vm._v("las la-edit")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "pt-1",
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-family": "BodyFont",
                                    color: "#ffffff"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      this.$root.selectedChallenge.summary
                                    ) + " "
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
                          staticClass: "d-flex px-2 py-2 ",
                          staticStyle: {
                            height: "40%",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex flex-column text-center" },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "22px",
                                    "font-family": "HeaderFont",
                                    color: "#ffffff"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.TimerValue))]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "pt-1",
                                  staticStyle: {
                                    "font-size": "12px",
                                    "font-family": "BodyFont",
                                    color: "#ffffff"
                                  }
                                },
                                [_vm._v("Days : Hours : Minutes : Seconds ")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex px-2 py-2 ",
                          staticStyle: { height: "30%", width: "100%" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-column-reverse text-center",
                              staticStyle: { height: "100%", width: "100%" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex flex-row",
                                  staticStyle: {
                                    "align-items": "center",
                                    width: "100%"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 py-0 px-0 d-flex flex-row",
                                      staticStyle: { "align-items": "center" }
                                    },
                                    [
                                      this.$root.selectedChallenge.owner_profile
                                        ? _c("div", {
                                            staticClass: "d-inline-block mx-2 ",
                                            style: _vm.imageStyleUser(
                                              40,
                                              this.$root.selectedChallenge
                                                .owner_profile
                                            ),
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.goToProfile(
                                                  _vm.that.$root
                                                    .selectedChallenge.username
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-family": "BodyFont",
                                            color: "#ffffff"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              this.$root.selectedChallenge
                                                .username
                                            ) + " "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-1",
                                          staticStyle: {
                                            "font-size": "8px",
                                            color: "#ffffff"
                                          }
                                        },
                                        [_vm._v("mdi-record")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "font-size": "12px",
                                            "font-family": "BodyFont",
                                            color: "#ffffff"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "  " +
                                              _vm._s(
                                                _vm.checkDuelStatus(
                                                  this.$root.selectedChallenge
                                                )
                                              ) +
                                              " "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-1",
                                          staticStyle: {
                                            "font-size": "8px",
                                            color: "#ffffff"
                                          }
                                        },
                                        [_vm._v("mdi-record")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-md-none d-block",
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-family": "BodyFont",
                                            color: "#ffffff"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "16px"
                                              },
                                              attrs: { color: "#ffffff" }
                                            },
                                            [_vm._v("las la-user-friends")]
                                          ),
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                this.$root.selectedChallenge
                                                  .current_participant
                                              )
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        !_vm.loadingChallenge
          ? [
              _c(
                "div",
                {
                  staticClass: "fixed-top",
                  staticStyle: {
                    position: "absolute",
                    height: "40px",
                    width: "100%",
                    top: "250px",
                    left: "0%",
                    "overflow-y": "hidden",
                    "overflow-x": "auto",
                    "white-space": "nowrap",
                    "border-bottom": "1px solid #c5c5c5",
                    background: "whitesmoke"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 px-0 d-flex flex-row py-0",
                      staticStyle: {
                        "align-items": "center",
                        height: "100%",
                        position: "absolute",
                        top: "0"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "description"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("description")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Description")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "rules"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("rules")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Rules")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "judges"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("judges")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Judges")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "leaderboard"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("leaderboard")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Leaderboard")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      this.$root.selectedChallenge.channel_id
                        ? _c(
                            "div",
                            {
                              staticClass: "py-2 px-3 mr-1 sideBar",
                              style:
                                _vm.selectedTab == "channel"
                                  ? " border-bottom:4px solid #3C87CD;"
                                  : "",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.goToPage("channel")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-family": "MediumFont"
                                  }
                                },
                                [_vm._v("Join Channel")]
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
                  staticStyle: {
                    position: "absolute",
                    height: "500px",
                    width: "100%",
                    top: "290px",
                    left: "0",
                    "overflow-y": "auto",
                    "overflow-x": "hidden",
                    background: "white"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 scroller",
                      staticStyle: {
                        height: "100%",
                        position: "absolute",
                        top: "0%",
                        "overflow-y": "auto",
                        "overflow-x": "hidden",
                        "padding-bottom": "400px"
                      }
                    },
                    [_c("router-view")],
                    1
                  )
                ]
              )
            ]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    this.$root.showLanguageOption
      ? _c(
          "div",
          {
            staticClass: "py-0 px-0 ",
            staticStyle: {
              position: "fixed",
              left: "0%",
              width: "100%",
              height: "100%",
              top: "0%",
              "z-index": "99999999999999999",
              background: "rgba(27, 27, 30, 0.32)"
            },
            on: {
              click: function($event) {
                _vm.that.$root.showLanguageOption = false
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "d-flex",
                staticStyle: {
                  position: "absolute",
                  height: "90%",
                  top: "5%",
                  width: "94%",
                  left: "3%",
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "col-lg-3 py-2  col-md-6 scroller",
                    staticStyle: { "max-height": "400px", "overflow-y": "auto" }
                  },
                  [
                    _c("div", { staticClass: "col-12 py-1 text-center" }, [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-family": "MediumFont",
                            "font-size": "13px"
                          }
                        },
                        [_vm._v("Select your language choice")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12  py-0" }, [
                      _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(_vm.languageData, function(lang, index) {
                          return _c(
                            "v-card",
                            {
                              key: index,
                              staticClass: "py-2 px-2 d-flex flex-row col-12",
                              staticStyle: {
                                "border-bottom": "1px solid #c5c5c5"
                              },
                              attrs: { tile: "", flat: "" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.createProject(lang)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "mr-2" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass: "mx-1",
                                    staticStyle: { color: "#3C87CD" }
                                  },
                                  [_c("i", { class: lang.icon })]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-family": "BodyFont",
                                      "font-size": "13px"
                                    }
                                  },
                                  [_vm._v(_vm._s(lang.name))]
                                )
                              ])
                            ]
                          )
                        }),
                        1
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    this.$router.currentRoute.path.indexOf("discussion") <= 0 &&
    this.$router.currentRoute.path.indexOf("results") <= 0
      ? _c(
          "div",
          {
            staticClass: "d-md-none d-flex flex-row-reverse",
            staticStyle: {
              "z-index": "9999999999",
              "overflow-x": "auto",
              width: "100%",
              position: "fixed",
              bottom: "2%",
              right: "3%"
            }
          },
          [
            _c(
              "v-btn",
              {
                staticClass: "ml-1",
                staticStyle: {
                  "font-size": "13px",
                  "font-weight": "bolder",
                  background: "white",
                  "font-family": "MediumFont"
                },
                attrs: {
                  outlined: "",
                  medium: "",
                  rounded: "",
                  color: "#3C87CD"
                },
                on: { click: _vm.shareChallenge }
              },
              [
                _c(
                  "v-icon",
                  { staticClass: "ml-r", staticStyle: { "font-size": "18px" } },
                  [_vm._v("mdi mdi-share-variant")]
                )
              ],
              1
            ),
            _vm._v(" "),
            this.$root.username == this.$root.selectedChallenge.username &&
            _vm.checkDuelStatus(this.$root.selectedChallenge) == "Pending"
              ? _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: {
                      loading: _vm.loadingStater,
                      medium: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.startChallenge }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "capitalize"
                        }
                      },
                      [_vm._v("Start")]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            this.$root.selectedChallenge.user_participating
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-1",
                    staticStyle: {
                      "font-size": "13px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { medium: "", rounded: "", color: "#3C87CD" },
                    on: { click: _vm.goToPanel }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "capitalize"
                        }
                      },
                      [_vm._v("Panel")]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !this.$root.selectedChallenge.user_participating &&
            !this.$root.selectedChallenge.participant_reached &&
            _vm.knowDuelStatus(this.$root.selectedChallenge)
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-1",
                    staticStyle: {
                      "font-size": "13px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: {
                      loading: _vm.loadingJoinAction,
                      medium: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: {
                      click: function($event) {
                        _vm.that.$root.showLanguageOption = true
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "capitalize"
                        }
                      },
                      [_vm._v("Join")]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            this.$root.selectedChallenge.voting == null && _vm.checkIfCanVote()
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-1",
                    staticStyle: {
                      "font-size": "13px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { medium: "", rounded: "", color: "#3C87CD" },
                    on: {
                      click: function($event) {
                        return _vm.showResults("vote")
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "capitalize"
                        }
                      },
                      [_vm._v("Vote")]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            this.$root.username == this.$root.selectedChallenge.username &&
            _vm.checkDuelStatus(this.$root.selectedChallenge) == "Ended" &&
            this.$root.selectedChallenge.voting == null
              ? _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: {
                      loading: _vm.loadingEndChallenge,
                      medium: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.endVoting }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "capitalize"
                        }
                      },
                      [_vm._v("End voting")]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.checkDuelStatus(this.$root.selectedChallenge) == "Ended"
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-1",
                    staticStyle: {
                      "font-size": "13px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { medium: "", rounded: "", color: "#3C87CD" },
                    on: {
                      click: function($event) {
                        return _vm.showResults("view")
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "capitalize"
                        }
                      },
                      [_vm._v("Results")]
                    )
                  ]
                )
              : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel.vue?vue&type=template&id=5e8fef50&scoped=true& */ "./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&");
/* harmony import */ var _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& */ "./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e8fef50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Panel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=template&id=5e8fef50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);