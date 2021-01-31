webpackHotUpdate_N_E("pages/product",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ApolloClient */ \"./components/ApolloClient.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-less/pages/product.js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\" query Product($id: ID!){\\n        product(id: $id, idType: DATABASE_ID) {\\n            id\\n            productId\\n            averageRating\\n            slug\\n            description\\n            name\\n            image{\\n                uri\\n                title\\n                srcSet\\n                sourceUrl\\n            }\\n            ... on SimpleProduct {\\n                id\\n                name\\n                price\\n              }\\n        }\\n    }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Product = function Product(props) {\n  console.log(\"PROPS\", props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    children: \"product\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n}; //getInitialProps function gets excecuted in both client side and server side, first in server side\n\n\n_c = Product;\n\nProduct.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var slug, id, PRODUCT_QUERY, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            //context comes from server side, bring it to the client side\n            slug = context.query.slug;\n            id = slug ? parseInt(slug.split('-').pop()) : context.query.id; //parseInt(slug.split('-')) used to split words or numbers that are separeted with space or any symbols like \"-\"\n\n            console.log(\"trying to get initial props\"); //Graphql Query\n\n            PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());\n            _context.next = 6;\n            return _components_ApolloClient__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query({\n              query: PRODUCT_QUERY,\n              variables: {\n                id: id\n              }\n            });\n\n          case 6:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              product: res.data.product\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"withRouter\"])(Product));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Product\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC5qcz9iYTFjIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInF1ZXJ5IiwiaWQiLCJwYXJzZUludCIsInNwbGl0IiwicG9wIiwiUFJPRFVDVF9RVUVSWSIsImdxbCIsImNsaWVudCIsInZhcmlhYmxlcyIsInJlcyIsInByb2R1Y3QiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUztBQUNyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsS0FBckI7QUFDQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FURCxDLENBV0E7OztLQVhNRCxPOztBQVlOQSxPQUFPLENBQUNJLGVBQVI7QUFBQSw4TEFBMEIsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1CO0FBQzdCQyxnQkFEVSxHQUNIRCxPQURHLENBQ2pCRSxLQURpQixDQUNWRCxJQURVO0FBRWhCRSxjQUZnQixHQUViRixJQUFJLEdBQUVHLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDSSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsR0FBaEIsRUFBRCxDQUFWLEdBQW1DTixPQUFPLENBQUNFLEtBQVIsQ0FBY0MsRUFGeEMsRUFFMkM7O0FBRWpFTixtQkFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFKc0IsQ0FLdEI7O0FBRU1TLHlCQVBnQixHQU9BQyxrREFQQTtBQUFBO0FBQUEsbUJBOEJMQyxnRUFBTSxDQUFDUCxLQUFQLENBQWE7QUFDMUJBLG1CQUFLLEVBQUVLLGFBRG1CO0FBRTFCRyx1QkFBUyxFQUFDO0FBQUNQLGtCQUFFLEVBQUZBO0FBQUQ7QUFGZ0IsYUFBYixDQTlCSzs7QUFBQTtBQThCaEJRLGVBOUJnQjtBQUFBLDZDQW1DZjtBQUNIQyxxQkFBTyxFQUFFRCxHQUFHLENBQUNFLElBQUosQ0FBU0Q7QUFEZixhQW5DZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3Q2UscUVBQUFFLDhEQUFVLENBQUNuQixPQUFELENBQXpCIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50J1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmNvbnN0IFByb2R1Y3QgPSAocHJvcHMpPT57XG4gICAgY29uc29sZS5sb2coXCJQUk9QU1wiLCBwcm9wcylcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgICB7LyogcXVlcnkgKi99XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vL2dldEluaXRpYWxQcm9wcyBmdW5jdGlvbiBnZXRzIGV4Y2VjdXRlZCBpbiBib3RoIGNsaWVudCBzaWRlIGFuZCBzZXJ2ZXIgc2lkZSwgZmlyc3QgaW4gc2VydmVyIHNpZGVcblByb2R1Y3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpPT57IC8vY29udGV4dCBjb21lcyBmcm9tIHNlcnZlciBzaWRlLCBicmluZyBpdCB0byB0aGUgY2xpZW50IHNpZGVcbiAgICBsZXQge3F1ZXJ5OntzbHVnfX09Y29udGV4dDtcbiAgICBjb25zdCBpZD1zbHVnPyBwYXJzZUludChzbHVnLnNwbGl0KCctJykucG9wKCkpOiBjb250ZXh0LnF1ZXJ5LmlkIC8vcGFyc2VJbnQoc2x1Zy5zcGxpdCgnLScpKSB1c2VkIHRvIHNwbGl0IHdvcmRzIG9yIG51bWJlcnMgdGhhdCBhcmUgc2VwYXJldGVkIHdpdGggc3BhY2Ugb3IgYW55IHN5bWJvbHMgbGlrZSBcIi1cIlxuXG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmcgdG8gZ2V0IGluaXRpYWwgcHJvcHNcIilcbiAgICAvL0dyYXBocWwgUXVlcnlcblxuICAgIGNvbnN0IFBST0RVQ1RfUVVFUlkgPSBncWxgIHF1ZXJ5IFByb2R1Y3QoJGlkOiBJRCEpe1xuICAgICAgICBwcm9kdWN0KGlkOiAkaWQsIGlkVHlwZTogREFUQUJBU0VfSUQpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBwcm9kdWN0SWRcbiAgICAgICAgICAgIGF2ZXJhZ2VSYXRpbmdcbiAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBpbWFnZXtcbiAgICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIHNyY1NldFxuICAgICAgICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIFNpbXBsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmVzPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeTogUFJPRFVDVF9RVUVSWSxcbiAgICAgICAgdmFyaWFibGVzOntpZH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2R1Y3Q6IHJlcy5kYXRhLnByb2R1Y3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvZHVjdCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product.js\n");

/***/ })

})