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
/******/ 	__webpack_require__.p = "/";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_wolf_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_wolf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_wolf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_base_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_base_scss__);



if (false) {
  module.hot.accept();
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

console.log('The Wolf is coming!');

const rules = document.querySelectorAll('.rule');
const scoreBoard = document.querySelector('.score');

rules.forEach(rule => rule.addEventListener('click', getRule));

function getRule() {
  let dots = 0;
  let first = 'opening';
  let second = 'open';
  this.classList.toggle('active');
  const activePoints = this.classList.contains('active');

  const array = Array.from(rules);
  array.filter(rules => {
    if (rules.classList.contains('active')) {
      [first, second] = [second, first];
      console.log(first);
      dots = dots + 1;
      scoreBoard.innerHTML = `Score: ${dots}`;
    }
    // this.classList.toggle('opening');
    // setTimeout(() => {
    //   this.classList.toggle('open');
    // });
  });
  // console.log(array);
  // Array.from(rules.filter(active => active.classList.contains('active')));
}

function getActive() {
  let dots = 0;

  if (activePoints) {
    console.log(active);
  }
  const activePoints = this.classList.contains('active');

  if (activePoints) {
    dots++;
    console.log(dots);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);