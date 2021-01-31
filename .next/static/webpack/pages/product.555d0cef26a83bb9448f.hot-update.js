webpackHotUpdate_N_E("pages/product",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ApolloClient */ \"./components/ApolloClient.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-less/pages/product.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Product = function Product(props) {\n  console.log(\"PROPS\", props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: \"product\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n}; //getInitialProps function gets excecuted in both client side and server side, first in server side\n\n\n_c = Product;\n\nProduct.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var slug, id;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            //context comes from server side, bring it to the client side\n            slug = context.query.slug;\n            id = slug ? parseInt(slug.split('-').pop()) : context.query.id; //parseInt(slug.split('-')) used to split words or numbers that are separeted with space or any symbols like \"-\"\n\n            console.log(\"trying to get initial props\"); //Graphql Query\n            // const PRODUCT_QUERY = gql`query Product($id: Int !){\n            //     productBy( productId:$id )D{\n            //         id\n            //         productId\n            //         averageRating\n            //         slug\n            //         description\n            //         image {\n            //             uri\n            //             title\n            //             srcSet\n            //             sourceUrl\n            //         }\n            //         name\n            //         price\n            //     }\n            // }`;\n            //     const PRODUCT_QUERY = gql` query Product($databaseId: ID!){\n            //         product(id: $databaseId, idType: DATABASE_ID) {\n            //             id\n            //             databaseId\n            //             averageRating\n            //             slug\n            //             description\n            //             purchasable\n            //             name\n            //         }\n            //     }\n            //     `;\n            //     const res= await client.query({\n            //         query: PRODUCT_QUERY,\n            //         variables:{\n            //             databaseId: id\n            // }\n            //     });\n\n            return _context.abrupt(\"return\", {\n              product: \"hello there\"\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Product));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Product\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC5qcz9iYTFjIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInF1ZXJ5IiwiaWQiLCJwYXJzZUludCIsInNwbGl0IiwicG9wIiwicHJvZHVjdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVM7QUFDckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCO0FBQ0Esc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBVEQsQyxDQVdBOzs7S0FYTUQsTzs7QUFZTkEsT0FBTyxDQUFDSSxlQUFSO0FBQUEsOExBQTBCLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQjtBQUM3QkMsZ0JBRFUsR0FDSEQsT0FERyxDQUNqQkUsS0FEaUIsQ0FDVkQsSUFEVTtBQUVoQkUsY0FGZ0IsR0FFYkYsSUFBSSxHQUFFRyxRQUFRLENBQUNILElBQUksQ0FBQ0ksS0FBTCxDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQUQsQ0FBVixHQUFtQ04sT0FBTyxDQUFDRSxLQUFSLENBQWNDLEVBRnhDLEVBRTJDOztBQUVqRU4sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBSnNCLENBS3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExQzBCLDZDQTRDZjtBQUNIUyxxQkFBTyxFQUFDO0FBREwsYUE1Q2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaURlLHFFQUFBQyw4REFBVSxDQUFDYixPQUFELENBQXpCIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50J1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmNvbnN0IFByb2R1Y3QgPSAocHJvcHMpPT57XG4gICAgY29uc29sZS5sb2coXCJQUk9QU1wiLCBwcm9wcylcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgICB7LyogcXVlcnkgKi99XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vL2dldEluaXRpYWxQcm9wcyBmdW5jdGlvbiBnZXRzIGV4Y2VjdXRlZCBpbiBib3RoIGNsaWVudCBzaWRlIGFuZCBzZXJ2ZXIgc2lkZSwgZmlyc3QgaW4gc2VydmVyIHNpZGVcblByb2R1Y3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpPT57IC8vY29udGV4dCBjb21lcyBmcm9tIHNlcnZlciBzaWRlLCBicmluZyBpdCB0byB0aGUgY2xpZW50IHNpZGVcbiAgICBsZXQge3F1ZXJ5OntzbHVnfX09Y29udGV4dDtcbiAgICBjb25zdCBpZD1zbHVnPyBwYXJzZUludChzbHVnLnNwbGl0KCctJykucG9wKCkpOiBjb250ZXh0LnF1ZXJ5LmlkIC8vcGFyc2VJbnQoc2x1Zy5zcGxpdCgnLScpKSB1c2VkIHRvIHNwbGl0IHdvcmRzIG9yIG51bWJlcnMgdGhhdCBhcmUgc2VwYXJldGVkIHdpdGggc3BhY2Ugb3IgYW55IHN5bWJvbHMgbGlrZSBcIi1cIlxuXG4gICAgY29uc29sZS5sb2coXCJ0cnlpbmcgdG8gZ2V0IGluaXRpYWwgcHJvcHNcIilcbiAgICAvL0dyYXBocWwgUXVlcnlcbiAgICAvLyBjb25zdCBQUk9EVUNUX1FVRVJZID0gZ3FsYHF1ZXJ5IFByb2R1Y3QoJGlkOiBJbnQgISl7XG4gICAgLy8gICAgIHByb2R1Y3RCeSggcHJvZHVjdElkOiRpZCApRHtcbiAgICAvLyAgICAgICAgIGlkXG4gICAgLy8gICAgICAgICBwcm9kdWN0SWRcbiAgICAvLyAgICAgICAgIGF2ZXJhZ2VSYXRpbmdcbiAgICAvLyAgICAgICAgIHNsdWdcbiAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgLy8gICAgICAgICBpbWFnZSB7XG4gICAgLy8gICAgICAgICAgICAgdXJpXG4gICAgLy8gICAgICAgICAgICAgdGl0bGVcbiAgICAvLyAgICAgICAgICAgICBzcmNTZXRcbiAgICAvLyAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIG5hbWVcbiAgICAvLyAgICAgICAgIHByaWNlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9YDtcblxuLy8gICAgIGNvbnN0IFBST0RVQ1RfUVVFUlkgPSBncWxgIHF1ZXJ5IFByb2R1Y3QoJGRhdGFiYXNlSWQ6IElEISl7XG4vLyAgICAgICAgIHByb2R1Y3QoaWQ6ICRkYXRhYmFzZUlkLCBpZFR5cGU6IERBVEFCQVNFX0lEKSB7XG4vLyAgICAgICAgICAgICBpZFxuLy8gICAgICAgICAgICAgZGF0YWJhc2VJZFxuLy8gICAgICAgICAgICAgYXZlcmFnZVJhdGluZ1xuLy8gICAgICAgICAgICAgc2x1Z1xuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb25cbi8vICAgICAgICAgICAgIHB1cmNoYXNhYmxlXG4vLyAgICAgICAgICAgICBuYW1lXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgYDtcblxuLy8gICAgIGNvbnN0IHJlcz0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbi8vICAgICAgICAgcXVlcnk6IFBST0RVQ1RfUVVFUlksXG4vLyAgICAgICAgIHZhcmlhYmxlczp7XG4vLyAgICAgICAgICAgICBkYXRhYmFzZUlkOiBpZFxuLy8gfVxuLy8gICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZHVjdDpcImhlbGxvIHRoZXJlXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvZHVjdCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product.js\n");

/***/ })

})