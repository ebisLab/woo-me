webpackHotUpdate_N_E("pages/index",{

/***/ "./function.js":
/*!*********************!*\
  !*** ./function.js ***!
  \*********************/
/*! exports provided: getFloatval, addFirstProduct, createNewProduct, updateCart, getUpdatedProducts, isProductInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFloatval\", function() { return getFloatval; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFirstProduct\", function() { return addFirstProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewProduct\", function() { return createNewProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCart\", function() { return updateCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUpdatedProducts\", function() { return getUpdatedProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isProductInCart\", function() { return isProductInCart; });\nvar getFloatval = function getFloatval(string) {\n  console.log(\"string\", string);\n  var floatValue = string.match(/[+-]?\\d+(\\.\\d+)?/g)[0];\n  return null !== floatValue ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';\n};\nvar addFirstProduct = function addFirstProduct(product) {\n  console.log('heey from inside the addproduct');\n  var productPrice = getFloatval(product.price); //if no item in the cart, create an n empty array and pushe the item\n\n  var newCart = {\n    products: [],\n    totalProductsCount: 1,\n    totalProductsPrice: productPrice\n  };\n  var newProduct = createNewProduct(product, productPrice, 1); //qty is 1 b/c its the first time we're creating it\n\n  newCart.products.push(newProduct);\n  localStorage.setItem('woo-next-cart', JSON.stringify(newCart));\n  return newCart;\n}; //CREATE A NEW PRODUCT OBJECT\n\nvar createNewProduct = function createNewProduct(product, productPrice, qty) {\n  return {\n    productId: product.productId,\n    image: product.image,\n    name: product.name,\n    price: productPrice,\n    qty: qty,\n    totalPrice: parseFloat((productPrice * qty).toFixed(2))\n  };\n};\nvar updateCart = function updateCart(existingCart, product, qtyToBeAdded) {\n  var newQty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);\n};\nvar getUpdatedProducts = function getUpdatedProducts(existingProductsInCart, product, qtyToBeAdded) {\n  var newQty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  //does product already exist in cart\n  var productExistsIndex = isProductInCart(existingProductsInCart, product.productId);\n};\nvar isProductInCart = function isProductInCart(existingProductsInCart, productId) {\n  console.log(\"hee hee\", existingProductsInCart, productId);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnVuY3Rpb24uanM/NzQ5NyJdLCJuYW1lcyI6WyJnZXRGbG9hdHZhbCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJmbG9hdFZhbHVlIiwibWF0Y2giLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImFkZEZpcnN0UHJvZHVjdCIsInByb2R1Y3QiLCJwcm9kdWN0UHJpY2UiLCJwcmljZSIsIm5ld0NhcnQiLCJwcm9kdWN0cyIsInRvdGFsUHJvZHVjdHNDb3VudCIsInRvdGFsUHJvZHVjdHNQcmljZSIsIm5ld1Byb2R1Y3QiLCJjcmVhdGVOZXdQcm9kdWN0IiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicXR5IiwicHJvZHVjdElkIiwiaW1hZ2UiLCJuYW1lIiwidG90YWxQcmljZSIsInVwZGF0ZUNhcnQiLCJleGlzdGluZ0NhcnQiLCJxdHlUb0JlQWRkZWQiLCJuZXdRdHkiLCJ1cGRhdGVkUHJvZHVjdHMiLCJnZXRVcGRhdGVkUHJvZHVjdHMiLCJleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0IiwicHJvZHVjdEV4aXN0c0luZGV4IiwiaXNQcm9kdWN0SW5DYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFdBQVcsR0FBRSxTQUFiQSxXQUFhLENBQUNDLE1BQUQsRUFBVTtBQUNoQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7QUFFQSxNQUFJRyxVQUFVLEdBQUdILE1BQU0sQ0FBQ0ksS0FBUCxDQUFjLG1CQUFkLEVBQW9DLENBQXBDLENBQWpCO0FBQ0gsU0FBUSxTQUFTRCxVQUFWLEdBQXVCRSxVQUFVLENBQUVBLFVBQVUsQ0FBRUYsVUFBRixDQUFWLENBQXlCRyxPQUF6QixDQUFrQyxDQUFsQyxDQUFGLENBQWpDLEdBQTZFLEVBQXBGO0FBQ0EsQ0FMTTtBQU9BLElBQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsQ0FBQ0MsT0FBRCxFQUFXO0FBQ3BDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBLE1BQUlPLFlBQVksR0FBR1YsV0FBVyxDQUFDUyxPQUFPLENBQUNFLEtBQVQsQ0FBOUIsQ0FGb0MsQ0FLcEM7O0FBRUEsTUFBSUMsT0FBTyxHQUFFO0FBQ1RDLFlBQVEsRUFBQyxFQURBO0FBRVRDLHNCQUFrQixFQUFDLENBRlY7QUFHVEMsc0JBQWtCLEVBQUNMO0FBSFYsR0FBYjtBQU1BLE1BQU1NLFVBQVUsR0FBR0MsZ0JBQWdCLENBQUNSLE9BQUQsRUFBVUMsWUFBVixFQUF3QixDQUF4QixDQUFuQyxDQWJvQyxDQWEyQjs7QUFDbkVFLFNBQU8sQ0FBQ0MsUUFBUixDQUFpQkssSUFBakIsQ0FBc0JGLFVBQXRCO0FBQ0FHLGNBQVksQ0FBQ0MsT0FBYixDQUFxQixlQUFyQixFQUFzQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVWLE9BQWYsQ0FBdEM7QUFDQSxTQUFPQSxPQUFQO0FBQ0MsQ0FqQk0sQyxDQW1CUDs7QUFHTyxJQUFNSyxnQkFBZ0IsR0FBRSxTQUFsQkEsZ0JBQWtCLENBQUNSLE9BQUQsRUFBVUMsWUFBVixFQUF3QmEsR0FBeEIsRUFBOEI7QUFDekQsU0FBTTtBQUNGQyxhQUFTLEVBQUVmLE9BQU8sQ0FBQ2UsU0FEakI7QUFFRkMsU0FBSyxFQUFDaEIsT0FBTyxDQUFDZ0IsS0FGWjtBQUdGQyxRQUFJLEVBQUNqQixPQUFPLENBQUNpQixJQUhYO0FBSUZmLFNBQUssRUFBQ0QsWUFKSjtBQUtGYSxPQUFHLEVBQUVBLEdBTEg7QUFNRkksY0FBVSxFQUFFckIsVUFBVSxDQUFDLENBQUNJLFlBQVksR0FBR2EsR0FBaEIsRUFBcUJoQixPQUFyQixDQUE2QixDQUE3QixDQUFEO0FBTnBCLEdBQU47QUFRSCxDQVRNO0FBV0EsSUFBTXFCLFVBQVUsR0FBRSxTQUFaQSxVQUFZLENBQUNDLFlBQUQsRUFBZXBCLE9BQWYsRUFBd0JxQixZQUF4QixFQUFxRDtBQUFBLE1BQWZDLE1BQWUsdUVBQVIsS0FBUTtBQUMxRSxNQUFNQyxlQUFlLEdBQUdDLGtCQUFrQixDQUFDSixZQUFZLENBQUNoQixRQUFkLEVBQXdCSixPQUF4QixFQUFpQ3FCLFlBQWpDLEVBQStDQyxNQUEvQyxDQUExQztBQUNILENBRk07QUFJQSxJQUFNRSxrQkFBa0IsR0FBRSxTQUFwQkEsa0JBQW9CLENBQUNDLHNCQUFELEVBQXlCekIsT0FBekIsRUFBa0NxQixZQUFsQyxFQUErRDtBQUFBLE1BQWZDLE1BQWUsdUVBQVIsS0FBUTtBQUM1RjtBQUNBLE1BQU1JLGtCQUFrQixHQUFHQyxlQUFlLENBQUNGLHNCQUFELEVBQXlCekIsT0FBTyxDQUFDZSxTQUFqQyxDQUExQztBQUVILENBSk07QUFNQSxJQUFNWSxlQUFlLEdBQUMsU0FBaEJBLGVBQWdCLENBQUNGLHNCQUFELEVBQXlCVixTQUF6QixFQUFxQztBQUM5RHRCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIrQixzQkFBdkIsRUFBK0NWLFNBQS9DO0FBQ0gsQ0FGTSIsImZpbGUiOiIuL2Z1bmN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEZsb2F0dmFsID0oc3RyaW5nKT0+e1xuICAgIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsIHN0cmluZylcblxuICAgIGxldCBmbG9hdFZhbHVlID0gc3RyaW5nLm1hdGNoKCAvWystXT9cXGQrKFxcLlxcZCspPy9nIClbMF07XG5cdHJldHVybiAobnVsbCAhPT0gZmxvYXRWYWx1ZSk/IHBhcnNlRmxvYXQoIHBhcnNlRmxvYXQoIGZsb2F0VmFsdWUgKS50b0ZpeGVkKCAyICkgKSA6ICcnO1xufVxuXG5leHBvcnQgY29uc3QgYWRkRmlyc3RQcm9kdWN0PShwcm9kdWN0KT0+e1xuICAgIGNvbnNvbGUubG9nKCdoZWV5IGZyb20gaW5zaWRlIHRoZSBhZGRwcm9kdWN0JylcbiAgICBsZXQgcHJvZHVjdFByaWNlID0gZ2V0RmxvYXR2YWwocHJvZHVjdC5wcmljZSlcblxuXG4gICAgLy9pZiBubyBpdGVtIGluIHRoZSBjYXJ0LCBjcmVhdGUgYW4gbiBlbXB0eSBhcnJheSBhbmQgcHVzaGUgdGhlIGl0ZW1cblxuICAgIGxldCBuZXdDYXJ0ID17XG4gICAgICAgIHByb2R1Y3RzOltdLFxuICAgICAgICB0b3RhbFByb2R1Y3RzQ291bnQ6MSwgXG4gICAgICAgIHRvdGFsUHJvZHVjdHNQcmljZTpwcm9kdWN0UHJpY2VcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9kdWN0ID0gY3JlYXRlTmV3UHJvZHVjdChwcm9kdWN0LCBwcm9kdWN0UHJpY2UsIDEpOyAvL3F0eSBpcyAxIGIvYyBpdHMgdGhlIGZpcnN0IHRpbWUgd2UncmUgY3JlYXRpbmcgaXRcbm5ld0NhcnQucHJvZHVjdHMucHVzaChuZXdQcm9kdWN0KTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3b28tbmV4dC1jYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpO1xucmV0dXJuIG5ld0NhcnRcbn1cblxuLy9DUkVBVEUgQSBORVcgUFJPRFVDVCBPQkpFQ1RcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3UHJvZHVjdCA9KHByb2R1Y3QsIHByb2R1Y3RQcmljZSwgcXR5KT0+e1xuICAgIHJldHVybntcbiAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LnByb2R1Y3RJZCxcbiAgICAgICAgaW1hZ2U6cHJvZHVjdC5pbWFnZSxcbiAgICAgICAgbmFtZTpwcm9kdWN0Lm5hbWUsXG4gICAgICAgIHByaWNlOnByb2R1Y3RQcmljZSxcbiAgICAgICAgcXR5OiBxdHksXG4gICAgICAgIHRvdGFsUHJpY2U6IHBhcnNlRmxvYXQoKHByb2R1Y3RQcmljZSAqIHF0eSkudG9GaXhlZCgyKSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJ0PSAoZXhpc3RpbmdDYXJ0LCBwcm9kdWN0LCBxdHlUb0JlQWRkZWQsIG5ld1F0eT1mYWxzZSk9PntcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBnZXRVcGRhdGVkUHJvZHVjdHMoZXhpc3RpbmdDYXJ0LnByb2R1Y3RzLCBwcm9kdWN0LCBxdHlUb0JlQWRkZWQsIG5ld1F0eSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVcGRhdGVkUHJvZHVjdHMgPShleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0LCBxdHlUb0JlQWRkZWQsIG5ld1F0eT1mYWxzZSk9PntcbiAgICAvL2RvZXMgcHJvZHVjdCBhbHJlYWR5IGV4aXN0IGluIGNhcnRcbiAgICBjb25zdCBwcm9kdWN0RXhpc3RzSW5kZXggPSBpc1Byb2R1Y3RJbkNhcnQoZXhpc3RpbmdQcm9kdWN0c0luQ2FydCwgcHJvZHVjdC5wcm9kdWN0SWQpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdEluQ2FydD0oZXhpc3RpbmdQcm9kdWN0c0luQ2FydCwgcHJvZHVjdElkKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiaGVlIGhlZVwiLCBleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0SWQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./function.js\n");

/***/ })

})