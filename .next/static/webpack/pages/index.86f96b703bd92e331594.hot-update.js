webpackHotUpdate_N_E("pages/index",{

/***/ "./function.js":
/*!*********************!*\
  !*** ./function.js ***!
  \*********************/
/*! exports provided: getFloatval, addFirstProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFloatval\", function() { return getFloatval; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFirstProduct\", function() { return addFirstProduct; });\nvar getFloatval = function getFloatval(string) {\n  console.log(\"string\", string);\n  var floatValue = string.match(/[+-]?\\d+(\\.\\d+)?/g)[0]; // console.log(\"floatValue--\", floatValue)\n\n  return string.price ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';\n};\nvar addFirstProduct = function addFirstProduct(product) {\n  console.log('heey from inside the addproduct');\n  console.log(product);\n  var productPrice = getFloatval(product.price);\n  console.log(\"product pRICE\", parseFloat(productPrice.toFixed(2))); //if no item in the cart, create an n empty array and pushe the item\n  // let newCart ={\n  //     product:[],\n  //     totalProductsCount:1, \n  //     totalProductsPrice:parseFloat(productPrice.toFixed(2))\n  // }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb24uanM/NzQ5NyJdLCJuYW1lcyI6WyJnZXRGbG9hdHZhbCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJmbG9hdFZhbHVlIiwibWF0Y2giLCJwcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiYWRkRmlyc3RQcm9kdWN0IiwicHJvZHVjdCIsInByb2R1Y3RQcmljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFFLFNBQWJBLFdBQWEsQ0FBQ0MsTUFBRCxFQUFVO0FBQ2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0QjtBQUVBLE1BQUlHLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxLQUFQLENBQWMsbUJBQWQsRUFBb0MsQ0FBcEMsQ0FBakIsQ0FIZ0MsQ0FJaEM7O0FBQ0gsU0FBT0osTUFBTSxDQUFDSyxLQUFQLEdBQWNDLFVBQVUsQ0FBRUEsVUFBVSxDQUFFSCxVQUFGLENBQVYsQ0FBeUJJLE9BQXpCLENBQWtDLENBQWxDLENBQUYsQ0FBeEIsR0FBb0UsRUFBM0U7QUFDQSxDQU5NO0FBUUEsSUFBTUMsZUFBZSxHQUFDLFNBQWhCQSxlQUFnQixDQUFDQyxPQUFELEVBQVc7QUFDcENSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZTyxPQUFaO0FBQ0EsTUFBSUMsWUFBWSxHQUFHWCxXQUFXLENBQUNVLE9BQU8sQ0FBQ0osS0FBVCxDQUE5QjtBQUNBSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSSxVQUFVLENBQUNJLFlBQVksQ0FBQ0gsT0FBYixDQUFxQixDQUFyQixDQUFELENBQXZDLEVBSm9DLENBTXBDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILENBZE0iLCJmaWxlIjoiLi9mdW5jdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRGbG9hdHZhbCA9KHN0cmluZyk9PntcbiAgICBjb25zb2xlLmxvZyhcInN0cmluZ1wiLCBzdHJpbmcpXG5cbiAgICBsZXQgZmxvYXRWYWx1ZSA9IHN0cmluZy5tYXRjaCggL1srLV0/XFxkKyhcXC5cXGQrKT8vZyApWzBdO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZmxvYXRWYWx1ZS0tXCIsIGZsb2F0VmFsdWUpXG5cdHJldHVybiBzdHJpbmcucHJpY2U/IHBhcnNlRmxvYXQoIHBhcnNlRmxvYXQoIGZsb2F0VmFsdWUgKS50b0ZpeGVkKCAyICkgKSA6ICcnO1xufVxuXG5leHBvcnQgY29uc3QgYWRkRmlyc3RQcm9kdWN0PShwcm9kdWN0KT0+e1xuICAgIGNvbnNvbGUubG9nKCdoZWV5IGZyb20gaW5zaWRlIHRoZSBhZGRwcm9kdWN0JylcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgIGxldCBwcm9kdWN0UHJpY2UgPSBnZXRGbG9hdHZhbChwcm9kdWN0LnByaWNlKVxuICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBwUklDRVwiLCBwYXJzZUZsb2F0KHByb2R1Y3RQcmljZS50b0ZpeGVkKDIpKSlcblxuICAgIC8vaWYgbm8gaXRlbSBpbiB0aGUgY2FydCwgY3JlYXRlIGFuIG4gZW1wdHkgYXJyYXkgYW5kIHB1c2hlIHRoZSBpdGVtXG5cbiAgICAvLyBsZXQgbmV3Q2FydCA9e1xuICAgIC8vICAgICBwcm9kdWN0OltdLFxuICAgIC8vICAgICB0b3RhbFByb2R1Y3RzQ291bnQ6MSwgXG4gICAgLy8gICAgIHRvdGFsUHJvZHVjdHNQcmljZTpwYXJzZUZsb2F0KHByb2R1Y3RQcmljZS50b0ZpeGVkKDIpKVxuICAgIC8vIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./function.js\n");

/***/ })

})