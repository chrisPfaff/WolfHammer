<<<<<<< Updated upstream
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
/******/ 	__webpack_require__.p = "./";
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


__webpack_require__(2);

//import wolf from './js/wolf.js';
// if (module.hot) {
//   module.hot.accept();
// }
console.log('The Wolf is coming!');
var rules = document.querySelectorAll('.rule');
var scoreBoard = document.querySelector('.score');
rules.forEach(function (rule) {
  return rule.addEventListener('click', getRule);
});

function getRule() {
  var dots = 0;
  var first = 'opening';
  var second = 'open';
  this.classList.toggle('active');
  var activePoints = this.classList.contains('active');
  var array = Array.from(rules);
  array.filter(function (rules) {
    if (rules.classList.contains('active')) {
      var _ref = [second, first];
      first = _ref[0];
      second = _ref[1];
      console.log(first);
      dots = dots + 1;
      scoreBoard.innerHTML = "Score: ".concat(dots);
    }
  });
}

function getActive() {
  var dots = 0;

  if (activePoints) {
    console.log(active);
  }

  var activePoints = this.classList.contains('active');

  if (activePoints) {
    dots++;
    console.log(dots);
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
=======
!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){n.exports=e(1)},function(n,t,e){"use strict";!function(n){n&&n.__esModule}(e(2));e(3)},function(n,t){function e(){var n=0,t="opening",e="open";this.classList.toggle("active");this.classList.contains("active");Array.from(o).filter(function(o){if(o.classList.contains("active")){var c=[e,t];t=c[0],e=c[1],console.log(t),n+=1,r.innerHTML="Score: ".concat(n)}})}console.log("The Wolf is coming!");var o=document.querySelectorAll(".rule"),r=document.querySelector(".score");o.forEach(function(n){return n.addEventListener("click",e)})},function(n,t){}]);
>>>>>>> Stashed changes
