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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Koa = __webpack_require__(5);
var path = __webpack_require__(6);
var serve = __webpack_require__(7);
var render = __webpack_require__(8);

var app = new Koa();

app.use(serve(path.join(__dirname, '..', '/public')));

app.use(render);

app.listen(3000, function () {
  return console.log('the server is start at port 3000');
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _html = __webpack_require__(9);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var React = __webpack_require__(0);
var isJsonBody = __webpack_require__(28);

var _require = __webpack_require__(29),
    renderToStaticMarkup = _require.renderToStaticMarkup;

var render = async function render(ctx, next) {
  if (!ctx.body || isJsonBody(ctx.body)) {
    var state = ctx.body || {};
    var routerCtx = { basename: '', context: {} };

    if (ctx.accepts('html')) {
      var html = '<!DOCTYPE html>' + renderToStaticMarkup(React.createElement(_html2.default, { initialState: state, routerCtx: routerCtx }));
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Html = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(11);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var clientSideRender = function clientSideRender(state, routerCtx) {
  return (0, _reactDom.render)(_react2.default.createElement(_reactRouterDom.BrowserRouter, routerCtx, _routes2.default), document.getElementById("app"));
};

var initScriptTemplate = function initScriptTemplate(state, routerCtx) {
  return 'clientSideRender(' + state + ',' + routerCtx + ')';
};

var Html = function Html(initialState, routerCtx, children) {
  return _react2.default.createElement('html', { lang: 'zh-cn' }, _react2.default.createElement('head', null, _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge, chrome=1' }), _react2.default.createElement('link', { href: 'main.css', rel: 'stylesheet' }), _react2.default.createElement('title', null, 'EPM UI App')), _react2.default.createElement('body', null, _react2.default.createElement('div', { id: 'app' }), _react2.default.createElement('script', { src: 'bundle.js' })));
};

exports.Html = Html;
exports.default = Html;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _app = __webpack_require__(13);

var _about = __webpack_require__(16);

var _home = __webpack_require__(17);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _home.Home }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _app.App }), _react2.default.createElement(_reactRouter.Route, { path: '/app', component: _app.App }), _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about.About }));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(14);

var _logo2 = _interopRequireDefault(_logo);

__webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'App' }, _react2.default.createElement('div', { className: 'App-header' }, _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }), _react2.default.createElement('h2', null, 'Welcome to React')), _react2.default.createElement('p', { className: 'App-intro' }, 'To get started, edit ', _react2.default.createElement('code', null, 'src/App.js'), ' and save to reload.'));
    }
  }]);

  return App;
}(_react.Component);

exports.App = App;
exports.default = App;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/logo.svg?ee7cd8ed2dcec943251eb2763684fc6f";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, 'About');
    }
  }]);

  return About;
}(_react.Component);

exports.About = About;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _commNavaid = __webpack_require__(18);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'App' }, _react2.default.createElement(_commNavaid.Comm_Navaid, { dataSource: 'http://coptest.bonc.yz/mdocs/internet/v1/namespaces/cop-pangu/channels/chlType/10' }), this.props.children);
    }
  }]);

  return Home;
}(_react.Component);

exports.Home = Home;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comm_Navaid = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navMenu = __webpack_require__(19);

var _getData = __webpack_require__(22);

var _getData2 = _interopRequireDefault(_getData);

__webpack_require__(27);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 导航栏标题与logo
 */
var Comm_Navaid = function (_Component) {
  _inherits(Comm_Navaid, _Component);

  function Comm_Navaid(props) {
    _classCallCheck(this, Comm_Navaid);

    var _this = _possibleConstructorReturn(this, (Comm_Navaid.__proto__ || Object.getPrototypeOf(Comm_Navaid)).call(this, props));

    _this.state = {
      hover: 'none',
      data: {},
      target: {}
    };

    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    return _this;
  }

  _createClass(Comm_Navaid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _getData2.default)(this);
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(item) {
      if (item.chlCode === "head_product") this.setState({ hover: 'flex', target: item });else this.setState({ hover: 'none' });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave(hover) {
      this.setState({ hover: hover });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          hover = _state.hover,
          items = _state.data.items,
          target = _state.target;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'nav-wrapper', style: { backgroundColor: 'black', width: '100%' } }, items ? _react2.default.createElement(_navMenu.Nav_Menu, { dataSource: items, hover: hover, onMouseEnter: this.handleMouseEnter }) : null), _react2.default.createElement('div', { className: 'nav-wrapper', style: { position: 'relative', zIndex: 0 } }));
    }
  }]);

  return Comm_Navaid;
}(_react.Component);

exports.Comm_Navaid = Comm_Navaid;
exports.default = Comm_Navaid;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav_Menu = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(1);

var _uuid = __webpack_require__(21);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 导航下拉子菜单
 */
var Nav_Menu = function (_Component) {
  _inherits(Nav_Menu, _Component);

  function Nav_Menu(props) {
    _classCallCheck(this, Nav_Menu);

    var _this = _possibleConstructorReturn(this, (Nav_Menu.__proto__ || Object.getPrototypeOf(Nav_Menu)).call(this, props));

    _this.state = {
      controlDisplay: 'none',
      authDisplay: 'none',
      loginId: '',
      authLogged: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleControlClick = _this.handleControlClick.bind(_this);
    return _this;
  }

  _createClass(Nav_Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ authDisplay: nextProps.hover });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(item) {
      this.props.onMouseEnter && this.props.onMouseEnter(item);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var authDisplay = this.state.authDisplay;
      if (authDisplay === 'none') {
        this.setState({ authDisplay: 'flex' });
      } else {
        this.setState({ authDisplay: 'none' });
      }
    }
  }, {
    key: 'handleControlClick',
    value: function handleControlClick() {
      var controlDisplay = this.state.controlDisplay;
      if (controlDisplay === 'none') {
        this.setState({ controlDisplay: 'flex' });
      } else {
        this.setState({ controlDisplay: 'none' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dataSource = this.props.dataSource;

      return _react2.default.createElement('div', { style: { display: 'inline' } }, _react2.default.createElement('ul', { className: 'nav-menu' }, dataSource.map(function (item, index) {
        return _react2.default.createElement('li', { key: (0, _uuid2.default)(),
          className: index === 0 ? 'banner-title inline' : '',
          onMouseEnter: _this2.handleMouseEnter.bind(_this2, item) }, _react2.default.createElement(_reactRouter.Link, { to: { pathname: '/', query: item } }, item.chlName, ' '));
      })));
    }
  }]);

  return Nav_Menu;
}(_react.Component);

Nav_Menu.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.Nav_Menu = Nav_Menu;
exports.default = Nav_Menu;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** 获取唯一随机 id */
var getUUID = function getUUID() {
  var s = [];
  var hexDigits = '0123456789abcdef';

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';

  var uuid = s.join('');

  return uuid;
};

exports.default = getUUID;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataSource = __webpack_require__(23);

var dataToState = function dataToState(self) {

  if (self.props.dataSource) {

    var dataSource = self.props.dataSource;

    var saveDataSource = function saveDataSource(dataSource) {

      var data = dataSource ? dataSource : [];

      self.setState({ data: data });
    };

    (0, _dataSource.getDataSource)(dataSource, saveDataSource);
  }
};

exports.default = dataToState;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataSource = undefined;

var _fetch = __webpack_require__(24);

/**
 *   getDataSource 方法接收两个参数。
 *   dataSource: 数据源
 *   callback: 回调函数
 */
var getDataSource = function getDataSource(dataSource, callback) {

  /** 分类获取 dataSource */
  var dispatchGetDataSource = function dispatchGetDataSource(dataResult) {
    if (typeof dataResult === 'string' && _fetch.fetch) {
      (0, _fetch.fetch)(dataResult, { credentials: 'same-origin', headers: { 'Content-Type': 'application/json' } }).then(function (response) {
        return response.json();
      }).then(function (data) {
        callback(data);
      }).catch(function (err) {
        return console.error(err.toString());
      });
    } else if (dataResult instanceof Promise) {
      // 如果 dataSource 是一个 Promise 对象，则将 reslove 函数的参数作为 dataSource 保存
      dataResult.then(function (response) {
        return response.json();
      }).then(function (data) {
        callback(data);
      }).catch(function (err) {
        return console.error(err.toString());
      });
    } else {
      // 如果 dataSource 是其他类型数据，则直接保存
      callback(dataResult);
    }
  };
  var dispatchPostDataSource = function dispatchPostDataSource(dataResult, reqParams) {
    (0, _fetch.fetch)(dataResult, { method: 'POST', credentials: 'same-origin', body: JSON.stringify(reqParams) }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return callback(data);
    }).catch(function (err) {
      return console.error(err.toString());
    });
  };

  if (typeof dataSource === 'function' || Array.isArray(dataSource) || typeof dataSource === 'string') {
    dispatchGetDataSource(dataSource);
  } else {
    var url = dataSource.url,
        params = dataSource.params;

    dispatchPostDataSource(url, params);
  }
};

exports.getDataSource = getDataSource;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = undefined;

var _object = __webpack_require__(25);

var _queue = __webpack_require__(26);

var _queue2 = _interopRequireDefault(_queue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var configs = {

  // fetch 参数设置, 与 fetch 原生 API 保持一致
  'fetch': {
    'method': 'GET',
    'credentials': 'include'
  },

  // 队列设置
  'queue': {

    // 是否启用队列
    'enable': true,

    // 单个队列最大请求并发数
    'singleQueueMaxRequest': 5
  },

  // 样式的命名空间
  'ui': { 'classPrefix': 'epm' }
};

var queue = null;

/**
 * fetch封装
 * @param {String} url:请求路径 
 * @param {Object} options:请求参数 
 */
var fetch = function fetch(url, options) {

  var f = function f() {
    return new Promise(function (resolve, reject) {

      var defaultFetchOptions = configs.fetch || {};
      var _options = {};

      if (options) {
        _options = (0, _object.extend)({}, defaultFetchOptions, options);
      } else {
        _options = (0, _object.extend)({}, defaultFetchOptions);
      }

      window.fetch(url, _options).then(function (response) {
        if (response.ok) {
          return resolve(response);
        }

        if (response.status === 404) {
          return reject(new Error('Page not found: ' + url));
        }

        return reject(new Error('HTTP error: ' + response.status));
      }).catch(function (error) {
        return reject(new Error(error.message));
      });
    });
  };

  if (configs.queue && configs.queue.enable) {
    if (!queue) {
      queue = new _queue2.default(configs.queue.singleQueueMaxRequest);
    }

    return queue.push(f);
  } else {
    return f();
  }
};

exports.default = fetch;
exports.fetch = fetch;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/** object 的判空 */
var isEmpty = exports.isEmpty = function isEmpty(obj) {
  // null and undefined are "empty"
  if (obj === null || obj === undefined) {
    return true;
  }

  if (typeof obj === 'number' && isNaN(obj)) {
    return true;
  }

  if (obj.length !== undefined) {
    return obj.length === 0;
  }

  if (obj instanceof Date) {
    return false;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return Object.keys(obj).length === 0;
  }

  return false;
};

var forEach = exports.forEach = function forEach(obj, fn, context) {
  Object.keys(obj).forEach(function (key) {
    return fn.call(context, obj[key], key);
  });
};

/** object 的继承 */
var extend = exports.extend = function extend() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var target = args[0] || {};
  var length = args.length;
  var options = null;
  var i = 1;

  // Handle case when target is a string or something (possible in deep copy)
  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function' || typeof target === 'boolean') {
    target = {};
  }

  if (i === length) {
    var self = undefined;

    target = self;
    i--;
  }

  for (; i < length; i++) {
    if ((options = args[i]) != null) {
      for (var argProp in options) {

        var argVal = options[argProp];

        // Is this value an object?  If so, iterate over its properties, copying them over
        if (argVal && Object.prototype.toString.call(argVal) === '[object Object]') {
          target[argProp] = target[argProp] || {};
          extend(target[argProp], argVal);
        } else {
          target[argProp] = argVal;
        }
      }
    }
  }

  return target;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultConfigs = {

  // fetch 参数设置, 与 fetch 原生 API 保持一致
  'fetch': {
    'method': 'GET',
    'credentials': 'include'
  },

  // 队列设置
  'queue': {

    // 是否启用队列
    'enable': true,

    // 单个队列最大请求并发数
    'singleQueueMaxRequest': 5
  },

  // 样式的命名空间
  'ui': { 'classPrefix': 'epm' }
};

/**
 * 简单封装了 Promise 
 */

var QPromise = function () {
  /**
   * Creates an instance of QPromise.
   */
  function QPromise() {
    _classCallCheck(this, QPromise);

    this.Promise = Promise;
  }

  /**
   * defer
   * 
   * @returns {Object}
   */

  _createClass(QPromise, [{
    key: 'defer',
    value: function defer() {
      var resolve = null;
      var reject = null;
      var promise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
      });

      return {
        promise: promise,
        resolve: resolve,
        reject: reject
      };
    }

    /**
     * resolve
     * 
     * @param {any} obj 
     * @returns {Promise}
     */

  }, {
    key: 'resolve',
    value: function resolve(obj) {
      var defer = this.defer();

      defer.resolve(obj);

      return defer.promise;
    }

    /**
     * reject
     * 
     * @param {any} obj 
     * @returns {Promise}
     */

  }, {
    key: 'reject',
    value: function reject(obj) {
      var defer = this.defer();

      defer.reject(obj);

      return defer.promise;
    }
  }]);

  return QPromise;
}();

/**
 * 队列执行单类
 */

var QueueUnit =
/**
 * Creates an instance of QueueUnit.
 * @param {any} _Promise 
 * @param {any} fn 运行函数
 */
function QueueUnit(_Promise, fn) {
  _classCallCheck(this, QueueUnit);

  this.fn = fn;
  this.defer = _Promise.defer();
};

/**
 * 队列类
 */

var Queue = function () {

  /**
   * Creates an instance of Queue.
   * @param {any} max 队列最大并行数
   */
  function Queue(max) {
    _classCallCheck(this, Queue);

    this._Promise = new QPromise();
    this._queue = [];
    this._max = this.maxFormat(max);

    // 正在运行的项数
    this._runCount = 0;

    // 队列是否已开始运行
    this._isStart = false;
    this._isStop = 0;
  }

  /**
   * 添加执行项，并会启动队列
   */

  _createClass(Queue, [{
    key: 'push',
    value: function push() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var unit = this.getQueueUnit.apply(this, args);

      this._addItem(unit, true);

      return unit.defer.promise;
    }

    /**
     * 向队列插入执行单元 
     * 
     * @param {any} unit 执行单元对像
     * @param {any} start 是否启动队列
     */

  }, {
    key: '_addItem',
    value: function _addItem(unit, start) {
      this._queue.push(unit);
      if (start) {
        this.start();
      }
    }

    /**
     * 执行下一项
     */

  }, {
    key: 'next',
    value: function next() {
      var _this = this;

      if (this._runCount < this._max && !this._isStop && this._queue.length > 0) {
        var unit = this._queue.shift();

        var issucc = function issucc(data) {
          _this._runCount--;

          // 通知执行单元,成功
          unit.defer.resolve(data);
        };

        var iserr = function iserr(err) {
          _this._runCount--;

          // 通知执行单元,失败
          unit.defer.reject(err);
        };

        if (this._runCount === 0 && !this._isStart) {
          this._isStart = true;
        }

        this.toPromise(function () {
          return unit.fn.apply(null);
        }).then(issucc, iserr).then(function () {
          if (_this._queue.length > 0) {
            _this.queueRun();
          } else if (_this._runCount === 0 && _this._isStart) {
            // 队列结束执行事件
            _this._isStart = false;
          }
        });

        this._runCount += 1;

        return;
      }

      return true;
    }

    /**
     * 执行队列
     */

  }, {
    key: 'queueRun',
    value: function queueRun() {
      while (!this.next()) {
        /* empty */
      }
    }

    /**
     * 开始执行队列
     */

  }, {
    key: 'start',
    value: function start() {
      this._isStop = 0;
      this.queueRun();
    }

    /**
     * 构建执行单元对象
     * 
     * @param {any} fn 
     * @returns {QueueUnit}
     */

  }, {
    key: 'getQueueUnit',
    value: function getQueueUnit(fn) {
      return new QueueUnit(this._Promise, fn);
    }

    /**
     * Promise
     * 
     * @param {any} fn 
     * @returns {Promise}
     */

  }, {
    key: 'toPromise',
    value: function toPromise(fn) {
      try {
        return this._Promise.resolve(fn());
      } catch (e) {
        return this._Promise.reject(e);
      }
    }

    /**
     * 格式化 Max
     * 
     * @param {any} max 
     * @returns 
     */

  }, {
    key: 'maxFormat',
    value: function maxFormat(max) {
      if (Number.isInteger(max) && max > 0) {
        return max;
      } else {
        return defaultConfigs.queue.singleQueueMaxRequest;
      }
    }
  }]);

  return Queue;
}();

exports.default = Queue;
exports.Queue = Queue;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("koa-is-json");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);