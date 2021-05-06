/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/manifest": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "public/" + ({"AddDatabase":"AddDatabase","AddNewFile":"AddNewFile","AddProject":"AddProject","AddWebroute":"AddWebroute","Board":"Board","ChallengeDescription":"ChallengeDescription","ChallengeDiscussions":"ChallengeDiscussions","ChallengeJudges":"ChallengeJudges","ChallengeLeaderboard":"ChallengeLeaderboard","ChallengePanel":"ChallengePanel","ChallengeRules":"ChallengeRules","Challenges":"Challenges","ChallengesCreate":"ChallengesCreate","ChallengesList":"ChallengesList","Chats":"Chats","ForgotPassword":"ForgotPassword","Hub":"Hub","PanelLoader":"PanelLoader","PanelSettings":"PanelSettings","PetBoard":"PetBoard","PetList":"PetList","Pets":"Pets","ProfilePage":"ProfilePage","ProjectList":"ProjectList","ProjectPanel":"ProjectPanel","Projects":"Projects","ResetPassword":"ResetPassword","ResourceUpload":"ResourceUpload","SetUsername":"SetUsername","login":"login","register":"register","vendors~AddGem~PetContent":"vendors~AddGem~PetContent","AddGem":"AddGem","PetContent":"PetContent","vendors~CodeBox~CodeEditor~CodeEditorChat":"vendors~CodeBox~CodeEditor~CodeEditorChat","CodeEditor":"CodeEditor","verify":"verify","vendors~VPressEditor?v=0.12":"vendors~VPressEditor?v=0.12","VPressEditor?v=0.12":"VPressEditor?v=0.12","ChannelEdit":"ChannelEdit","ChannelInfo":"ChannelInfo","ChatBottom":"ChatBottom","ChatList":"ChatList","ChatMessages":"ChatMessages","ChatTop":"ChatTop","CreateChannel":"CreateChannel","ImageViewer":"ImageViewer","LiveSession":"LiveSession","SubChannels":"SubChannels","top-bar-chat":"top-bar-chat","CodeEditorChat":"CodeEditorChat","ProjectView":"ProjectView","addPage":"addPage","top-bar":"top-bar","EditProfile":"EditProfile","top-bar-profile":"top-bar-profile","panel-side":"panel-side","AudioPlayer":"AudioPlayer","Images":"Images","CodeBox":"CodeBox","vendors~VideoPlayer":"vendors~VideoPlayer","VideoPlayer":"VideoPlayer","ImageLoader?v=0.10":"ImageLoader?v=0.10"}[chunkId]||chunkId) + "." + {"AddDatabase":"96c20c7938451a8b2e38","AddNewFile":"6fda092fc9ae7c72e751","AddProject":"7d5869ab16ef44823d4c","AddWebroute":"5cd947430f77d0f4b095","Board":"6852ba934646e85a9f13","ChallengeDescription":"2ca34f8af9f15133dfbc","ChallengeDiscussions":"0f94dbec59f844cad6b7","ChallengeJudges":"3e55ad1f8e10c5fe92ca","ChallengeLeaderboard":"3c359ee56d1c0a9b53d5","ChallengePanel":"3f5eae6fb41fda9b692b","ChallengeRules":"09aed2b3ab752b16cf2d","Challenges":"de47e10c468e4cb058cd","ChallengesCreate":"9de6f35827541fa01c18","ChallengesList":"da0207e0941e88ee0bb3","Chats":"b03ff76f848fdd56f81f","ForgotPassword":"0e633008bf63c97a39c0","Hub":"e6279cbbef962063bcf3","PanelLoader":"285d0ac7f34376e7c4af","PanelSettings":"7f9c0279e5f65b089552","PetBoard":"67023938b7ae682f521a","PetList":"00a4b5f93df631717bd6","Pets":"fee5e019689c0be79579","ProfilePage":"5cad5db90c43b525932e","ProjectList":"b63b4c233fd0c526bfa3","ProjectPanel":"24ffba16bb803c47a417","Projects":"ee3be84617649f8a76e5","ResetPassword":"2daa581933356af915fd","ResourceUpload":"c05501e59e4e4cc365ce","SetUsername":"4091aa34f06255db0aa2","login":"58b47b2303d25bb71df5","register":"d4c2ddc6269cd946e8e6","vendors~AddGem~PetContent":"44d5d98ee2589ee0f2d4","AddGem":"35accd098b261be348a5","PetContent":"bedd1099bcbc8067590c","vendors~CodeBox~CodeEditor~CodeEditorChat":"8d34d3deb01e8855b707","CodeEditor":"5277d9ece1c31a2393fd","verify":"28f914638cfca85eb114","vendors~VPressEditor?v=0.12":"9bb3b5a343417f1e7630","VPressEditor?v=0.12":"a523e994dc57116d8d75","ChannelEdit":"4985fb6936d7fdae2314","ChannelInfo":"69b86aadc7dae43d898d","ChatBottom":"d038eea2351dfad86145","ChatList":"7d3b247f51e1e79a68e5","ChatMessages":"7117e2a73cc98b60e98c","ChatTop":"8a917a77c6858b30c567","CreateChannel":"66340e5623775bf529e4","ImageViewer":"2633f1678e6da17f017b","LiveSession":"4019fbbaaa5ae9ef106a","SubChannels":"8a14e6e204689f3c56b6","top-bar-chat":"ea96ca8e892e35402795","CodeEditorChat":"3388c83a4dff9ff13daa","ProjectView":"18c4a2a9767b42ffc807","addPage":"9d121da860f32099f41d","top-bar":"1df0552cddaa949d1482","EditProfile":"1f53e849bd82e9a0fb1d","top-bar-profile":"64f486dbab0b2351ea22","panel-side":"749a0ea8a416d76be4fd","AudioPlayer":"70bf09cd3d3feb15fc22","Images":"abde626d6cc85a9f4780","CodeBox":"470ea1c168a9e6aa6dd5","vendors~VideoPlayer":"8992c579db9657cf556a","VideoPlayer":"8a1add097b9fb159340e","ImageLoader?v=0.10":"4f83cc08fc326f9f98de"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);