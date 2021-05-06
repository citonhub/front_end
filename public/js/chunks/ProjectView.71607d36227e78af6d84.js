(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      post: '',
      is_reply: false,
      commentValue: '',
      commentRules: [function (v) {
        return !!v || 'Body is required';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      id: this.$root.currentPost,
      loadingPost: false,
      that: this,
      pageContent: '',
      loadingCode: false,
      showFullLoader: false,
      selectedLangId: '',
      comments: [],
      loadingPostComments: false,
      sendingComment: false
    };
  },
  mounted: function mounted() {
    this.$root.selectedPost = [];
    this.fetchPost();
    this.$root.projectViewComponent = this;
    this.$root.autoOpenPost = false;
  },
  methods: (_methods = {
    goBack: function goBack() {
      // this.viewProjectModal = false;
      this.$root.showViewPost = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    goToProfile: function goToProfile(username) {
      this.$root.selectedUsername = username;
      this.$router.push({
        path: '/profile-view/' + username
      });
    },
    fetchComments: function fetchComments(postId) {
      var _this2 = this;

      this.loadingPostComments = true;
      axios.get('/comments/' + postId).then(function (response) {
        if (response.status == 200) {
          _this2.comments = response.data.data;
          _this2.loadingPostComments = false;
        }
      })["catch"](function (error) {
        _this2.loadingPostComments = false;
      });
    },
    goToProject: function goToProject(project) {
      this.$router.push({
        path: '/board/projects/panel/' + project.project_slug
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    likeComment: function likeComment(comment) {
      var _this3 = this;

      if (comment.liked_by_user) {
        return;
      }

      axios.post('/like-hub-post-comment', {
        "comment_id": comment.id
      }).then(function (response) {
        if (response.status == 200) {
          _this3.comments.map(function (eachcomment) {
            if (eachcomment.id == comment.id) {
              eachcomment.liked_by_user = true;
              eachcomment.likes = parseInt(eachcomment.likes) + 1;
            }
          });
        }
      })["catch"](function (error) {});
    },
    checkDatereal: function checkDatereal(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      var aWeekAgo = moment().subtract(7, 'days');

      if (moment(realTimeHour) >= aWeekAgo) {
        return moment(realTimeHour).format("h:mm a");
      } else {
        return moment(realTimeHour).format("h:mm a");
      }
    },
    scrollToTop: function scrollToTop() {
      var container = document.querySelector('.commentScroller');
      container.scrollTo(0, 0);
    },
    postComment: function postComment() {
      var _this4 = this;

      if (this.commentValue != '') {
        this.sendingComment = true;
        var formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id);
        formData.append('comment', this.commentValue);
        formData.append('is_reply', this.is_reply);
        axios.post('/comment-hub-post', formData).then(function (response) {
          if (response.status == 201) {
            _this4.comments.unshift(response.data.data);

            _this4.scrollToTop();

            _this4.sendingComment = false;
            _this4.commentValue = '';

            _this4.$root.posts.map(function (post) {
              if (post.id == _this4.$root.selectedPost.id) {
                post.comments += 1;
              }
            });
          }
        })["catch"](function (error) {
          _this4.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      } else {
        this.showAlert('Oops!', 'Comment Cannot be empty', 'error');
      }
    },
    likePost: function likePost() {
      var _this5 = this;

      if (this.$root.selectedPost.isLiked) return;
      var formData = new FormData();
      formData.append('post_id', this.$root.selectedPost.id);
      axios.post('/like-hub-post', formData).then(function (response) {
        if (response.status == 204) {
          if (response.data == "liked") {
            _this5.$root.selectedPost.isLiked = 1;
          }
        } else {
          if (response.data == "Post Liked Already") {
            _this5.showAlert('Oops!', response.data, 'error');
          } else if (response.data == "liked") {
            _this5.$root.selectedPost.isLiked = 1;
          }
        }

        _this5.$root.selectedPost.likes += 1;

        _this5.$root.posts.map(function (post) {
          if (post.id == _this5.$root.selectedPost.id) {
            post.likes += 1;
          }
        });
      });
    },
    pinPost: function pinPost() {
      var _this6 = this;

      if (this.$root.selectedPost.isPinned) return;
      var formData = new FormData();
      formData.append('post_id', this.$root.selectedPost.id);
      axios.post('/pin-hub-post', formData).then(function (response) {
        if (response.status == 201) {
          if (response.data == "pinned") {
            _this6.$root.selectedPost.isPinned = 1;
          }
        } else {
          if (response.data == "Post Pinned Already") {
            _this6.showAlert('Oops!', response.data, 'error');
          } else if (response.data == "pinned") {
            _this6.$root.selectedPost.isPinned = 1;
          }
        }

        _this6.$root.selectedPost.pinned += 1;
      });
    },
    showPage: function showPage() {
      this.pageContent = '';
      this.loadingCode = true;
      this.selecetedPanelId = this.$root.selectedPost.project.panel_id;

      if (this.$root.selectedPost.project.is_web) {
        this.loadPageContent(this.selecetedPanelId);
      } else {
        this.runCodeOnSandbox();
      }
    },
    loadPageContent: function loadPageContent(panelId) {
      var _this7 = this;

      axios.get('/run-panel/' + panelId).then(function (response) {
        if (response.status == 200) {
          _this7.loadingCode = false;
          _this7.pageContent = response.data;
        }
      })["catch"](function (error) {
        _this7.showAlert('Oops!', 'Unable to load page content', 'error');
      });
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
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
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
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
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    }
  }, _defineProperty(_methods, "imageStyleUser", function imageStyleUser(dimension, data) {
    if (data.background_color == null) {
      var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
      styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
      return styleString;
    } else {
      var _styleString2 = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

      var imgLink = data.image_name + '.' + data.image_extension;
      _styleString2 += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
      return _styleString2;
    }
  }), _defineProperty(_methods, "checkResponse", function checkResponse(token) {
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
  }), _defineProperty(_methods, "runCodeOnSandbox", function runCodeOnSandbox() {
    var _this8 = this;

    axios.post('/run-code-on-sandbox-project', {
      panel_id: this.selecetedPanelId
    }).then(function (response) {
      if (response.status == 200) {
        var token = response.data[0][0].token;

        if (response.data[0][0].status.description == 'Accepted') {
          _this8.pageContent = response.data[0][0].stdout;
        } else if (response.data[0][0].status.description == 'In Queue') {
          _this8.pageContent = 'In Queue...';

          _this8.checkResponse(token, response.data[1]);
        } else if (response.data[0][0].status.description == 'Processing') {
          _this8.pageContent = 'Processing...';

          _this8.checkResponse(token, response.data[1]);
        } else {
          _this8.pageContent = response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr;
        }
      }
    })["catch"](function (error) {
      _this8.pageContent = 'An issue occured,unable to run on sandbox...';
    });
  }), _defineProperty(_methods, "fetchPost", function fetchPost() {
    var _this9 = this;

    this.loadingPost = true;
    var storedPostData = this.$root.getLocalStore('post_data_' + this.$route.params.post_id + this.$root.username);
    storedPostData.then(function (result) {
      if (result != null) {
        var finalResult = JSON.parse(result);
        _this9.$root.selectedPost = finalResult;

        if (!_this9.$root.selectedPost.link) {
          _this9.showPage();
        }

        _this9.fetchComments(_this9.$root.selectedPost.id);

        _this9.loadingPost = false;

        _this9.updatePost();
      } else {
        axios.get('/fetch-post/' + _this9.$route.params.post_id).then(function (response) {
          if (response.status == 200) {
            _this9.$root.LocalStore('post_data_' + _this9.$route.params.post_id + _this9.$root.username, response.data.data);

            _this9.$root.selectedPost = response.data.data;

            if (!_this9.$root.selectedPost.link) {
              _this9.showPage();
            }

            _this9.fetchComments(_this9.$root.selectedPost.id);

            _this9.loadingPost = false;
          }
        })["catch"](function (error) {
          _this9.loadingPost = false;
        });
      }
    });
  }), _defineProperty(_methods, "updatePost", function updatePost() {
    var _this10 = this;

    axios.get('/fetch-post/' + this.$route.params.post_id).then(function (response) {
      if (response.status == 200) {
        _this10.$root.LocalStore('post_data_' + _this10.$route.params.post_id + _this10.$root.username, response.data.data);

        _this10.$root.selectedPost = response.data.data;
      }
    })["catch"](function (error) {});
  }), _defineProperty(_methods, "getUserLevel", function getUserLevel(points) {
    var imageUrl = '';

    if (points >= 0 && points <= 99) {
      imageUrl += '/imgs/newbie.svg';
    } else if (points >= 100 && points <= 999) {
      imageUrl += '/imgs/junior.svg';
    } else if (points >= 1000 && points <= 4999) {
      imageUrl += '/imgs/intermediate.svg';
    } else if (points >= 5000 && points <= 9999) {
      imageUrl += '/imgs/senior.svg';
    } else if (points >= 10000 && points <= 14999) {
      imageUrl += '/imgs/expert.svg';
    } else if (points >= 15000 && points <= 100000) {
      imageUrl += '/imgs/super_dev.svg';
    }

    return imageUrl;
  }), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntextarea[data-v-529f7189] {\r\n    font-size:13px; \r\n    background:white;\r\n    width:100%; \r\n    height: 45px;\r\n    max-height: 75px;\r\n    padding: 6px 6px;\r\n    resize:none; \r\n    overflow-x: hidden;\r\n     overflow-y: auto;\r\n  \r\n    border-radius:2px;\n}\n.scroller[data-v-529f7189]::-webkit-scrollbar-thumb {\r\n  background-color: #3C87CD;\r\n  outline: 1px solid #3C87CD;\n}\n.scroller[data-v-529f7189]::-webkit-scrollbar {\r\n  width: 5px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectView.vue?vue&type=template&id=529f7189&scoped=true& */ "./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&");
/* harmony import */ var _ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectView.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& */ "./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "529f7189",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/ProjectView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=template&id=529f7189&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);