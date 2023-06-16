/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n// get json file\nconst dataset = __webpack_require__(/*! ../assets/prefixes.json */ \"./assets/prefixes.json\");\nconst CheckFormat = __webpack_require__(/*! ./utils/number-validator */ \"./src/utils/number-validator.js\");\n\nfunction PredictDigit(digit) {\n\t// two variables, one to hold output and\n\t// the other for if predicted or not\n\tvar result,\n\t\tsuccess = false;\n\n\tconst check = CheckFormat(digit);\n\n\tfor (let key in dataset) {\n\t\t// get array for each key\n\t\tdataset[key].forEach((value, index, array) => {\n\t\t\tif (check == true) {\n\t\t\t\t// slice the digit to match each prefix in the array\n\t\t\t\tconst prefix = digit.slice(0, value.length);\n\n\t\t\t\t// compare input with prefix in array\n\t\t\t\tif (prefix === value) {\n\t\t\t\t\tsuccess = true;\n\t\t\t\t\tresult = key;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tsuccess = true;\n\t\t\t\tresult = check;\n\t\t\t}\n\t\t});\n\t}\n\n\tif (!success) {\n\t\tresult = 'NOT FOUND';\n\t}\n\n\treturn result;\n}\n\nmodule.exports = { PredictDigit };\n\n//# sourceURL=webpack://mobile-number-issuer-detector/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// check if DOM is loaded first\ndocument?.addEventListener('DOMContentLoaded', () => {\n\t// get all inputs by ID\n\tconst numberInput = document.getElementById('numberInput');\n\tconst detectButton = document.getElementById('detectButton');\n\tconst resultElement = document.getElementById('result');\n\n\t// check if button is loaded in DOM first\n\tdetectButton?.addEventListener('click', () => {\n\t\tconst number = numberInput.value; // get the value of input\n\n\t\tconst provider = (0,_app__WEBPACK_IMPORTED_MODULE_0__.PredictDigit)(number); // send to algorithm\n\n\t\tresultElement.textContent = `${provider} - ${number}`; // send response to html\n\n\t\tif (numberInput.value != '') {\n\t\t\tnumberInput.value = '';\n\t\t} // reset input\n\t});\n});\n\n\n//# sourceURL=webpack://mobile-number-issuer-detector/./src/index.js?");

/***/ }),

/***/ "./src/utils/number-validator.js":
/*!***************************************!*\
  !*** ./src/utils/number-validator.js ***!
  \***************************************/
/***/ ((module) => {

eval("function CheckFormat(number) {\n    // Regex pattern to match +234 followed by 10 digits or 0 followed by 10 digits\n    const pattern = /^(?:0\\d{10})$/;\n\n    let message;\n  \n    // Test if the number matches the pattern\n    if (pattern.test(number)) {\n        message = true;\n    } else {\n        if (number.length !== 11 && number.startsWith(\"0\")) {\n        message = \"invalid dial code\";\n        } else {\n        message = \"invalid format\";\n        }\n    }\n\n    return message\n}\n\nmodule.exports = CheckFormat\n\n//# sourceURL=webpack://mobile-number-issuer-detector/./src/utils/number-validator.js?");

/***/ }),

/***/ "./assets/prefixes.json":
/*!******************************!*\
  !*** ./assets/prefixes.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"MTN\":[\"0803\",\"0806\",\"0703\",\"0706\",\"0813\",\"0816\",\"0810\",\"0814\",\"0903\",\"0906\",\"0913\",\"0916\",\"07025\",\"07026\",\"0704\"],\"GLO\":[\"0805\",\"0807\",\"0705\",\"0815\",\"0811\",\"0905\",\"0915\"],\"AIRTEL\":[\"0802\",\"0808\",\"0708\",\"0812\",\"0701\",\"0902\",\"0901\",\"0904\",\"0907\",\"0912\"],\"9MOBILE\":[\"0809\",\"0818\",\"0817\",\"0909\",\"0908\"]}');\n\n//# sourceURL=webpack://mobile-number-issuer-detector/./assets/prefixes.json?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;