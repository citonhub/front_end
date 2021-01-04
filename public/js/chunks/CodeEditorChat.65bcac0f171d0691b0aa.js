(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CodeEditorChat"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeEditorChat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-codemirror */ "./node_modules/vue-codemirror/dist/vue-codemirror.js");
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstraps_codeImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bootstraps/codeImports */ "./resources/js/bootstraps/codeImports.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.detectchange(this.language);
    this.setCodeContent();
    this.$root.codeboxComponent = this;
  },
  components: {
    codemirror: vue_codemirror__WEBPACK_IMPORTED_MODULE_0__["codemirror"]
  },
  computed: {
    codemirror: function codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  data: function data() {
    return {
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        filepath: '',
        NewMsg: '',
        styleActiveLine: true,
        lineNumbers: true,
        scrollbarStyle: "overlay",
        line: true,
        autocorrect: true,
        keyMap: "sublime",
        readOnly: '',
        mode: 'text/html',
        theme: 'base16-dark',
        extraKeys: {
          "F11": function F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          "Esc": function Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      },
      that: this,
      selectedLangId: 0,
      items: [{
        "id": 0,
        "name": 'HTML'
      }, {
        "id": null,
        "name": 'CSS'
      }, {
        "id": 26,
        "name": 'JAVASCRIPT(Node)'
      }, {
        "id": 35,
        "name": 'PHP'
      }, {
        "id": 39,
        "name": 'PYTHON(3.8.1)'
      }, {
        "id": 100,
        "name": 'PYTHON For ML(3.7.7)'
      }, {
        "id": 38,
        "name": 'PYTHON(2.7.17)'
      }, {
        "id": 44,
        "name": 'SQL'
      }, {
        "id": 4,
        "name": 'C'
      }, {
        "id": 11,
        "name": 'C++'
      }, {
        "id": 25,
        "name": 'JAVA'
      }, {
        "id": 13,
        "name": 'C#'
      }, {
        "id": 18,
        "name": 'ERLANG'
      }, {
        "id": 14,
        "name": 'COBOL'
      }, {
        "id": 27,
        "name": 'KOTLIN'
      }, {
        "id": 21,
        "name": 'FOTRAN'
      }, {
        "id": 34,
        "name": 'PERL'
      }, {
        "id": 40,
        "name": 'R'
      }, {
        "id": 41,
        "name": 'RUBY'
      }, {
        "id": 22,
        "name": 'GO'
      }, {
        "id": 24,
        "name": 'HASKELL'
      }, {
        "id": 28,
        "name": 'LUA'
      }, {
        "id": 33,
        "name": 'PASCAL'
      }, {
        "id": 42,
        "name": 'RUST'
      }, {
        "id": 43,
        "name": 'SCALA'
      }, {
        "id": 45,
        "name": 'SWIFT'
      }, {
        "id": 46,
        "name": 'TYPESCRIPT'
      }],
      language: this.$root.fullCodeLanguage,
      code: this.$root.FullcodeContent,
      showCode: true,
      ResultCode: '',
      showAdminOptions: false,
      adminMembers: [],
      recheckCodeBox: true
    };
  },
  methods: {
    muteAudio: function muteAudio() {
      this.$root.localAudioMuted = true;
      var localStream = this.$root.audioconnection.attachStreams[0];
      localStream.mute('audio');
    },
    unmuteAudio: function unmuteAudio() {
      this.$root.localAudioMuted = false;
      var localStream = this.$root.audioconnection.attachStreams[0];
      localStream.unmute('audio');
    },
    onCmCursorActivity: function onCmCursorActivity(codemirror) {
      console.debug('onCmCursorActivity', codemirror);
    },
    makeUserMaster: function makeUserMaster(member) {
      var _this2 = this;

      if (!this.checkIfisOwner()) {
        return;
      }

      axios.post('/make-user-master', {
        memberId: member.memberId,
        space_id: this.$root.selectedSpace.space_id
      }).then(function (response) {
        if (response.status == 200) {
          _this2.adminMembers.forEach(function (member) {
            member.master_user = false;
          });

          _this2.adminMembers.map(function (member) {
            if (member.memberId == response.data) {
              member.master_user = true;
            }
          });

          _this2.$root.selectedSpaceMembers.forEach(function (member) {
            member.master_user = false;
          });

          _this2.$root.selectedSpaceMembers.map(function (member) {
            if (member.memberId == response.data) {
              member.master_user = true;
            }
          });

          _this2.setCodeContent();

          _this2.liveChanges(response.data, 'new_master');
        }
      })["catch"](function (error) {});
    },
    setNewUser: function setNewUser(memberId) {
      this.adminMembers.forEach(function (member) {
        member.master_user = false;
      });
      this.adminMembers.map(function (member) {
        if (member.memberId == memberId) {
          member.master_user = true;
        }
      });
      this.$root.selectedSpaceMembers.forEach(function (member) {
        member.master_user = false;
      });
      this.$root.selectedSpaceMembers.map(function (member) {
        if (member.memberId == memberId) {
          member.master_user = true;
        }
      });
      this.setCodeContent();
      this.$root.newMasterId = null;
    },
    updateCodeMaster: function updateCodeMaster() {
      var _this3 = this;

      var interval = null;
      interval = setInterval(function () {
        if (_this3.$root.codeIsLive == false) {
          clearInterval(interval);
        }

        if (_this3.$root.newMasterId != null) {
          _this3.setNewUser(_this3.$root.newMasterId);
        }
      }, 1000);
    },
    showActiveUsers: function showActiveUsers() {
      this.$root.showMemberBoard = true;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/live_session'
      });
    },
    checkIfMaster: function checkIfMaster() {
      var _this4 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this4.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].master_user;
      } else {
        return false;
      }
    },
    checkIfUser: function checkIfUser(userId) {
      if (userId == this.$root.user_temp_id) {
        return true;
      } else {
        return false;
      }
    },
    setCodeContent: function setCodeContent() {
      var userState = this.checkIfMaster();

      if (this.$root.codeIsLive && !userState && this.$root.fromLiveSession) {
        this.cmOption.readOnly = 'nocursor';
        this.$root.selfStopTrigger = false;
        this.code = this.$root.FullcodeContent;
        this.language = this.$root.fullCodeLanguage;
        this.detectchange(this.$root.fullCodeLanguage);

        if (this.$root.liveShowCode) {
          this.showCode = true;
        } else {
          this.showCode = false;
          this.ResultCode = this.$root.CodeResult;
        }
      } else {
        // this.$root.selfStopTrigger = true;
        this.cmOption.readOnly = undefined;
      }
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this5 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this5.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    },
    returnToCode: function returnToCode() {
      this.showCode = true;
      var userState = this.checkIfisOwner();

      if (this.$root.codeIsLive && userState) {
        this.liveChanges(true, 'returnToCode');
      }
    },
    copyText: function copyText() {
      var spacelink = document.querySelector('#codeBoxContent');
      spacelink.setAttribute('type', 'text');
      spacelink.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

        if (msg == 'successful') {
          this.$root.chatComponent.showAlert('', 'Link copied', 'success');
        } else {
          this.$root.chatComponent.showAlert('', 'Unable link copied', 'error');
        }
      } catch (err) {}
      /* unselect the range */


      spacelink.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    },
    showAlert: function showAlert(duration, text) {
      this.$root.AlertRoot = true;
      this.$root.AlertMsgRoot = text;

      var _this = this;

      setTimeout(function () {
        _this.$root.AlertRoot = false;
      }, duration);
    },
    goBack: function goBack() {
      this.$root.fromLiveSession = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatInnerConent = '';
    },
    makeUUID: function makeUUID() {
      var id = "id" + Math.random().toString(16).slice(2);
      return id;
    },
    makeMessage: function makeMessage(msgType, data) {
      var NewMessage = {
        content: null,
        created_at: moment().subtract(1, 'hours'),
        is_reply: "false",
        message_id: this.makeUUID(),
        id: this.makeUUID(),
        replied_message: [],
        index_count: this.$root.returnLastIndex() + 1,
        replied_message_id: null,
        showReply: false,
        showDate: null,
        loading: true,
        progressValue: 0,
        space_id: this.$root.selectedSpace.space_id,
        tagged: false,
        type: msgType,
        user_id: this.$root.user_temp_id,
        username: this.$root.username,
        video: {},
        audio: {},
        code: {},
        image: {},
        file: {}
      };

      if (msgType == 'image') {
        NewMessage.image = data;
      }

      if (msgType == 'video') {
        NewMessage.video = data;
      }

      if (msgType == 'audio') {
        NewMessage.audio = data;
      }

      if (msgType == 'code') {
        NewMessage.code = data;
      }

      if (msgType == 'file') {
        NewMessage.file = data;
      }

      return NewMessage;
    },
    sendMessage: function sendMessage() {
      var Data = [];
      this.$root.NewMsg = this.makeMessage('code', Data);
      this.$root.Messages.push(this.$root.NewMsg);
      this.$root.spaceFullData.messages = this.$root.Messages;
      this.$root.LocalStore('full_' + this.$root.selectedSpace.space_id + this.$root.username, this.$root.spaceFullData);
      this.$root.scrollToBottom();
      var postData = {
        content: '',
        space_id: this.$root.selectedSpace.space_id,
        is_reply: this.$root.is_reply,
        current_user: JSON.stringify(this.$root.SpaceUsers),
        replied_message_id: this.$root.replyMessage.message_id,
        attachment_type: 'code',
        code: this.code,
        language_type: this.language,
        file_name: 'index',
        temp_id: this.$root.NewMsg.message_id,
        device_id: this.$root.userDeviceId
      };
      this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id, this.$root.NewMsg);
      this.$root.sendCodeMessage(postData);
      this.goBack();
    },
    onCmReady: function onCmReady(codemirror) {
      console.debug('onCmReady', codemirror);
    },
    onCmFocus: function onCmFocus(codemirror) {
      console.debug('onCmFocus', codemirror);
    },
    onCmBlur: function onCmBlur(codemirror) {
      console.debug('onCmBlur', codemirror);
    },
    onCmCodeChange: function onCmCodeChange(codemirror) {
      this.liveChanges(codemirror, 'typing');
    },
    liveChanges: function liveChanges(data, action) {
      if (this.$root.codeIsLive) {
        this.$root.dataconnection.send({
          action: action,
          data: data,
          space_id: this.$root.selectedSpace.space_id
        });
      }
    },
    runCode: function runCode() {
      this.showCode = false;
      this.$root.liveShowCode = false;

      if (this.selectedLangId == 0 || this.language == 'HTML') {
        this.ResultCode = this.code;
        this.sendCodeRunning();
      } else {
        this.ResultCode = 'sending to sandbox...';
        this.runCodeOnSandbox();
        this.sendCodeRunning();
      }
    },
    sendCodeRunning: function sendCodeRunning() {
      var userState = this.checkIfisOwner();

      if (this.$root.codeIsLive && userState) {
        this.liveChanges(this.ResultCode, 'codeRun');
      }
    },
    checkResponse: function checkResponse(token) {
      var _this = this;

      axios.post('/check-for-submission', {
        token: token,
        langId: _this.selectedLangId
      }).then(function (response) {
        if (response.status == 200) {
          if (response.data[0].status.description == 'Accepted') {
            _this.ResultCode = response.data[0].stdout;
          } else if (response.data[0].status.description == 'In Queue') {
            _this.ResultCode = 'In Queue...';

            _this.checkResponse(response.data[0].token);
          } else if (response.data[0].status.description == 'Processing') {
            _this.ResultCode = 'Processing...';

            _this.checkResponse(response.data[0].token);
          } else {
            _this.ResultCode = response.data[0].stdout + '\n Error: \n' + response.data[0].stderr;
          }

          if (_this.$root.codeBoxOpened == false) {}

          _this.sendCodeRunning();
        }
      })["catch"](function (error) {
        _this.ResultCode = 'An issue occured,unable to run on sandbox...';

        _this.sendCodeRunning();
      });
    },
    runCodeOnSandbox: function runCodeOnSandbox() {
      var _this6 = this;

      axios.post('/run-code-on-sandbox', {
        langId: this.selectedLangId,
        code: this.code,
        messageId: 77
      }).then(function (response) {
        if (response.status == 200) {
          var token = response.data[0].token;

          if (response.data[0].status.description == 'Accepted') {
            _this6.ResultCode = response.data[0].stdout;
          } else if (response.data[0].status.description == 'In Queue') {
            _this6.ResultCode = 'In Queue...';

            _this6.checkResponse(token);
          } else if (response.data[0].status.description == 'Processing') {
            _this6.ResultCode = 'Processing...';

            _this6.checkResponse(token);
          } else {
            _this6.ResultCode = response.data[0].stdout + '\n Error: \n' + response.data[0].stderr;
          }

          _this6.sendCodeRunning();
        }
      })["catch"](function (error) {
        _this6.ResultCode = 'An issue occured,unable to run on sandbox...';

        _this6.sendCodeRunning();
      });
    },
    detectchange: function detectchange(languageFull) {
      var language = '';

      if (_typeof(languageFull) == 'object') {
        language = languageFull.name;
        this.selectedLangId = languageFull.id;
      } else {
        language = languageFull;
        var languageArray = this.items.filter(function (item) {
          return item.name == languageFull;
        });

        if (languageArray[0].length != 0) {
          this.selectedLangId = languageArray[0].id;
        }
      }

      var userState = this.checkIfisOwner();

      if (this.$root.codeIsLive && userState) {
        this.liveChanges(language, 'codeChange');
      }

      this.$root.fullCodeLanguage = language;

      if (language == 'HTML') {
        this.cmOption.mode = 'text/html';
      }

      if (language == 'CSS') {
        this.cmOption.mode = 'text/css';
      }

      if (language == 'PYTHON(3.8.1)') {
        this.cmOption.mode = 'text/x-python';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "print(\"hello, world\")";
        }
      }

      if (language == 'PYTHON For ML(3.7.7)') {
        this.cmOption.mode = 'text/x-python';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "import mlxtend\n" + "import numpy\n" + "import pandas\n" + "import scipy\n" + "import sklearn\n" + "\n" + "print(\"hello, world\")";
        }
      }

      if (language == 'PYTHON(2.7.17)') {
        this.cmOption.mode = 'text/x-python';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "print(\"hello, world\")";
        }
      }

      if (language == 'PHP') {
        this.cmOption.mode = 'text/x-php';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "<?php \n " + "print(\"hello, world\n\"); \n " + "?>";
        }
      }

      if (language == 'JAVASCRIPT(Node)') {
        this.cmOption.mode = 'text/javascript';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "console.log(\"hello, world\");";
        }
      }

      if (language == 'SQL') {
        this.cmOption.mode = 'text/x-sql';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = " SELECT \n " + "  Name, COUNT(*) AS num_albums \n " + "FROM artists JOIN albums \n " + "ON albums.ArtistID = artists.ArtistID \n " + "GROUP BY Name \n " + "ORDER BY num_albums DESC \n " + "LIMIT 4; ";
        }
      }

      if (language == 'C') {
        this.cmOption.mode = 'text/x-csrc';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "#include <stdio.h> \n " + "                                        \n " + "int main(void) { \n " + "    printf(\"hello, world\n\"); \n " + "    return 0; \n " + "}";
        }
      }

      if (language == 'C++') {
        this.cmOption.mode = 'text/x-c++src';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "#include <iostream>  \n " + "                                           \n " + "int main() {    \n " + "    std::cout << \"hello, world\" << std::endl;  \n " + "    return 0;  \n " + "}";
        }
      }

      if (language == 'JAVA') {
        this.cmOption.mode = 'text/x-java';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "public class Main { \n " + "   public static void main(String[] args) { \n " + "      System.out.println(\"hello, world\"); \n " + "   } \n " + "}";
        }
      }

      if (language == 'C#') {
        this.cmOption.mode = 'text/x-csharp';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "public class Hello { \n " + "    public static void Main() { \n " + "       System.Console.WriteLine(\"hello, world\"); \n " + "   } \n " + "}";
        }
      }

      if (language == 'ERLANG') {
        this.cmOption.mode = 'text/x-erlang';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "main(_) -> \n " + "   io:fwrite(\"hello, world\n\").";
        }
      }

      if (language == 'KOTLIN') {
        this.cmOption.mode = 'x-shader/x-fragment';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "fun main() { \n " + "   println(\"hello, world\") \n " + "}";
        }
      }

      if (language == 'FOTRAN') {
        this.cmOption.mode = 'text/x-fortran';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "program main \n " + "   print *, \"hello, world\" \n " + "end";
        }
      }

      if (language == 'PERL') {
        this.cmOption.mode = 'text/x-perl';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "my $name = <STDIN>; \n " + "print \"hello, $name\"";
        }
      }

      if (language == 'R') {
        this.cmOption.mode = 'text/x-rsrc';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "cat(\"hello, world\n\")";
        }
      }

      if (language == 'GO') {
        this.cmOption.mode = 'text/x-go';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "package main \n " + "                           \n " + "import \"fmt\" \n " + "                        \n " + "func main() { \n " + "   fmt.Println(\"hello, world\") \n " + "}";
        }
      }

      if (language == 'HASKELL') {
        this.cmOption.mode = 'text/x-haskell';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "main = putStrLn \"hello, world\"";
        }
      }

      if (language == 'RUBY') {
        this.cmOption.mode = 'text/x-ruby';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "puts \"hello, world\"";
        }
      }

      if (language == 'LUA') {
        this.cmOption.mode = 'text/x-lua';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "print(\"hello, world\")";
        }
      }

      if (language == 'PASCAL') {
        this.cmOption.mode = 'text/x-pascal';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "program Hello; \n " + "begin  \n " + "   writeln ('hello, world') \n " + "end. \n ";
        }
      }

      if (language == 'RUST') {
        this.cmOption.mode = 'text/x-rustsrc';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "fn main() { \n " + "    println!(\"hello, world\"); \n " + "}";
        }
      }

      if (language == 'SCALA') {
        this.cmOption.mode = 'text/x-scala';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "object Main {  \n " + "   def main(args: Array[String]) = {  \n " + "      val name = scala.io.StdIn.readLine()  \n " + "     println(\"hello, \"+ name)  \n " + "   } \n " + "}";
        }
      }

      if (language == 'SWIFT') {
        this.cmOption.mode = 'text/x-swift';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "import Foundation \n " + "let name = readLine() \n " + "print(\"hello, \(name!)\")";
        }
      }

      if (language == 'TYPESCRIPT') {
        this.cmOption.mode = 'text/javascript';

        if (!this.$root.codeIsLive && !this.$root.codeFromChat) {
          this.code = "console.log(\"hello, world\");";
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileText[data-v-0340c691] {\n  font-size: 10px;\n}\n.codeboxnew1[data-v-0340c691],\n.pre[data-v-0340c691] {\n  width: 100%;\n  margin: 0;\n  display: block;\n  font-size: 14px;\n  line-height: 1.6;\n  word-break: break-all;\n  word-wrap: break-word;\n  overflow: auto;\n}\n.codeboxnew1[data-v-0340c691] {\n  height: 100%;\n  border: 1px solid #e6e6e6;\n  position: absolute;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true& ***!
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
  return _c("div", [
    _vm.showCode
      ? _c(
          "div",
          {
            staticStyle: {
              position: "absolute",
              height: "100%",
              width: "100%",
              "overflow-y": "hidden",
              left: "0",
              top: "0%"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-12 py-1 my-0 fixed-top px-0 px-md-2",
                staticStyle: { position: "sticky", background: "white" }
              },
              [
                _c(
                  "div",
                  { staticClass: "col-12 py-0 my-0 px-1 d-flex flew-row" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-1",
                        attrs: { icon: "" },
                        on: { click: _vm.goBack }
                      },
                      [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticStyle: { width: "100%" } }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.language,
                              expression: "language"
                            }
                          ],
                          staticClass: "browser-default custom-select",
                          staticStyle: { "font-size": "14px !important" },
                          attrs: { placeholder: "select language" },
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
                                _vm.language = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                return _vm.detectchange(_vm.language)
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.items, function(option, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: option.name } },
                            [_vm._v(_vm._s(option.name))]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-1 ml-2 mt-2",
                        attrs: { "x-small": "", color: "#3C87CD " },
                        on: { click: _vm.sendMessage }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              color: "#ffffff",
                              "font-weight": "bolder",
                              "font-size": "10px"
                            }
                          },
                          [_vm._v("send")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.that.$root.codeIsLive
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "mx-1",
                            attrs: { icon: "" },
                            on: { click: _vm.copyText }
                          },
                          [_c("v-icon", [_vm._v("mdi-content-copy mdi-18px")])],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.that.$root.codeIsLive
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "mx-1",
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.showActiveUsers()
                              }
                            }
                          },
                          [
                            _c(
                              "v-badge",
                              { attrs: { dot: "", color: "green" } },
                              [_c("v-icon", [_vm._v("las la-user-friends ")])],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 py-0 my-0",
                staticStyle: {
                  position: "absolute",
                  height: "95.5%",
                  width: "100%",
                  "overflow-y": "hidden",
                  "overflow-x": "hidden"
                }
              },
              [
                _c("div", { staticClass: "row my-0 py-0 px-0 " }, [
                  _c(
                    "div",
                    { staticClass: "codeboxnew1" },
                    [
                      _c("codemirror", {
                        staticStyle: { height: "100%" },
                        attrs: { options: _vm.cmOption },
                        on: {
                          cursorActivity: _vm.onCmCursorActivity,
                          ready: _vm.onCmReady,
                          focus: _vm.onCmFocus,
                          blur: _vm.onCmBlur,
                          input: _vm.onCmCodeChange
                        },
                        model: {
                          value: _vm.code,
                          callback: function($$v) {
                            _vm.code = $$v
                          },
                          expression: "code"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    attrs: { type: "hidden", id: "codeBoxContent" },
                    domProps: { value: _vm.code }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _vm.that.$root.codeIsLive
              ? _c(
                  "span",
                  {
                    staticStyle: {
                      position: "absolute",
                      top: "85%",
                      left: "5%",
                      "z-index": "1000"
                    }
                  },
                  [
                    !this.$root.localAudioMuted
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "d-inline-block sliderfullBtn",
                            attrs: { color: "#3C87CD", small: "", fab: "" },
                            on: { click: _vm.muteAudio }
                          },
                          [
                            _c("v-icon", { attrs: { color: "#ffffff" } }, [
                              _vm._v("mdi-microphone mdi-18px")
                            ])
                          ],
                          1
                        )
                      : _c(
                          "v-btn",
                          {
                            staticClass: "d-inline-block ",
                            attrs: { small: "", fab: "" },
                            on: { click: _vm.unmuteAudio }
                          },
                          [_c("v-icon", [_vm._v("mdi-microphone mdi-18px")])],
                          1
                        )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "d-inline-block d-md-none",
                staticStyle: {
                  position: "absolute",
                  top: "85%",
                  right: "5%",
                  "z-index": "1000"
                }
              },
              [
                this.selectedLangId != null
                  ? _c(
                      "v-btn",
                      {
                        attrs: { color: "#3C87CD", small: "", fab: "" },
                        on: { click: _vm.runCode }
                      },
                      [
                        _c("v-icon", { attrs: { color: "#ffffff" } }, [
                          _vm._v("mdi-play")
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "d-none d-md-inline-block",
                staticStyle: {
                  position: "absolute",
                  top: "86%",
                  right: "3%",
                  "z-index": "1000"
                }
              },
              [
                this.selectedLangId != null
                  ? _c(
                      "v-btn",
                      {
                        attrs: { color: "#3C87CD", fab: "" },
                        on: { click: _vm.runCode }
                      },
                      [
                        _c("v-icon", { attrs: { color: "#ffffff" } }, [
                          _vm._v("mdi-play")
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]
        )
      : _c(
          "div",
          {
            staticStyle: {
              position: "absolute",
              height: "100%",
              width: "100%",
              "overflow-y": "hidden",
              left: "0",
              top: "0%",
              background: "white"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-12 py-0 my-0 fixed-top",
                staticStyle: {
                  position: "sticky",
                  background: "white",
                  "border-bottom": "2px solid #3C87CD"
                }
              },
              [
                _c("div", { staticClass: "row py-1 my-0 px-1" }, [
                  _c(
                    "div",
                    { staticClass: "col-3 py-0 my-0 text-left px-1" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", color: "#3C87CD" },
                          on: { click: _vm.goBack }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-3 py-1 my-0 px-2 text-right" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { "x-small": "", color: "#3C87CD " },
                          on: { click: _vm.sendMessage }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                color: "#ffffff",
                                "font-weight": "bolder",
                                "font-size": "10px"
                              }
                            },
                            [_vm._v("send")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm.selectedLangId == 0
              ? _c("iframe", {
                  staticStyle: {
                    border: "0",
                    height: "91%",
                    position: "absolute",
                    width: "100%",
                    left: "0",
                    top: "6%"
                  },
                  attrs: {
                    sandbox:
                      "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                    srcdoc: _vm.ResultCode
                  }
                })
              : _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ResultCode,
                      expression: "ResultCode"
                    }
                  ],
                  staticClass: "px-2 py-2",
                  staticStyle: {
                    border: "0",
                    background: "whitesmoke",
                    height: "95%",
                    position: "absolute",
                    width: "100%",
                    left: "0",
                    top: "6%",
                    "font-size": "14px"
                  },
                  attrs: { readonly: "" },
                  domProps: { value: _vm.ResultCode },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.ResultCode = $event.target.value
                    }
                  }
                }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "d-inline-block d-md-none",
                staticStyle: {
                  position: "absolute",
                  top: "85%",
                  right: "5%",
                  "z-index": "1000"
                }
              },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "#3C87CD", small: "", fab: "" },
                    on: { click: _vm.returnToCode }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#ffffff" } }, [
                      _vm._v("mdi-xml")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "d-none d-md-inline-block",
                staticStyle: {
                  position: "absolute",
                  top: "86%",
                  right: "3%",
                  "z-index": "1000"
                }
              },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "#3C87CD", fab: "" },
                    on: { click: _vm.returnToCode }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#ffffff" } }, [
                      _vm._v("mdi-xml")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
    _vm._v(" "),
    _vm.showAdminOptions
      ? _c(
          "div",
          {
            staticClass:
              "col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ",
            staticStyle: {
              position: "fixed",
              height: "100%",
              background: "rgba(38, 82, 89,0.5)",
              "overflow-y": "hidden",
              "overflow-x": "hidden",
              left: "0%",
              top: "0%",
              "align-items": "center",
              "justify-content": "center",
              "z-index": "99999"
            },
            on: {
              click: function($event) {
                _vm.showAdminOptions = false
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "mx-auto pb-2",
                staticStyle: {
                  position: "absolute",
                  height: "auto",
                  width: "90%",
                  top: "30%",
                  left: "5%",
                  "overflow-y": "hidden",
                  "overflow-x": "hidden"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.showAdminOptions = true
                  }
                }
              },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "py-2 px-1",
                    staticStyle: { "border-radius": "10px" },
                    attrs: { height: "auto" }
                  },
                  [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h6", [_vm._v("Admin")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.adminMembers, function(admin, index) {
                      return _c(
                        "v-card",
                        {
                          key: index,
                          staticClass: "text-center py-2",
                          staticStyle: {
                            "border-bottom": "1px solid #c5c5c5",
                            "border-radius": "0px"
                          },
                          attrs: {
                            tile: "",
                            flat: "",
                            color: admin.master_user ? "#b7dbe1" : "#ffffff"
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.makeUserMaster(admin)
                            }
                          }
                        },
                        [
                          !_vm.checkIfUser(admin.user_id)
                            ? _c(
                                "span",
                                { staticStyle: { "font-size": "13px" } },
                                [_vm._v(_vm._s(admin.username))]
                              )
                            : _c(
                                "span",
                                { staticStyle: { "font-size": "13px" } },
                                [_vm._v("You")]
                              )
                        ]
                      )
                    })
                  ],
                  2
                )
              ],
              1
            )
          ]
        )
      : _vm._e()
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
        staticClass: "col-6 py-0 my-0 d-flex px-0",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "span",
          {
            staticStyle: {
              "font-size": "13px",
              color: "#3C87CD",
              "font-family": "MediumFont"
            }
          },
          [_vm._v("Page Loader")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/bootstraps/codeImports.js":
/*!************************************************!*\
  !*** ./resources/js/bootstraps/codeImports.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/theme/base16-dark.css */ "./node_modules/codemirror/theme/base16-dark.css");
/* harmony import */ var codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/php/php.js */ "./node_modules/codemirror/mode/php/php.js");
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/selection/active-line.js */ "./node_modules/codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/addon/selection/mark-selection.js */ "./node_modules/codemirror/addon/selection/mark-selection.js");
/* harmony import */ var codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/search/searchcursor.js */ "./node_modules/codemirror/addon/search/searchcursor.js");
/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/scroll/annotatescrollbar.js */ "./node_modules/codemirror/addon/scroll/annotatescrollbar.js");
/* harmony import */ var codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/addon/search/matchesonscrollbar.js */ "./node_modules/codemirror/addon/search/matchesonscrollbar.js");
/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/search/match-highlighter.js */ "./node_modules/codemirror/addon/search/match-highlighter.js");
/* harmony import */ var codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets.js */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/search/search.js */ "./node_modules/codemirror/addon/search/search.js");
/* harmony import */ var codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/keymap/sublime.js */ "./node_modules/codemirror/keymap/sublime.js");
/* harmony import */ var codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.css */ "./node_modules/codemirror/addon/fold/foldgutter.css");
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold.js */ "./node_modules/codemirror/addon/fold/brace-fold.js");
/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/addon/fold/foldcode.js */ "./node_modules/codemirror/addon/fold/foldcode.js");
/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.js */ "./node_modules/codemirror/addon/fold/foldgutter.js");
/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/addon/fold/indent-fold.js */ "./node_modules/codemirror/addon/fold/indent-fold.js");
/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/scroll/simplescrollbars.js */ "./node_modules/codemirror/addon/scroll/simplescrollbars.js");
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_simplescrollbars_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/scroll/simplescrollbars.css */ "./node_modules/codemirror/addon/scroll/simplescrollbars.css");
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/mode/python/python.js */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/mode/clike/clike.js */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var codemirror_mode_cobol_cobol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/mode/cobol/cobol.js */ "./node_modules/codemirror/mode/cobol/cobol.js");
/* harmony import */ var codemirror_mode_cobol_cobol_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_cobol_cobol_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! codemirror/mode/css/css.js */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var codemirror_mode_erlang_erlang_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! codemirror/mode/erlang/erlang.js */ "./node_modules/codemirror/mode/erlang/erlang.js");
/* harmony import */ var codemirror_mode_erlang_erlang_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_erlang_erlang_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var codemirror_mode_fortran_fortran_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! codemirror/mode/fortran/fortran.js */ "./node_modules/codemirror/mode/fortran/fortran.js");
/* harmony import */ var codemirror_mode_fortran_fortran_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_fortran_fortran_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var codemirror_mode_go_go_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! codemirror/mode/go/go.js */ "./node_modules/codemirror/mode/go/go.js");
/* harmony import */ var codemirror_mode_go_go_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_go_go_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! codemirror/mode/javascript/javascript.js */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var codemirror_mode_lua_lua_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! codemirror/mode/lua/lua.js */ "./node_modules/codemirror/mode/lua/lua.js");
/* harmony import */ var codemirror_mode_lua_lua_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_lua_lua_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var codemirror_mode_pascal_pascal_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! codemirror/mode/pascal/pascal.js */ "./node_modules/codemirror/mode/pascal/pascal.js");
/* harmony import */ var codemirror_mode_pascal_pascal_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_pascal_pascal_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! codemirror/mode/perl/perl.js */ "./node_modules/codemirror/mode/perl/perl.js");
/* harmony import */ var codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var codemirror_mode_r_r_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! codemirror/mode/r/r.js */ "./node_modules/codemirror/mode/r/r.js");
/* harmony import */ var codemirror_mode_r_r_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_r_r_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var codemirror_mode_ruby_ruby_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! codemirror/mode/ruby/ruby.js */ "./node_modules/codemirror/mode/ruby/ruby.js");
/* harmony import */ var codemirror_mode_ruby_ruby_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_ruby_ruby_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var codemirror_mode_rust_rust_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! codemirror/mode/rust/rust.js */ "./node_modules/codemirror/mode/rust/rust.js");
/* harmony import */ var codemirror_mode_rust_rust_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_rust_rust_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! codemirror/mode/sql/sql.js */ "./node_modules/codemirror/mode/sql/sql.js");
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var codemirror_mode_haskell_haskell_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! codemirror/mode/haskell/haskell.js */ "./node_modules/codemirror/mode/haskell/haskell.js");
/* harmony import */ var codemirror_mode_haskell_haskell_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_haskell_haskell_js__WEBPACK_IMPORTED_MODULE_34__);
// base style
 // theme css

 // language

 // active-line.js

 // styleSelectedText


 // highlightSelectionMatches




 // keyMap




 // foldGutter





 // scroll


 // languages


















/***/ }),

/***/ "./resources/js/components/chats/CodeEditorChat.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/chats/CodeEditorChat.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeEditorChat_vue_vue_type_template_id_0340c691_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true& */ "./resources/js/components/chats/CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true&");
/* harmony import */ var _CodeEditorChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditorChat.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/CodeEditorChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CodeEditorChat_vue_vue_type_style_index_0_id_0340c691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true& */ "./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CodeEditorChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeEditorChat_vue_vue_type_template_id_0340c691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodeEditorChat_vue_vue_type_template_id_0340c691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0340c691",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/CodeEditorChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/CodeEditorChat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chats/CodeEditorChat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditorChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_style_index_0_id_0340c691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=style&index=0&id=0340c691&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_style_index_0_id_0340c691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_style_index_0_id_0340c691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_style_index_0_id_0340c691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_style_index_0_id_0340c691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/chats/CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/chats/CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_template_id_0340c691_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeEditorChat.vue?vue&type=template&id=0340c691&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_template_id_0340c691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditorChat_vue_vue_type_template_id_0340c691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);