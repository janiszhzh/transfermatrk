"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClubPlayersByClubId\": () => (/* binding */ getClubPlayersByClubId)\n/* harmony export */ });\nconst URL = \"https://transfermarket.p.rapidapi.com\";\nasync function getClubPlayersByClubId(id) {\n    const response = await fetch(`${URL}/clubs/get-squad?id=${id}`, {\n        method: \"GET\",\n        headers: {\n            \"X-RapidAPI-Host\": \"transfermarket.p.rapidapi.com\",\n            \"X-RapidAPI-Key\": \"d344203992msh99e22b4fc0ea955p16675bjsnae3875e0e99d\"\n        }\n    });\n    if (!response.ok) {\n        return Promise.reject(response);\n    }\n    return await response.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsdUNBQXVDO0FBSTVDLGVBQWVDLHNCQUFzQixDQUFDQyxFQUFFLEVBQUU7SUFDN0MsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVKLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRUUsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUM1REcsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQ0wsaUJBQWlCLEVBQUUsK0JBQStCO1lBQ2xELGdCQUFnQixFQUFFLG9EQUFvRDtTQUN6RTtLQUNKLENBQUM7SUFHRixJQUFJLENBQUNILFFBQVEsQ0FBQ0ksRUFBRSxFQUFFO1FBQ2QsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNOLFFBQVEsQ0FBQztLQUNsQztJQUNELE9BQU8sTUFBTUEsUUFBUSxDQUFDTyxJQUFJLEVBQUU7Q0FDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFuc2Zlcm1hdHJrLy4vbGliL2FwaS5qcz80NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVSTCA9ICdodHRwczovL3RyYW5zZmVybWFya2V0LnAucmFwaWRhcGkuY29tJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2x1YlBsYXllcnNCeUNsdWJJZChpZCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtVUkx9L2NsdWJzL2dldC1zcXVhZD9pZD0ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICd0cmFuc2Zlcm1hcmtldC5wLnJhcGlkYXBpLmNvbScsXHJcbiAgICAgICAgICAgICdYLVJhcGlkQVBJLUtleSc6ICdkMzQ0MjAzOTkybXNoOTllMjJiNGZjMGVhOTU1cDE2Njc1YmpzbmFlMzg3NWUwZTk5ZCdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJVUkwiLCJnZXRDbHViUGxheWVyc0J5Q2x1YklkIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiUHJvbWlzZSIsInJlamVjdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction IndexPage() {\n    const { 0: players , 1: setPlayers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);\n    const load = async ()=>{\n        try {\n            const d = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getClubPlayersByClubId)(260);\n            setPlayers(d);\n        } catch (e) {\n            if (e.status === 404) router.push(\"/404\");\n        }\n    };\n    return players && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"sdfa\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\janis\\\\WebstormProjects\\\\transfermatrk\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: players\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\janis\\\\WebstormProjects\\\\transfermatrk\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\janis\\\\WebstormProjects\\\\transfermatrk\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNQO0FBRzVCLFNBQVNHLFNBQVMsR0FBRztJQUVoQyxNQUFNLEVBTlYsR0FNV0MsT0FBTyxHQU5sQixHQU1vQkMsVUFBVSxNQUFJSCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUU1Q0QsZ0RBQVMsQ0FBRSxJQUFNLEVBQ2hCLEVBQUUsRUFBRSxDQUFDO0lBQ04sTUFBTUssSUFBSSxHQUFHLFVBQVk7UUFDckIsSUFBSTtZQUNBLE1BQU1DLENBQUMsR0FBRyxNQUFNUCxnRUFBc0IsQ0FBQyxHQUFHLENBQUM7WUFDM0NLLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDO1NBQ2hCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO1lBQ1IsSUFBSUEsQ0FBQyxDQUFDQyxNQUFNLEtBQUssR0FBRyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUM7S0FDSjtJQUlELE9BQU9QLE9BQU8sa0JBQ1YsOERBQUNRLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLE1BRUo7Ozs7O29CQUFLOzBCQUNMLDhEQUFDQyxHQUFDOzBCQUNHVixPQUFPOzs7OztvQkFDUjs7Ozs7O1lBQ0YsQ0FFYjtDQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNmZXJtYXRyay8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRDbHViUGxheWVyc0J5Q2x1YklkfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcblxyXG4gICAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gYXdhaXQgZ2V0Q2x1YlBsYXllcnNCeUNsdWJJZCgyNjApXHJcbiAgICAgICAgICAgIHNldFBsYXllcnMoZClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnN0YXR1cyA9PT0gNDA0KSByb3V0ZXIucHVzaChcIi80MDRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gcGxheWVycyAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgc2RmYVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtwbGF5ZXJzfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4pXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRDbHViUGxheWVyc0J5Q2x1YklkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmRleFBhZ2UiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImxvYWQiLCJkIiwiZSIsInN0YXR1cyIsInJvdXRlciIsInB1c2giLCJkaXYiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();