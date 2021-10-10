/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_toggleMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/toggleMenuItem */ "./resources/js/menu/toggleMenuItem.js");
/* harmony import */ var _menu_toggleMenuBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/toggleMenuBtn */ "./resources/js/menu/toggleMenuBtn.js");
/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop-down */ "./resources/js/drop-down.js");
/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar */ "./resources/js/calendar.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calendar__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./resources/js/calendar.js":
/*!**********************************!*\
  !*** ./resources/js/calendar.js ***!
  \**********************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar = /*#__PURE__*/function () {
  function Calendar(date) {
    _classCallCheck(this, Calendar);

    _defineProperty(this, "month", ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

    this.date = date;
  }

  _createClass(Calendar, [{
    key: "createMonthList",
    value: function createMonthList() {
      var _this = this;

      //     <li className="calendar__month-item">Jan</li>
      //     <li className="calendar__month-item">Feb</li>
      //     <li className="calendar__month-item">Mar</li>
      //     <li className="calendar__month-item">Apr</li>
      //     <li className="calendar__month-item">May</li>
      //     <li className="calendar__month-item calendar__month-item--active">Jun</li>
      //     <li className="calendar__month-item">Jul</li>
      //     <li className="calendar__month-item">Aug</li>
      //     <li className="calendar__month-item">Sep</li>
      //     <li className="calendar__month-item">Oct</li>
      //     <li className="calendar__month-item">Nov</li>
      //     <li className="calendar__month-item">Dec</li>
      return this.month.map(function (month, index) {
        var li = document.createElement('li');
        li.innerText = month;
        li.classList.add('calendar__month-item');

        if (_this.date.getMonth() === index) {
          li.classList.add('calendar__month-item--active');
        }

        return li;
      });
    }
  }, {
    key: "createYear",
    value: function createYear() {
      // <span className="calendar__year-count">2020</span>
      var yearCount = document.createElement('span');
      yearCount.classList.add('calendar__year-count');
      yearCount.innerText = this.date.getFullYear();
      return yearCount;
    }
  }, {
    key: "createDaysList",
    value: function createDaysList() {
      // <li className="calendar__day-item"></li>
      // <li className="calendar__day-item"></li>
      // <li className="calendar__day-item"></li>
      // <li className="calendar__day-item">1</li>
      // <li className="calendar__day-item">2</li>
      // <li className="calendar__day-item">3</li>
      // <li className="calendar__day-item">4</li>
      // <li className="calendar__day-item calendar__day-item--active">5</li>
      // <li className="calendar__day-item">6</li>
      // <li className="calendar__day-item">7</li>
      // <li className="calendar__day-item">8</li>
      // <li className="calendar__day-item">9</li>
      // <li className="calendar__day-item">10</li>
      // <li className="calendar__day-item">11</li>
      // <li className="calendar__day-item">12</li>
      // <li className="calendar__day-item">13</li>
      // <li className="calendar__day-item">14</li>
      // <li className="calendar__day-item">15</li>
      // <li className="calendar__day-item">16</li>
      // <li className="calendar__day-item">17</li>
      // <li className="calendar__day-item">18</li>
      // <li className="calendar__day-item">19</li>
      // <li className="calendar__day-item">20</li>
      // <li className="calendar__day-item">21</li>
      // <li className="calendar__day-item">22</li>
      // <li className="calendar__day-item">23</li>
      // <li className="calendar__day-item">24</li>
      // <li className="calendar__day-item">25</li>
      // <li className="calendar__day-item">26</li>
      // <li className="calendar__day-item">27</li>
      // <li className="calendar__day-item">28</li>
      // <li className="calendar__day-item">29</li>
      // <li className="calendar__day-item">30</li>
      // <li className="calendar__day-item">31</li>
      // <li className="calendar__day-item"></li>
      var someDate = new Date(this.date);
      someDate.setDate(1);
      var start = false;
      var thisMonth = someDate.getMonth();
      var days = [];
      var maxDays = 34;

      for (var i = 0; i <= maxDays; i++) {
        var li = document.createElement('li');
        li.classList.add('calendar__day-item');

        if (i === someDate.getDay()) {
          start = true;
        }

        if (start && thisMonth === someDate.getMonth()) {
          li.innerText = someDate.getDate();

          if (this.date.getTime() === someDate.getTime() && start) {
            li.classList.add('calendar__day-item--active');
          }

          someDate.setDate(someDate.getDate() + 1);
        }

        if (i === maxDays && someDate.getMonth() === thisMonth) {
          maxDays = maxDays + 7;
        }

        days.push(li);
      }

      return days;
    }
  }, {
    key: "createWeeksList",
    value: function createWeeksList() {
      var week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
      return week.map(function (day) {
        var dayHtml = document.createElement('li');
        dayHtml.classList.add('calendar__weeks-item');
        dayHtml.innerText = day;
        return dayHtml;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var root = document.createElement('div');
      root.classList.add('calendar__dropdown');
      var calendarMonth = document.createElement('ul');
      calendarMonth.classList.add('calendar__month');
      calendarMonth.append.apply(calendarMonth, _toConsumableArray(this.createMonthList()));
      root.append(calendarMonth); // <div className="calendar__year">
      //     <button type="button" className="calendar__year-left"></button>
      //     <span className="calendar__year-count">2020</span>
      //     <button type="button" className="calendar__year-right"></button>
      // </div>

      var calendarYear = document.createElement('div');
      calendarYear.classList.add('calendar__year');
      var buttonLeft = document.createElement('button');
      buttonLeft.classList.add('calendar__year-left');
      calendarYear.append(buttonLeft);
      calendarYear.append(this.createYear());
      var buttonRight = document.createElement('button');
      buttonRight.classList.add('calendar__year-right');
      calendarYear.append(buttonRight);
      root.append(calendarYear);
      var weekWrap = document.createElement('ul');
      weekWrap.classList.add('calendar__weeks-list');
      weekWrap.append.apply(weekWrap, _toConsumableArray(this.createWeeksList()));
      root.append(weekWrap);
      var calendarDaysList = document.createElement('ul');
      calendarDaysList.classList.add('calendar__day-list');
      calendarDaysList.append.apply(calendarDaysList, _toConsumableArray(this.createDaysList()));
      root.append(calendarDaysList);
      return root;
    }
  }]);

  return Calendar;
}();

var calendar = new Calendar(new Date());
document.querySelector('.calendar').append(calendar.render()); // console.log(calendar.render())

/***/ }),

/***/ "./resources/js/components.js":
/*!************************************!*\
  !*** ./resources/js/components.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aside": () => (/* binding */ aside)
/* harmony export */ });
var aside = document.querySelector('.aside');


/***/ }),

/***/ "./resources/js/drop-down.js":
/*!***********************************!*\
  !*** ./resources/js/drop-down.js ***!
  \***********************************/
/***/ (() => {

document.querySelectorAll('.drop-down').forEach(function (dropDown) {
  // const dropDown = document.querySelector('.drop-down');
  var selectBox = dropDown.querySelector('.drop-down__select');
  var button = dropDown.querySelector('.drop-down__button');
  var list = dropDown.querySelector('.drop-down__list');
  var input = dropDown.querySelector('.drop-down__input');
  button.addEventListener('click', function () {
    selectBox.classList.toggle('drop-down__select--open');
  });
  list.addEventListener('click', function (e) {
    if (e.target.closest('.drop-down__list-item')) {
      button.innerText = e.target.closest('.drop-down__list-item').innerText;
      input.value = e.target.closest('.drop-down__list-item').dataset.value;
      selectBox.classList.remove('drop-down__select--open');
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.drop-down') !== dropDown) {
      selectBox.classList.remove('drop-down__select--open');
    }
  });
});

/***/ }),

/***/ "./resources/js/menu/toggleMenuBtn.js":
/*!********************************************!*\
  !*** ./resources/js/menu/toggleMenuBtn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ "./resources/js/components.js");

_components_js__WEBPACK_IMPORTED_MODULE_0__.aside.addEventListener('click', function (e) {
  if (e.target.closest('.menu-btn')) {
    _components_js__WEBPACK_IMPORTED_MODULE_0__.aside.classList.toggle('aside--hide');
  }
});

/***/ }),

/***/ "./resources/js/menu/toggleMenuItem.js":
/*!*********************************************!*\
  !*** ./resources/js/menu/toggleMenuItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ "./resources/js/components.js");

var menuHeaderItems = _components_js__WEBPACK_IMPORTED_MODULE_0__.aside.querySelectorAll('.menu__header');
_components_js__WEBPACK_IMPORTED_MODULE_0__.aside.addEventListener('click', function (e) {
  if (e.target.closest('.menu__header')) {
    e.target.closest('.menu__header').classList.toggle('menu__header--show');
  }
});

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resources/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map