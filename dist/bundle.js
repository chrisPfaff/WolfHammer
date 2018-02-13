/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wolf = _interopRequireDefault(__webpack_require__(2));

var _wolf2 = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  module.hot.accept();
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

console.log('The Wolf is coming!');
var rules = Array.from(document.querySelectorAll('.rule'));
var scoreBoard = document.querySelector('.score');
var dots = Array.from(document.querySelectorAll('.dots'));
var score = 0;
rules.forEach(function (rule) {
  return rule.addEventListener('click', getRule);
});
dots.forEach(function (dot) {
  return dot.addEventListener('click', calculateScore);
});

function getRule() {
  var first = 'opening';
  var second = 'open';
  this.classList.toggle('active');
  rules.filter(function (rule) {
    var active = rule.classList.contains('active');

    if (active) {
      var _ref = [second, first];
      first = _ref[0];
      second = _ref[1];
    }
  });
}

function calculateScore(e) {
  e.preventDefault();
  var current = e.target;
  scoreBoard.innerHTML = "Score: ".concat(score += Number(current.getAttribute('data-dot')));
} // let pos = 0;
// let array = [];
// array[pos] = dots;
// pos++;
// console.log(array);
// const array = [];
// array.push(dots);
// console.log(array);
// const dotScore = dots.getAttribute('data-dot');
// console.log('dots', dotScore);
// if (dots.classList.contains('active')) {
//   scoreBoard.innerHTML = `Score: ${score += Number(dotScore)}`
// }
// function getActive() {
//   let dots = 0;
//   if (activePoints) {
//     console.log(active)
//   }
//   const activePoints = this.classList.contains('active');
//   if (activePoints) {
//     dots++;
//     console.log(dots);
//   }
// }
// const times = Array.from(document.querySelectorAll('[data-time]'));
//     // Filter for only the elements that contain the word 'flexbox'
//     const flexItems = times
//         .filter(item => item.textContent.includes('Flexbox'))
//         //map down to a list of time strings
//         .map(item => item.dataset.time) // data-time
//         // map to an array of seconds
//         .map(timecode => {
//             const parts = timecode.split(':').map(part => parseFloat(part));
//             return (parts[0] * 60) + parts[1];
//         })
//         .reduce((total, seconds) => total + seconds, 0)
//     // reduce to get total
//     console.log(flexItems);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/wolf.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve 'dist/img/saddam.jpg' in '/Users/gapfaff22/Desktop/dev/WolfHammer/src/scss'\n    at factoryCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/webpack/lib/Compilation.js:276:40)\n    at factory (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/webpack/lib/NormalModuleFactory.js:237:20)\n    at resolver (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/webpack/lib/NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/webpack/lib/NormalModuleFactory.js:127:20)\n    at /Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/async/dist/async.js:3874:9\n    at /Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/async/dist/async.js:473:16\n    at iteratorCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/async/dist/async.js:1048:13)\n    at /Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/async/dist/async.js:958:16\n    at /Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/async/dist/async.js:3871:13\n    at resolvers.normal.resolve (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/webpack/lib/NormalModuleFactory.js:119:22)\n    at onError (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:65:10)\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/tapable/lib/Tapable.js:252:11)\n    at /Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/tapable/lib/Tapable.js:252:11)\n    at innerCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:144:11)\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/tapable/lib/Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/Resolver.js:166:11)\n    at loggingCallbackWrapper (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/gapfaff22/Desktop/dev/WolfHammer/node_modules/tapable/lib/Tapable.js:249:35)");

/***/ })
/******/ ]);