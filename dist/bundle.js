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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var createTeam = document.querySelector('.create');
var setTeams = document.querySelector('.set_teams');
var checkboxes = document.querySelectorAll('input');
var teamz = setTeams.querySelectorAll('.teamz');
var scoreBoard = document.querySelector('.score');
var dots = Array.from(document.querySelectorAll('.dots'));
var teamSelect = document.querySelectorAll('.active_team');
var names = document.querySelectorAll('.name');
names.forEach(function (name) {
  return addEventListener('input', function (event) {
    console.log(name.textContent);
    name.textContent.replace(name, event.target); //name.replace(name.innerHTML, event.target);
  });
});
var teams = [];
var score = 0;

var checkboxDOMselect = function checkboxDOMselect(checkValue, parentElement) {
  if (checkValue.checked) {
    var newElem = document.createElement('p'); //var name = document.createTextNode(`${checkValue.name} has 0 dots.`);

    var name = document.createTextNode(checkValue.name);
    newElem.classList.add('teamz');
    newElem.appendChild(name);
    parentElement.appendChild(newElem);
  } else if (!checkValue.checked) {
    setTeams.childNodes.forEach(function (team) {
      if (checkValue.name === team.textContent) {
        parentElement.removeChild(team);
      }
    });
  }
};

var createTeams = function createTeams(arr, target) {
  var players = Array.from(document.querySelectorAll('input:checked')).map(function (input) {
    return {
      id: input.id,
      name: input.name
    };
  });

  if (players.length) {
    teams.push({
      players: players,
      score: 0,
      id: teams.length
    });
    updateTeamSelect();
  }

  if (!players.length) {
    console.error('PICK A PLAYER');
  }
};

var calculateScore = function calculateScore(event, target) {
  event.preventDefault();
  var current = event.target;

  if (teams.length) {
    var activeTeamID = teams.filter(function (team) {
      return team.players[0];
    });
    var activeTeam = activeTeamID.filter(function (team) {
      return team.id === activeTeamID[0].id;
    })[0];
    activeTeam.score += parseInt(current.dataset.dot);
    updateTeamData(activeTeam);
  }
};

var updateTeamSelect = function updateTeamSelect() {
  var teamSelect = document.querySelectorAll('.active_team__select')[0];
  teamSelect.innerHTML = '';
  teams.forEach(function (item) {
    var teamOption = document.createElement('option');
    teamOption.value = item.id;
    teamOption.innerText = "Team ".concat(item.id);
    teamSelect.appendChild(teamOption);
  });
};

var updateTeamData = function updateTeamData(activeTeam) {
  console.log(activeTeam);
  activeTeam.players.forEach(function (player, index) {
    document.querySelectorAll('.teamz')[index].innerHTML = "".concat(player.name, " has ").concat(activeTeam.score, " dots.");
  });
}; // EL's


document.addEventListener("click", function (event) {
  if (!teams.includes(event.target) && event.target.matches("input")) {
    checkboxDOMselect(event.target, setTeams);
  }

  return teams;
});
createTeam.addEventListener("click", function (event) {
  createTeams(checkboxes, event.target.id);
});
dots.forEach(function (dot) {
  return dot.addEventListener('click', calculateScore);
}); // const teams = [];
// const updateTeamData = () => {
//   document.querySelectorAll('#team-data')[0].innerHTML = JSON.stringify(teams);
// }
// const updateTeamSelect = () => {
//   const teamSelect = document.querySelectorAll('#active-team')[0];
//   teamSelect.innerHTML = '';
//   teams.forEach(item => {
//     const teamOption = document.createElement('option');
//     teamOption.value = item.id;
//     teamOption.innerText = `Team ${item.id}`;
//     teamSelect.appendChild(teamOption);
//   });
// }
// document.querySelectorAll('#create')[0].addEventListener('click', e => {
//   const players = Array.from(document.querySelectorAll('input:checked')).map(input => { return { id: input.dataset.id, name: input.dataset.name }; });
//   if (players.length) teams.push({
//     players,
//     score: 0,
//     id: teams.length,
//   });
//   updateTeamData();
//   updateTeamSelect();
// });
// BUTTONS
// Array.from(document.querySelectorAll('.update-score')).forEach(item => {
//   item.addEventListener('click', e => {
//     if (teams.length) {
//       const activeTeamId = parseInt(document.querySelectorAll('#active-team')[0].value);
//       const activeTeam = teams.filter(team => team.id === activeTeamId)[0];
//       activeTeam.score += parseInt(e.target.dataset.scoreMod);
//       updateTeamData();
//     }
//   });
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _score = _interopRequireDefault(__webpack_require__(3));

var _rules = _interopRequireDefault(__webpack_require__(4));

var _checkbox = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import wolfImage from '././img/wolf.jpg';
// import sandy from '././img/sand.jpg'
// import bugler from './.img/bugler.jpg'
// import saddam from '././img/saddam.jpg';
// imports all images
function requireAll(image) {
  image.keys().forEach(image);
}

requireAll(__webpack_require__(9));
console.log('The Wolf is coming!');

if (false) {
  module.hot.accept();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _checkbox = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scoreBoard = document.querySelector('.score');
var dots = Array.from(document.querySelectorAll('.dots'));
var score = 0;

function calculateScore(event, target) {
  event.preventDefault();
  var current = event.target; // if (teams.length) {
  //   console.log(teams.length);
  //   const activeTeamId = parseInt(document.querySelectorAll('#active-team')[0].value);
  //   const activeTeam = teams.filter(team => team.id === activeTeamId)[0];
  //   activeTeam.score += parseInt(e.target.dataset.scoreMod);
  //   updateTeamData();
  // }
}

dots.forEach(function (dot) {
  return dot.addEventListener('click', calculateScore);
}); // const updateTeamData = () => {
//   document.querySelectorAll('#team-data')[0].innerHTML = JSON.stringify(teams);
// };

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var rules = Array.from(document.querySelectorAll('.rule'));

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

rules.forEach(function (rule) {
  return rule.addEventListener('click', getRule);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./benhogan.jpg": 10,
	"./boomerang.jpg": 11,
	"./bugler.jpg": 12,
	"./eagle.jpg": 13,
	"./hammer.jpg": 14,
	"./rattler.jpg": 15,
	"./saddam.jpg": 16,
	"./sand.jpg": 17,
	"./treewhack.jpg": 18,
	"./wasabi.jpg": 19,
	"./wolf.jpg": 20
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/benhogan.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/boomerang.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/bugler.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/eagle.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/hammer.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/rattler.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/saddam.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sand.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/treewhack.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/wasabi.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/wolf.jpg";

/***/ })
/******/ ]);