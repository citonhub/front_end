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
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-virtual-scroller/dist/vue-virtual-scroller.css */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_3__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




Vue.component('DynamicScroller', vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["DynamicScroller"]);
Vue.component('DynamicScrollerItem', vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__["DynamicScrollerItem"]);

var CommentPost = function CommentPost() {
  return __webpack_require__.e(/*! import() | CommentPost */ "CommentPost").then(__webpack_require__.bind(null, /*! ./comment.vue */ "./resources/js/components/Hub/comment.vue"));
};

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
      sendingComment: false,
      replyCommentIsOn: false,
      repliedComment: []
    };
  },
  components: {
    CommentPost: CommentPost
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
    this.$root.selectedPost = [];
    this.fetchPost();
    this.$root.projectViewComponent = this;
    this.$root.autoOpenPost = false;
  },
  methods: (_methods = {
    showFullPage: function showFullPage() {
      if (this.$root.selectedPost.project) {
        if (this.$root.selectedPost.project.is_web) {
          window.open('/run-panel/' + this.$root.selectedPost.project.panel_id, '_blank');
        }
      }

      if (this.$root.selectedPost.link) {
        window.open(this.$root.selectedPost.project_url, '_blank');
      }
    },
    showReplyAction: function showReplyAction(comment) {
      this.replyCommentIsOn = true;
      this.repliedComment = comment;
      this.is_reply = true;
    },
    closeComment: function closeComment() {
      this.replyCommentIsOn = false;
      this.repliedComment = [];
      this.is_reply = false;
    },
    goBack: function goBack() {
      // this.viewProjectModal = false;
      this.$root.showViewPost = false;

      if (this.$root.fromProfile) {
        this.$router.push({
          path: '/profile-view/' + this.$root.fromProfileUsername
        });
        this.$root.fromProfile = false;
      } else {
        this.$router.push({
          path: '/hub'
        });
      }
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

          _this2.comments.map(function (eachcomment) {
            eachcomment.tagged = false;
          });

          _this2.loadingPostComments = false;
          setTimeout(function () {
            _this2.scrollToBottom();
          }, 1700);
        }
      })["catch"](function (error) {
        _this2.loadingPostComments = false;
      });
    },
    scrollToComment: function scrollToComment(comment) {
      var _this3 = this;

      var commentData = this.comments.filter(function (eachcomment) {
        return comment.id == eachcomment.id;
      });

      if (commentData.length > 0) {
        var fullComment = commentData[0];
        var commentIndex = this.comments.indexOf(fullComment);
        this.$refs.commentScrollerPost.scrollToItem(commentIndex);
        this.comments.map(function (eachcomment) {
          if (comment.id == eachcomment.id) {
            eachcomment.tagged = true;
          }
        });
        setTimeout(function () {
          _this3.comments.map(function (eachcomment) {
            if (comment.id == eachcomment.id) {
              eachcomment.tagged = false;
            }
          });
        }, 2000);
      }
    },
    goToProject: function goToProject(project) {
      this.$root.componentIsLoading = true;
      this.$root.viewFromPost = true;
      this.$root.showViewPost = false;
      this.$root.showProfileView = false;
      this.$router.push({
        path: '/board/projects/panel/' + project.project_slug
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
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    likeComment: function likeComment(comment) {
      var _this4 = this;

      if (comment.liked_by_user) {
        return;
      }

      axios.post('/like-hub-post-comment', {
        "comment_id": comment.id
      }).then(function (response) {
        if (response.status == 200) {
          _this4.comments.map(function (eachcomment) {
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
    scrollToBottom: function scrollToBottom() {
      this.$refs.commentScrollerPost.scrollToBottom();
    },
    shortenContent: function shortenContent(content, limit) {
      if (content.length > limit) {
        var shortcontent = content.slice(0, limit);
        return shortcontent + '...';
      } else {
        return content;
      }
    },
    postComment: function postComment() {
      var _this5 = this;

      if (this.commentValue != '') {
        this.sendingComment = true;
        var hub_post_comment_id = '';

        if (this.is_reply) {
          hub_post_comment_id = this.repliedComment.id;
        }

        var formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id);
        formData.append('comment', this.commentValue);
        formData.append('is_reply', this.is_reply);
        formData.append('hub_post_comment_id', hub_post_comment_id);
        axios.post('/comment-hub-post', formData).then(function (response) {
          if (response.status == 201) {
            var Newcomment = response.data.data;
            Newcomment.tagged = false;

            _this5.comments.push(Newcomment);

            _this5.closeComment();

            setTimeout(function () {
              _this5.scrollToBottom();
            }, 500);
            _this5.sendingComment = false;
            _this5.commentValue = '';

            _this5.$root.posts.map(function (post) {
              if (post.id == _this5.$root.selectedPost.id) {
                post.comments += 1;
              }
            });
          }
        })["catch"](function (error) {
          _this5.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      } else {
        this.showAlert('Oops!', 'Comment Cannot be empty', 'error');
      }
    },
    likePost: function likePost() {
      var _this6 = this;

      if (this.$root.selectedPost.isLiked) return;
      var formData = new FormData();
      formData.append('post_id', this.$root.selectedPost.id);
      axios.post('/like-hub-post', formData).then(function (response) {
        if (response.status == 204) {
          if (response.data == "liked") {
            _this6.$root.selectedPost.isLiked = 1;
          }
        } else {
          if (response.data == "Post Liked Already") {
            _this6.showAlert('Oops!', response.data, 'error');
          } else if (response.data == "liked") {
            _this6.$root.selectedPost.isLiked = 1;
          }
        }

        _this6.$root.selectedPost.likes += 1;

        _this6.$root.posts.map(function (post) {
          if (post.id == _this6.$root.selectedPost.id) {
            post.likes += 1;
          }
        });
      });
    },
    pinPost: function pinPost() {
      var _this7 = this;

      if (this.$root.selectedPost.isPinned) return;
      var formData = new FormData();
      formData.append('post_id', this.$root.selectedPost.id);
      axios.post('/pin-hub-post', formData).then(function (response) {
        if (response.status == 201) {
          if (response.data == "pinned") {
            _this7.$root.selectedPost.isPinned = 1;
          }
        } else {
          if (response.data == "Post Pinned Already") {
            _this7.showAlert('Oops!', response.data, 'error');
          } else if (response.data == "pinned") {
            _this7.$root.selectedPost.isPinned = 1;
          }
        }

        _this7.$root.selectedPost.pinned += 1;
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
      var _this8 = this;

      axios.get('/run-panel/' + panelId).then(function (response) {
        if (response.status == 200) {
          _this8.loadingCode = false;
          _this8.pageContent = response.data;
        }
      })["catch"](function (error) {
        _this8.showAlert('Oops!', 'Unable to load page content', 'error');
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
    var _this9 = this;

    axios.post('/run-code-on-sandbox-project', {
      panel_id: this.selecetedPanelId
    }).then(function (response) {
      if (response.status == 200) {
        var token = response.data[0][0].token;

        if (response.data[0][0].status.description == 'Accepted') {
          _this9.pageContent = response.data[0][0].stdout;
        } else if (response.data[0][0].status.description == 'In Queue') {
          _this9.pageContent = 'In Queue...';

          _this9.checkResponse(token, response.data[1]);
        } else if (response.data[0][0].status.description == 'Processing') {
          _this9.pageContent = 'Processing...';

          _this9.checkResponse(token, response.data[1]);
        } else {
          _this9.pageContent = response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr;
        }
      }
    })["catch"](function (error) {
      _this9.pageContent = 'An issue occured,unable to run on sandbox...';
    });
  }), _defineProperty(_methods, "fetchPost", function fetchPost() {
    var _this10 = this;

    var currentPostid = '';

    if (this.$route.params.post_id) {
      currentPostid = this.$route.params.post_id;
    } else {
      currentPostid = this.$root.currentPost;
    }

    this.loadingPost = true;
    var storedPostData = this.$root.getLocalStore('post_data_' + currentPostid + this.$root.username);
    storedPostData.then(function (result) {
      if (result != null) {
        var finalResult = JSON.parse(result);
        _this10.$root.selectedPost = finalResult;

        if (!_this10.$root.selectedPost.link) {
          _this10.showPage();
        }

        _this10.fetchComments(_this10.$root.selectedPost.id);

        _this10.loadingPost = false;

        _this10.updatePost();
      } else {
        axios.get('/fetch-post/' + currentPostid).then(function (response) {
          if (response.status == 200) {
            _this10.$root.LocalStore('post_data_' + currentPostid + _this10.$root.username, response.data.data);

            _this10.$root.selectedPost = response.data.data;

            if (!_this10.$root.selectedPost.link) {
              _this10.showPage();
            }

            _this10.fetchComments(_this10.$root.selectedPost.id);

            _this10.loadingPost = false;
          }
        })["catch"](function (error) {
          _this10.loadingPost = false;
        });
      }
    });
  }), _defineProperty(_methods, "updatePost", function updatePost() {
    var _this11 = this;

    axios.get('/fetch-post/' + this.$route.params.post_id).then(function (response) {
      if (response.status == 200) {
        _this11.$root.LocalStore('post_data_' + _this11.$route.params.post_id + _this11.$root.username, response.data.data);

        _this11.$root.selectedPost = response.data.data;
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
exports.push([module.i, "\ntextarea[data-v-529f7189] {\r\n    font-size:13px; \r\n    background:white;\r\n    width:100%; \r\n    height: 45px;\r\n    max-height: 75px;\r\n    padding: 6px 6px;\r\n    resize:none; \r\n    overflow-x: hidden;\r\n     overflow-y: auto;\r\n  \r\n    border-radius:2px;\n}\n.msgTextReplynew[data-v-529f7189]{\r\n  font-size: 13px;\r\n  color: #4d4d4d;\n}\n.scroller[data-v-529f7189]::-webkit-scrollbar-thumb {\r\n  background-color: #3C87CD;\r\n  outline: 1px solid #3C87CD;\n}\n.scroller[data-v-529f7189]::-webkit-scrollbar {\r\n  width: 5px;\n}\r\n", ""]);

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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row px-0" },
    [
      _c(
        "v-card",
        {
          staticClass:
            "col-lg-6 offset-lg-3 py-1 py-md-2 fixed-top d-flex flex-row px-md-2 px-1",
          staticStyle: {
            position: "sticky",
            background: "white",
            "z-index": "99999999",
            top: "0%"
          },
          attrs: { tile: "" }
        },
        [
          _c(
            "div",
            { staticClass: "col-10 py-0 px-0 d-flex flew-row" },
            [
              this.$root.selectedPost.user
                ? [
                    _c("div", {
                      staticClass: "mr-2",
                      style: _vm.imageStyleUser(
                        35,
                        this.$root.selectedPost.user
                      ),
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goToProfile(
                            _vm.that.$root.selectedPost.user.username
                          )
                        }
                      }
                    })
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex ",
                  staticStyle: { "align-items": "center" }
                },
                [
                  this.$root.selectedPost.user
                    ? [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "font-family": "MediumFont",
                              cursor: "pointer"
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.goToProfile(
                                  _vm.that.$root.selectedPost.user.username
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(this.$root.selectedPost.user.username) +
                                "   "
                            ),
                            _c("img", {
                              staticClass: "mx-1",
                              attrs: {
                                src: _vm.getUserLevel(
                                  _vm.that.$root.selectedPost.user.points
                                ),
                                height: "22px"
                              }
                            })
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-2 py-0 px-0 text-right" },
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
                [_c("v-icon", [_vm._v("mdi mdi-close")])],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "px-2 col-12 py-0" }, [
        _c(
          "div",
          {
            staticClass: "col-lg-6 offset-lg-3 py-2 px-0 pt-1 mt-2",
            staticStyle: { height: "350px" }
          },
          [
            _vm.loadingPost
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 d-flex ",
                      staticStyle: {
                        position: "absolute",
                        height: "100%",
                        "align-items": "center",
                        "justify-content": "center",
                        background: "white",
                        border: "1px solid #c5c5c5",
                        "border-radius": "7px"
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
                ]
              : _vm._e(),
            _vm._v(" "),
            this.$root.selectedPost.link
              ? [
                  _c("iframe", {
                    staticClass: "col-12 px-0 py-0",
                    staticStyle: {
                      position: "absolute",
                      height: "100%",
                      background: "white",
                      border: "1px solid #c5c5c5",
                      "border-radius": "7px"
                    },
                    attrs: {
                      sandbox:
                        "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                      src: this.$root.selectedPost.project_url
                    }
                  })
                ]
              : [
                  _vm.pageContent == "" && _vm.loadingCode
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "col-12 d-flex ",
                            staticStyle: {
                              position: "absolute",
                              height: "100%",
                              "align-items": "center",
                              "justify-content": "center",
                              background: "white",
                              border: "1px solid #c5c5c5",
                              "border-radius": "7px"
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
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.pageContent != "" &&
                  this.$root.selectedPost.project.is_web
                    ? [
                        _c("iframe", {
                          staticClass: "col-12  px-0 py-0",
                          staticStyle: {
                            position: "absolute",
                            height: "100%",
                            background: "white",
                            border: "1px solid #c5c5c5",
                            "border-radius": "7px"
                          },
                          attrs: {
                            sandbox:
                              "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                            srcdoc: _vm.pageContent
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.pageContent != "" &&
                  !this.$root.selectedPost.project.is_web
                    ? [
                        _c("textarea", {
                          staticClass: "col-12",
                          staticStyle: {
                            "font-size": "14px",
                            position: "absolute",
                            height: "100%",
                            background: "white",
                            border: "1px solid #c5c5c5",
                            "border-radius": "7px"
                          },
                          attrs: { readonly: "" },
                          domProps: { value: _vm.pageContent }
                        })
                      ]
                    : _vm._e()
                ],
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticClass: "d-inline-block  ",
                staticStyle: {
                  "border-radius": "0px",
                  "border-top-right-radius": "7px",
                  position: "absolute",
                  background: "rgba(27, 27, 30, 0.4)",
                  right: "0%",
                  "z-index": "879"
                },
                attrs: { icon: "", color: "#ffffff" },
                on: {
                  click: function($event) {
                    _vm.showFullLoader = true
                  }
                }
              },
              [_c("v-icon", [_vm._v("las la-expand")])],
              1
            )
          ],
          2
        ),
        _vm._v(" "),
        this.$root.selectedPost.project
          ? _c("div", { staticClass: "col-lg-6 offset-lg-3 px-2 mt-2 " }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 px-0 py-0 text-right" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticStyle: {
                          "text-transform": "none",
                          "font-size": "12px",
                          "font-family": "MediumFont"
                        },
                        attrs: {
                          color: "#3C87CD",
                          outlined: "",
                          rounded: "",
                          small: ""
                        },
                        on: {
                          click: function($event) {
                            return _vm.goToProject(
                              _vm.that.$root.selectedPost.project
                            )
                          }
                        }
                      },
                      [
                        _vm._v("View source "),
                        _c("v-icon", { staticClass: "ml-1" }, [
                          _vm._v("mdi-launch mdi-18px")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-lg-6 offset-lg-3 px-0 px-md-3 commentScroller scroller",
          staticStyle: {
            "border-top": "1px solid #c5c5c5",
            background: "#ffffff",
            "font-family": "BodyFont",
            height: "300px"
          }
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [
              _vm.loadingPostComments
                ? [
                    _c(
                      "div",
                      {
                        staticClass: "d-flex col-12",
                        staticStyle: {
                          position: "absolute",
                          "overflow-y": "hidden",
                          height: "90%",
                          left: "0%",
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
                            size: "25"
                          }
                        })
                      ],
                      1
                    )
                  ]
                : [
                    _vm.comments.length == 0
                      ? [_vm._m(0)]
                      : [
                          _c("DynamicScroller", {
                            ref: "commentScrollerPost",
                            staticClass: "col-12 px-1  scroller",
                            staticStyle: {
                              position: "absolute",
                              "overflow-y": "auto",
                              top: "0%",
                              height: "100%",
                              left: "0%",
                              background: "white"
                            },
                            attrs: {
                              items: _vm.comments,
                              keyField: "id",
                              "min-item-size": 36,
                              buffer: 5000,
                              id: "commentScrollerPost"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var item = ref.item
                                  var index = ref.index
                                  var active = ref.active
                                  return [
                                    _c(
                                      "DynamicScrollerItem",
                                      {
                                        attrs: {
                                          item: item,
                                          active: active,
                                          "size-dependencies": [item.content],
                                          "data-index": index
                                        }
                                      },
                                      [
                                        _c("comment-post", {
                                          attrs: {
                                            source: item,
                                            username: _vm.that.$root.username
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                }
                              },
                              {
                                key: "after",
                                fn: function() {
                                  return [
                                    _c("div", {
                                      staticClass: "my-4 py-3 col-12"
                                    })
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "before",
                                fn: function() {
                                  return [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-12 py-2 px-0 mt-2 d-flex flex-column"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "d-md-block d-none",
                                            staticStyle: {
                                              "font-size": "16px",
                                              "font-family": "MediumFont"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.that.$root.selectedPost
                                                  .title
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "d-md-none d-block",
                                            staticStyle: {
                                              "font-size": "14px",
                                              "font-family": "MediumFont"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.that.$root.selectedPost
                                                  .title
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticStyle: {
                                              "font-size": "13px",
                                              "font-family": "BodyFont"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.that.$root.selectedPost
                                                  .description
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-lg-12 py-1 px-0 mt-2 d-flex flex-row",
                                        staticStyle: {
                                          "align-items": "center",
                                          "border-top": "1px solid #c5c5c5",
                                          "border-bottom": "1px solid #c5c5c5"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "d-flex flex-row" },
                                          [
                                            _c("div", [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    color: "black",
                                                    "font-family": "MediumFont"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.that.$root
                                                        .selectedPost.likes
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "mx-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-family": "BodyFont"
                                                  }
                                                },
                                                [_vm._v("Likes")]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "ml-1" }, [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    color: "black",
                                                    "font-family": "MediumFont"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.that.$root
                                                        .selectedPost.comments
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "mx-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-family": "BodyFont"
                                                  }
                                                },
                                                [_vm._v("Comments")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex flex-row ml-auto"
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { icon: "" },
                                                on: { click: _vm.pinPost }
                                              },
                                              [
                                                _vm.that.$root.selectedPost
                                                  .isPinned == 1
                                                  ? _c(
                                                      "v-icon",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "25px",
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "lar la-thumbtack"
                                                        )
                                                      ]
                                                    )
                                                  : _c(
                                                      "v-icon",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "las la-thumbtack"
                                                        )
                                                      ]
                                                    )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { icon: "" },
                                                on: { click: _vm.likePost }
                                              },
                                              [
                                                _c("i", {
                                                  class:
                                                    _vm.that.$root.selectedPost
                                                      .isLiked == 1
                                                      ? "las la-heart"
                                                      : "lar la-heart",
                                                  style: _vm.that.$root
                                                    .selectedPost.isLiked
                                                    ? "font-size:25px; color: #ff6666;"
                                                    : "font-size: 25px;"
                                                })
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          })
                        ]
                  ]
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _vm.showFullLoader
        ? _c(
            "div",
            {
              staticStyle: {
                position: "fixed",
                "z-index": "999999999999999",
                height: "100%",
                width: "100%",
                top: "0",
                left: "0",
                background: "white"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex flex-column",
                  staticStyle: {
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 px-0 py-0",
                      staticStyle: { height: "100%" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-12 px-1 py-1 pt-0  d-flex flex-row",
                          staticStyle: {
                            background: "white",
                            "border-bottom": "2px solid #c5c5c5",
                            "align-items": "center"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: " mr-1 col-2 py-0 px-0" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.showFullLoader = false
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi mdi-close")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-8 py-0 text-center" }, [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "14px",
                                  "font-family": "MediumFont"
                                }
                              },
                              [_vm._v(_vm._s(this.$root.selectedPost.title))]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.that.$root.selectedPost.project
                            ? _c(
                                "div",
                                { staticClass: "col-2 px-1 text-right py-0" },
                                [
                                  _vm.that.$root.selectedPost.project.is_web
                                    ? [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { icon: "" },
                                            on: { click: _vm.showFullPage }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                staticStyle: {
                                                  "font-size": "20px"
                                                }
                                              },
                                              [_vm._v("mdi mdi-launch")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            : _c(
                                "div",
                                { staticClass: "col-2 px-1 text-right py-0" },
                                [
                                  _vm.that.$root.selectedPost.link
                                    ? [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { icon: "" },
                                            on: { click: _vm.showFullPage }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                staticStyle: {
                                                  "font-size": "20px"
                                                }
                                              },
                                              [_vm._v("mdi mdi-launch")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                        ]
                      ),
                      _vm._v(" "),
                      this.$root.selectedPost.link
                        ? [
                            _c("iframe", {
                              staticClass: "col-12 px-0 py-0",
                              staticStyle: {
                                height: "100%",
                                background: "white",
                                border: "1px solid #c5c5c5"
                              },
                              attrs: {
                                sandbox:
                                  "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                                src: this.$root.selectedPost.project_url
                              }
                            })
                          ]
                        : [
                            _vm.pageContent == "" && _vm.loadingCode
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-12 d-flex ",
                                      staticStyle: {
                                        height: "100%",
                                        "align-items": "center",
                                        "justify-content": "center",
                                        background: "white",
                                        border: "1px solid #c5c5c5",
                                        "border-radius": "7px"
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
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.pageContent != "" &&
                            this.$root.selectedPost.project.is_web
                              ? [
                                  _c("iframe", {
                                    staticClass: "col-12  px-0 py-0",
                                    staticStyle: {
                                      height: "100%",
                                      background: "white",
                                      border: "1px solid #c5c5c5"
                                    },
                                    attrs: {
                                      sandbox:
                                        "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                                      srcdoc: _vm.pageContent
                                    }
                                  })
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.pageContent != "" &&
                            !this.$root.selectedPost.project.is_web
                              ? [
                                  _c("textarea", {
                                    staticClass: "col-12",
                                    staticStyle: {
                                      "font-size": "14px",
                                      height: "100%",
                                      background: "white",
                                      border: "1px solid #c5c5c5"
                                    },
                                    attrs: { readonly: "" },
                                    domProps: { value: _vm.pageContent }
                                  })
                                ]
                              : _vm._e()
                          ]
                    ],
                    2
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-flex col-12",
        staticStyle: {
          position: "absolute",
          "overflow-y": "hidden",
          height: "90%",
          left: "0%",
          "align-items": "center",
          "justify-content": "center"
        }
      },
      [
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
          [_vm._v("No comment yet, be the first to make a comment")]
        )
      ]
    )
  }
]
render._withStripped = true



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