webpackHotUpdate_N_E("pages/index",{

/***/ "./function.js":
/*!*********************!*\
  !*** ./function.js ***!
  \*********************/
/*! exports provided: getFloatval, addFirstProduct, createNewProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFloatval\", function() { return getFloatval; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFirstProduct\", function() { return addFirstProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewProduct\", function() { return createNewProduct; });\nvar getFloatval = function getFloatval(string) {\n  console.log(\"string\", string);\n  var floatValue = string.match(/[+-]?\\d+(\\.\\d+)?/g)[0];\n  return null !== floatValue ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';\n};\nvar addFirstProduct = function addFirstProduct(product) {\n  console.log('heey from inside the addproduct');\n  var productPrice = getFloatval(product.price); //if no item in the cart, create an n empty array and pushe the item\n\n  var newCart = {\n    product: [],\n    totalProductsCount: 1,\n    totalProductsPrice: productPrice\n  };\n  var newProduct = createNewProduct(product, productPrice, 1); //qty is 1 b/c its the first time we're creating it\n\n  newCart.products.push(newProduct);\n  localStorage.setItem('woo-next-cart', JSON.stringify(newCart));\n  return newCart;\n}; //CREATE A NEW PRODUCT OBJECT\n\nvar createNewProduct = function createNewProduct(product, productPrice, qty) {\n  return {\n    productId: product.productId,\n    image: product.image,\n    name: product.name,\n    price: productPrice,\n    qty: qty,\n    totalPrice: parseFloat((productPrice * qty).toFixed(2))\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb24uanM/NzQ5NyJdLCJuYW1lcyI6WyJnZXRGbG9hdHZhbCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJmbG9hdFZhbHVlIiwibWF0Y2giLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImFkZEZpcnN0UHJvZHVjdCIsInByb2R1Y3QiLCJwcm9kdWN0UHJpY2UiLCJwcmljZSIsIm5ld0NhcnQiLCJ0b3RhbFByb2R1Y3RzQ291bnQiLCJ0b3RhbFByb2R1Y3RzUHJpY2UiLCJuZXdQcm9kdWN0IiwiY3JlYXRlTmV3UHJvZHVjdCIsInByb2R1Y3RzIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicXR5IiwicHJvZHVjdElkIiwiaW1hZ2UiLCJuYW1lIiwidG90YWxQcmljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxXQUFXLEdBQUUsU0FBYkEsV0FBYSxDQUFDQyxNQUFELEVBQVU7QUFDaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLE1BQXRCO0FBRUEsTUFBSUcsVUFBVSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYyxtQkFBZCxFQUFvQyxDQUFwQyxDQUFqQjtBQUNILFNBQVEsU0FBU0QsVUFBVixHQUF1QkUsVUFBVSxDQUFFQSxVQUFVLENBQUVGLFVBQUYsQ0FBVixDQUF5QkcsT0FBekIsQ0FBa0MsQ0FBbEMsQ0FBRixDQUFqQyxHQUE2RSxFQUFwRjtBQUNBLENBTE07QUFPQSxJQUFNQyxlQUFlLEdBQUMsU0FBaEJBLGVBQWdCLENBQUNDLE9BQUQsRUFBVztBQUNwQ1AsU0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQSxNQUFJTyxZQUFZLEdBQUdWLFdBQVcsQ0FBQ1MsT0FBTyxDQUFDRSxLQUFULENBQTlCLENBRm9DLENBS3BDOztBQUVBLE1BQUlDLE9BQU8sR0FBRTtBQUNUSCxXQUFPLEVBQUMsRUFEQztBQUVUSSxzQkFBa0IsRUFBQyxDQUZWO0FBR1RDLHNCQUFrQixFQUFDSjtBQUhWLEdBQWI7QUFNQSxNQUFNSyxVQUFVLEdBQUdDLGdCQUFnQixDQUFDUCxPQUFELEVBQVVDLFlBQVYsRUFBd0IsQ0FBeEIsQ0FBbkMsQ0Fib0MsQ0FhMkI7O0FBQ25FRSxTQUFPLENBQUNLLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCSCxVQUF0QjtBQUNBSSxjQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixPQUFmLENBQXRDO0FBQ0EsU0FBT0EsT0FBUDtBQUNDLENBakJNLEMsQ0FtQlA7O0FBR08sSUFBTUksZ0JBQWdCLEdBQUUsU0FBbEJBLGdCQUFrQixDQUFDUCxPQUFELEVBQVVDLFlBQVYsRUFBd0JhLEdBQXhCLEVBQThCO0FBQ3pELFNBQU07QUFDRkMsYUFBUyxFQUFFZixPQUFPLENBQUNlLFNBRGpCO0FBRUZDLFNBQUssRUFBQ2hCLE9BQU8sQ0FBQ2dCLEtBRlo7QUFHRkMsUUFBSSxFQUFDakIsT0FBTyxDQUFDaUIsSUFIWDtBQUlGZixTQUFLLEVBQUNELFlBSko7QUFLRmEsT0FBRyxFQUFFQSxHQUxIO0FBTUZJLGNBQVUsRUFBRXJCLFVBQVUsQ0FBQyxDQUFDSSxZQUFZLEdBQUdhLEdBQWhCLEVBQXFCaEIsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBRDtBQU5wQixHQUFOO0FBUUgsQ0FUTSIsImZpbGUiOiIuL2Z1bmN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEZsb2F0dmFsID0oc3RyaW5nKT0+e1xuICAgIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsIHN0cmluZylcblxuICAgIGxldCBmbG9hdFZhbHVlID0gc3RyaW5nLm1hdGNoKCAvWystXT9cXGQrKFxcLlxcZCspPy9nIClbMF07XG5cdHJldHVybiAobnVsbCAhPT0gZmxvYXRWYWx1ZSk/IHBhcnNlRmxvYXQoIHBhcnNlRmxvYXQoIGZsb2F0VmFsdWUgKS50b0ZpeGVkKCAyICkgKSA6ICcnO1xufVxuXG5leHBvcnQgY29uc3QgYWRkRmlyc3RQcm9kdWN0PShwcm9kdWN0KT0+e1xuICAgIGNvbnNvbGUubG9nKCdoZWV5IGZyb20gaW5zaWRlIHRoZSBhZGRwcm9kdWN0JylcbiAgICBsZXQgcHJvZHVjdFByaWNlID0gZ2V0RmxvYXR2YWwocHJvZHVjdC5wcmljZSlcblxuXG4gICAgLy9pZiBubyBpdGVtIGluIHRoZSBjYXJ0LCBjcmVhdGUgYW4gbiBlbXB0eSBhcnJheSBhbmQgcHVzaGUgdGhlIGl0ZW1cblxuICAgIGxldCBuZXdDYXJ0ID17XG4gICAgICAgIHByb2R1Y3Q6W10sXG4gICAgICAgIHRvdGFsUHJvZHVjdHNDb3VudDoxLCBcbiAgICAgICAgdG90YWxQcm9kdWN0c1ByaWNlOnByb2R1Y3RQcmljZVxuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBjcmVhdGVOZXdQcm9kdWN0KHByb2R1Y3QsIHByb2R1Y3RQcmljZSwgMSk7IC8vcXR5IGlzIDEgYi9jIGl0cyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjcmVhdGluZyBpdFxubmV3Q2FydC5wcm9kdWN0cy5wdXNoKG5ld1Byb2R1Y3QpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvby1uZXh0LWNhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSk7XG5yZXR1cm4gbmV3Q2FydFxufVxuXG4vL0NSRUFURSBBIE5FVyBQUk9EVUNUIE9CSkVDVFxuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdQcm9kdWN0ID0ocHJvZHVjdCwgcHJvZHVjdFByaWNlLCBxdHkpPT57XG4gICAgcmV0dXJue1xuICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QucHJvZHVjdElkLFxuICAgICAgICBpbWFnZTpwcm9kdWN0LmltYWdlLFxuICAgICAgICBuYW1lOnByb2R1Y3QubmFtZSxcbiAgICAgICAgcHJpY2U6cHJvZHVjdFByaWNlLFxuICAgICAgICBxdHk6IHF0eSxcbiAgICAgICAgdG90YWxQcmljZTogcGFyc2VGbG9hdCgocHJvZHVjdFByaWNlICogcXR5KS50b0ZpeGVkKDIpKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./function.js\n");

/***/ })

})