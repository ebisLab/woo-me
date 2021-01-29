module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client-config.js":
/*!**************************!*\
  !*** ./client-config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst clientConfig = {\n  siteUrl: 'http://localhost:3000',\n  graphqlUrl: 'http://woo.ebislab.com/graphql' // graphqlUrl: 'https://48p1r2roz4.sse.codesandbox.io/'\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (clientConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQtY29uZmlnLmpzP2UzNmEiXSwibmFtZXMiOlsiY2xpZW50Q29uZmlnIiwic2l0ZVVybCIsImdyYXBocWxVcmwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsWUFBWSxHQUFFO0FBQ2hCQyxTQUFPLEVBQUUsdUJBRE87QUFFaEJDLFlBQVUsRUFBRSxnQ0FGSSxDQUdoQjs7QUFIZ0IsQ0FBcEI7QUFPZUYsMkVBQWYiLCJmaWxlIjoiLi9jbGllbnQtY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xpZW50Q29uZmlnID17XG4gICAgc2l0ZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgZ3JhcGhxbFVybDogJ2h0dHA6Ly93b28uZWJpc2xhYi5jb20vZ3JhcGhxbCcsXG4gICAgLy8gZ3JhcGhxbFVybDogJ2h0dHBzOi8vNDhwMXIycm96NC5zc2UuY29kZXNhbmRib3guaW8vJ1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudENvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client-config.js\n");

/***/ }),

/***/ "./components/ApolloClient.js":
/*!************************************!*\
  !*** ./components/ApolloClient.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../client-config */ \"./client-config.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n //error catching system\n\nconst errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__[\"onError\"])(({\n  graphqlErrors,\n  networkError\n}) => {\n  if (graphqlErrors) {\n    graphqlErrors.map(({\n      message,\n      location,\n      path\n    }) => {\n      alert(`Graphql errors here--> ${message}`);\n    });\n  }\n});\nconst link = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"from\"])([errorLink, new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n  uri: _client_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].graphqlUrl\n})]);\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"](),\n  link: link\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fwb2xsb0NsaWVudC5qcz9jNDQ3Il0sIm5hbWVzIjpbImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaHFsRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibWFwIiwibWVzc2FnZSIsImxvY2F0aW9uIiwicGF0aCIsImFsZXJ0IiwibGluayIsImZyb20iLCJIdHRwTGluayIsInVyaSIsImNsaWVudENvbmZpZyIsImdyYXBocWxVcmwiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Q0FJQTs7QUFDQSxNQUFNQSxTQUFTLEdBQUdDLHlFQUFPLENBQUMsQ0FBQztBQUFDQyxlQUFEO0FBQWdCQztBQUFoQixDQUFELEtBQWlDO0FBQ3ZELE1BQUdELGFBQUgsRUFBaUI7QUFDYkEsaUJBQWEsQ0FBQ0UsR0FBZCxDQUFrQixDQUFDO0FBQUNDLGFBQUQ7QUFBVUMsY0FBVjtBQUFvQkM7QUFBcEIsS0FBRCxLQUE2QjtBQUMzQ0MsV0FBSyxDQUFFLDBCQUF5QkgsT0FBUSxFQUFuQyxDQUFMO0FBQ0gsS0FGRDtBQUdIO0FBQ0osQ0FOd0IsQ0FBekI7QUFTQSxNQUFNSSxJQUFJLEdBQUdDLDJEQUFJLENBQUMsQ0FDZFYsU0FEYyxFQUVkLElBQUlXLHVEQUFKLENBQWE7QUFBQ0MsS0FBRyxFQUFFQyxzREFBWSxDQUFDQztBQUFuQixDQUFiLENBRmMsQ0FBRCxDQUFqQjtBQUlBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUM1QkMsT0FBSyxFQUFFLElBQUlDLDREQUFKLEVBRHFCO0FBRTVCVCxNQUFJLEVBQUNBO0FBRnVCLENBQWpCLENBQWY7QUFLZU0scUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fwb2xsb0NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBjbGllbnRDb25maWcgZnJvbSAnLi8uLi9jbGllbnQtY29uZmlnJ1xuXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEh0dHBMaW5rLCBmcm9tIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmltcG9ydCB7RXJyb3JMaW5rLCBvbkVycm9yfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yJ1xuXG4vL2Vycm9yIGNhdGNoaW5nIHN5c3RlbVxuY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoe2dyYXBocWxFcnJvcnMsIG5ldHdvcmtFcnJvcn0pPT57XG4gICAgaWYoZ3JhcGhxbEVycm9ycyl7XG4gICAgICAgIGdyYXBocWxFcnJvcnMubWFwKCh7bWVzc2FnZSwgbG9jYXRpb24sIHBhdGh9KT0+e1xuICAgICAgICAgICAgYWxlcnQoYEdyYXBocWwgZXJyb3JzIGhlcmUtLT4gJHttZXNzYWdlfWApXG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuXG5jb25zdCBsaW5rID0gZnJvbShbXG4gICAgZXJyb3JMaW5rLFxuICAgIG5ldyBIdHRwTGluayh7dXJpOiBjbGllbnRDb25maWcuZ3JhcGhxbFVybH0pXG5dKVxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgbGluazpsaW5rLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ApolloClient.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ \"./components/Navigation.js\");\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-next/components/Header.js\";\n\n\nconst Header = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFFLE1BQUk7QUFDbEIsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0MsQ0FORDs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcbmNvbnN0IEhlYWRlciA9KCk9PntcbnJldHVybihcbiAgICA8ZGl2PlxuICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgPC9kaXY+XG4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-next/components/Layout.js\";\n\n\n\nconst Layout = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"WooCommerce React Theme\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://bootswatch.com/4/flatly/bootstrap.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined), props.children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLEtBQUQsSUFBUztBQUNuQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosRUFPS0EsS0FBSyxDQUFDQyxRQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBV0gsQ0FaRDs7QUFjZUYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmNvbnN0IExheW91dCA9KHByb3BzKT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Xb29Db21tZXJjZSBSZWFjdCBUaGVtZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZmxhdGx5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxuXG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-next/components/Navigation.js\";\n\nconst Navigation = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-dark bg-primary\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: \"navbar-brand\",\n      href: \"#\",\n      children: \"Navbar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 1\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"collapse navbar-collapse\",\n      id: \"navbarColor01\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"navbar-nav mr-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"nav-item active\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"nav-link\",\n            href: \"#\",\n            children: [\"Home\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"sr-only\",\n              children: \"(current)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 9,\n              columnNumber: 9\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 8,\n            columnNumber: 7\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"nav-item\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"nav-link\",\n            href: \"#\",\n            children: \"Features\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 7\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"nav-item\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"nav-link\",\n            href: \"#\",\n            children: \"Pricing\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 7\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"nav-item\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"nav-link\",\n            href: \"#\",\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 7\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 5\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"nav-item dropdown\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"nav-link dropdown-toggle\",\n            \"data-toggle\": \"dropdown\",\n            href: \"#\",\n            role: \"button\",\n            \"aria-haspopup\": \"true\",\n            \"aria-expanded\": \"false\",\n            children: \"Dropdown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 7\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"dropdown-menu\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"dropdown-item\",\n              href: \"#\",\n              children: \"Action\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"dropdown-item\",\n              href: \"#\",\n              children: \"Another action\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"dropdown-item\",\n              href: \"#\",\n              children: \"Something else here\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"dropdown-divider\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 9\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"dropdown-item\",\n              href: \"#\",\n              children: \"Separated link\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 9\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 7\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 5\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 3\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 1\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 1\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb24uanM/MTQ4NiJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUUsTUFBSTtBQUN0QixzQkFDQTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBLDRCQUNBO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBNEIsVUFBSSxFQUFDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBMEMsUUFBRSxFQUFDLGVBQTdDO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLG9CQUFkO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLFVBQWI7QUFBd0IsZ0JBQUksRUFBQyxHQUE3QjtBQUFBLDRDQUNFO0FBQU0sdUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsVUFBYjtBQUF3QixnQkFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQVNFO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLFVBQWI7QUFBd0IsZ0JBQUksRUFBQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFZRTtBQUFJLG1CQUFTLEVBQUMsVUFBZDtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyxVQUFiO0FBQXdCLGdCQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGLGVBZUU7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLDBCQUFiO0FBQXdDLDJCQUFZLFVBQXBEO0FBQStELGdCQUFJLEVBQUMsR0FBcEU7QUFBd0UsZ0JBQUksRUFBQyxRQUE3RTtBQUFzRiw2QkFBYyxNQUFwRztBQUEyRyw2QkFBYyxPQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLGVBQWI7QUFBNkIsa0JBQUksRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUcsdUJBQVMsRUFBQyxlQUFiO0FBQTZCLGtCQUFJLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFHLHVCQUFTLEVBQUMsZUFBYjtBQUE2QixrQkFBSSxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBSUU7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUcsdUJBQVMsRUFBQyxlQUFiO0FBQTZCLGtCQUFJLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBO0FBb0NDLENBckNEOztBQXVDZUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOYXZpZ2F0aW9uID0oKT0+e1xucmV0dXJuIChcbjxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiPlxuPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5OYXZiYXI8L2E+XG48ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyQ29sb3IwMVwiPlxuICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhvbWVcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkZlYXR1cmVzPC9hPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+UHJpY2luZzwvYT5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkFib3V0PC9hPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5Ecm9wZG93bjwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG48L2Rpdj5cblxuPC9uYXY+XG4pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-next/components/Products.js\";\n\nconst Products = props => {\n  const {\n    products\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"card mb-3 mr-4\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"card-header text-center\",\n      children: products.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 3\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: products.image.sourceUrl,\n      alt: products.name //   style={{height:\"200px\", width:\"100px\", display:\"block\"}}\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n        className: \"card-subtitle text-muted\",\n        children: [\"$\", products.price]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: \"btn btn-success text-center\",\n          children: \"View\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 5\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzPzcxNDAiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9wcyIsInByb2R1Y3RzIiwibmFtZSIsImltYWdlIiwic291cmNlVXJsIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFFBQVEsR0FBSUMsS0FBRCxJQUFTO0FBQ3RCLFFBQU07QUFBQ0M7QUFBRCxNQUFXRCxLQUFqQjtBQUNBLHNCQUVJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ047QUFBSSxlQUFTLEVBQUMseUJBQWQ7QUFBQSxnQkFBeUNDLFFBQVEsQ0FBQ0M7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETSxlQUVOO0FBQUssU0FBRyxFQUFFRCxRQUFRLENBQUNFLEtBQVQsQ0FBZUMsU0FBekI7QUFBb0MsU0FBRyxFQUFFSCxRQUFRLENBQUNDLElBQWxELENBQ0Y7O0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGTSxlQUtOO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsMEJBQWQ7QUFBQSx3QkFBMkNELFFBQVEsQ0FBQ0ksS0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSwrQkFDQTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsNkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFzQkgsQ0F4QkQ7O0FBeUJlTix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcm9kdWN0cyA9IChwcm9wcyk9PntcbiAgICBjb25zdCB7cHJvZHVjdHN9PXByb3BzXG4gICAgcmV0dXJuIChcbiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zIG1yLTRcIj5cbiAgPGgzIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+e3Byb2R1Y3RzLm5hbWV9PC9oMz5cbiAgPGltZyBzcmM9e3Byb2R1Y3RzLmltYWdlLnNvdXJjZVVybH0gYWx0PXtwcm9kdWN0cy5uYW1lfSBcbi8vICAgc3R5bGU9e3toZWlnaHQ6XCIyMDBweFwiLCB3aWR0aDpcIjEwMHB4XCIsIGRpc3BsYXk6XCJibG9ja1wifX1cbiAgLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+JHtwcm9kdWN0cy5wcmljZX08L2g2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgdGV4dC1jZW50ZXJcIj5WaWV3PC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuXG5cbjwvZGl2PlxuXG4gICAgKVxuXG59XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/ApolloClient */ \"./components/ApolloClient.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Products */ \"./components/Products.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/Eunice/WebDev/Fellowship/woo-next/pages/index.js\";\n // import clientConfig from '../client-config'\n\n\n\n\n //parses graphql query string into abstract syntax\n// const PRODUCTS_QUERY = gql`query{\n//     query MyQuery {\n//         users {\n//             edges {\n//               node {\n//                 id\n//               }\n//             }\n//           }\n//       }          \n// }`;\n\nconst PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`query{\n    products(first: 10) {\n        edges {\n          node {\n            id\n            name\n            productId\n            averageRating\n            slug\n            description\n            image {\n              uri\n              title\n              srcSet\n              sourceUrl\n            }\n            link\n            ... on SimpleProduct {\n              price\n            }\n          }\n        }\n      }      \n}`;\n\nconst Index = props => {\n  console.warn(props);\n  const {\n    products\n  } = props;\n  console.log(\"productss-\", products);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"product-container\",\n        children: products.length ? products.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Products__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          products: item.node\n        }, item.node.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 58\n        }, undefined)) : \"nagh\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 9\n  }, undefined);\n};\n\nIndex.getInitialProps = async () => {\n  //isomorphic unfetch\n  // const res = await fetch(`${clientConfig.siteUrl}/getProducts`);\n  // const productsData = await res.json();\n  // return {\n  //     products: productsData\n  // }\n  const res = await _components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query({\n    query: PRODUCTS_QUERY\n  });\n  console.log(\"res->\");\n  return {\n    products: res.data.products.edges\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlBST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiSW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwicHJvZHVjdHMiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwibm9kZSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiY2xpZW50IiwicXVlcnkiLCJkYXRhIiwiZWRnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRUE7QUFDQTtDQUM4QjtBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBR0Msa0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQXZCQTs7QUEwQkEsTUFBTUMsS0FBSyxHQUFFQyxLQUFELElBQVM7QUFDakJDLFNBQU8sQ0FBQ0MsSUFBUixDQUFhRixLQUFiO0FBQ0EsUUFBTTtBQUFDRztBQUFELE1BQVdILEtBQWpCO0FBQ0FDLFNBQU8sQ0FBQ0csR0FBUixDQUFZLFlBQVosRUFBMEJELFFBQTFCO0FBRUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywwREFBRDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtCQUNLQSxRQUFRLENBQUNFLE1BQVQsR0FBaUJGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhQyxJQUFJLGlCQUFFLHFFQUFDLDREQUFEO0FBQTZCLGtCQUFRLEVBQUVBLElBQUksQ0FBQ0M7QUFBNUMsV0FBZUQsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW5CLENBQWpCLEdBQTBGO0FBRC9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZUgsQ0FwQkQ7O0FBc0JBVixLQUFLLENBQUNXLGVBQU4sR0FBd0IsWUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsZ0VBQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQUNBLFNBQUssRUFBQ2hCO0FBQVAsR0FBYixDQUFsQjtBQUNBSSxTQUFPLENBQUNHLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsU0FBTztBQUNIRCxZQUFRLEVBQUNRLEdBQUcsQ0FBQ0csSUFBSixDQUFTWCxRQUFULENBQWtCWTtBQUR4QixHQUFQO0FBS0gsQ0FmRDs7QUFnQmVoQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbi8vIGltcG9ydCBjbGllbnRDb25maWcgZnJvbSAnLi4vY2xpZW50LWNvbmZpZydcbmltcG9ydCBjbGllbnQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0Fwb2xsb0NsaWVudCdcblxuaW1wb3J0IGZldGNoIGZyb20gICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnIC8vcGFyc2VzIGdyYXBocWwgcXVlcnkgc3RyaW5nIGludG8gYWJzdHJhY3Qgc3ludGF4XG5cbi8vIGNvbnN0IFBST0RVQ1RTX1FVRVJZID0gZ3FsYHF1ZXJ5e1xuLy8gICAgIHF1ZXJ5IE15UXVlcnkge1xuLy8gICAgICAgICB1c2VycyB7XG4vLyAgICAgICAgICAgICBlZGdlcyB7XG4vLyAgICAgICAgICAgICAgIG5vZGUge1xuLy8gICAgICAgICAgICAgICAgIGlkXG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9XG4vLyAgICAgICB9ICAgICAgICAgIFxuLy8gfWA7XG5cbmNvbnN0IFBST0RVQ1RTX1FVRVJZID0gZ3FsYHF1ZXJ5e1xuICAgIHByb2R1Y3RzKGZpcnN0OiAxMCkge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcHJvZHVjdElkXG4gICAgICAgICAgICBhdmVyYWdlUmF0aW5nXG4gICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgLi4uIG9uIFNpbXBsZVByb2R1Y3Qge1xuICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAgICAgIFxufWA7XG5cblxuY29uc3QgSW5kZXg9KHByb3BzKT0+e1xuICAgIGNvbnNvbGUud2Fybihwcm9wcylcbiAgICBjb25zdCB7cHJvZHVjdHN9PXByb3BzXG4gICAgY29uc29sZS5sb2coXCJwcm9kdWN0c3MtXCIsIHByb2R1Y3RzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoPyhwcm9kdWN0cy5tYXAoaXRlbT0+PFByb2R1Y3RzIGtleT17aXRlbS5ub2RlLmlkfSBwcm9kdWN0cz17aXRlbS5ub2RlfS8+KSk6XCJuYWdoXCJ9XG4gICAgICAgICAgICAgICAgey8qIHtwcm9kdWN0cy5sZW5ndGg/KFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoaXRlbT0+PFByb2R1Y3RzIGtleT17aXRlbS5pZH0gcHJvZHVjdHM9e2l0ZW19Lz4pXG5cbiAgICAgICAgICAgICAgICApOicnfSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+e1xuICAgIC8vaXNvbW9ycGhpYyB1bmZldGNoXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7Y2xpZW50Q29uZmlnLnNpdGVVcmx9L2dldFByb2R1Y3RzYCk7XG4gICAgLy8gY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICAgIHByb2R1Y3RzOiBwcm9kdWN0c0RhdGFcbiAgICAvLyB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtxdWVyeTpQUk9EVUNUU19RVUVSWX0pO1xuICAgIGNvbnNvbGUubG9nKFwicmVzLT5cIilcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9kdWN0czpyZXMuZGF0YS5wcm9kdWN0cy5lZGdlc1xuICAgIH1cblxuXG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/link/error\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yXCI/NzVkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/link/error\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });