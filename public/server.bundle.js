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

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Koa = __webpack_require__(4);
var path = __webpack_require__(5);
var serve = __webpack_require__(6);
var router = __webpack_require__(7);
var render = __webpack_require__(10);

var app = new Koa();

app.use(serve(path.join(__dirname, '..', '/public')));

app.use(render);

app.use(router.routes());

app.listen(3000, function () {
  return console.log('the server is start at port 3000');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Router = __webpack_require__(8);

var navaidAction = __webpack_require__(9);

var getRouter = function getRouter() {
  var router = new Router();

  router.get('/common-navaid/data', navaidAction.getNavaidData);

  return router;
};

module.exports = getRouter();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var controller = {
  getNavaidData: function getNavaidData(ctx, next) {
    ctx.body = ctx.body = {
      namespace: 'pangu',
      version: '1.0.0',
      items: [{
        chlCode: '001',
        chlName: '产品',
        namespace: 'pangu',
        linkTo: '/'
      }, {
        chlCode: '002',
        chlName: '数据',
        namespace: 'pangu',
        linkTo: '/data-pro'
      }, {
        chlCode: '004',
        chlName: '数据挖掘',
        namespace: 'pangu',
        linkTo: '/docker'
      }, {
        chlCode: '005',
        chlName: '模型开发',
        namespace: 'pangu',
        linkTo: '/data-mining'
      }, {
        chlCode: '006',
        chlName: '帮助文档',
        namespace: 'pangu',
        linkTo: '/text-component'
      }, {
        chlCode: '007',
        chlName: '用户管理',
        namespace: 'pangu',
        linkTo: '/userManage'
      }]
    };
  }
};

module.exports = controller;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isJsonBody = __webpack_require__(11);
var serverSideRender = __webpack_require__(12);

var render = async function render(ctx, next) {
  if (!ctx.body || isJsonBody(ctx.body)) {
    var state = ctx.body || {};
    var routerCtx = { basename: '', context: {} };

    if (ctx.accepts('html')) {
      var html = serverSideRender(state, routerCtx);
      ctx.type = 'html';
      ctx.body = html;
    } else if (ctx.accepts('json')) {
      ctx.type = 'json';
      ctx.body = state;
    } else {
      await next();
    }
  } else {
    await next();
  }
};

module.exports = render;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-is-json");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _html = __webpack_require__(13);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var React = __webpack_require__(0);

var _require = __webpack_require__(14),
    renderToStaticMarkup = _require.renderToStaticMarkup;

var serverSideRender = function serverSideRender(state, routerCtx) {
  return '<!DOCTYPE html>' + renderToStaticMarkup(React.createElement(_html2.default, { initialState: state, routerCtx: routerCtx }));
};

module.exports = serverSideRender;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Html = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Html = function Html(initialState, routerCtx, children) {
  return _react2.default.createElement("html", { lang: "zh-cn" }, _react2.default.createElement("head", null, _react2.default.createElement("meta", { charSet: "utf-8" }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }), _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge, chrome=1" }), _react2.default.createElement("link", { href: "main.css", rel: "stylesheet" }), _react2.default.createElement("title", null, 'EPM UI App')), _react2.default.createElement("body", null, _react2.default.createElement("div", { id: "react-root" }), _react2.default.createElement("script", { src: "bundle.js" })));
};

exports.Html = Html;
exports.default = Html;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);