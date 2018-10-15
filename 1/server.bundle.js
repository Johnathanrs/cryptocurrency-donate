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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
// import { FormattedMessage } from 'react-intl';

// Import Style


exports.Footer = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

({
  "footer": "_1oiRVDtQ6fOWkhBVWcRyE_"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Images

var _ref = _jsx('div', {
  className: 'footer font-small teal pt-4'
}, void 0, _jsx('p', {
  className: 'footer-copyright text-center py-3'
}, void 0, '\xA9 2018 SmartProject.com'));

function Footer() {
  return _ref;
}

exports.default = Footer;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_CRYPTO = exports.GET_TICKET = exports.FETCH_USER = exports.FETCH_USERS = exports.FETCH_PROJECT = exports.FETCH_PROJECTS = exports.TOGGLE_ADD_POST = undefined;
exports.toggleAddPost = toggleAddPost;
exports.addProjects = addProjects;
exports.addProject = addProject;
exports.addUsers = addUsers;
exports.addUser = addUser;
exports.getProject = getProject;
exports.getCryptoAddr = getCryptoAddr;
exports.fetchProjects = fetchProjects;
exports.fetchUsers = fetchUsers;
exports.fetchUser = fetchUser;
exports.fetchProject = fetchProject;
exports.fetchCryptoAddr = fetchCryptoAddr;

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _util = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
var FETCH_PROJECTS = exports.FETCH_PROJECTS = 'FETCH_PROJECTS';
var FETCH_PROJECT = exports.FETCH_PROJECT = 'FETCH_PROJECT';
var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var FETCH_USER = exports.FETCH_USER = 'FETCH_USER';

var GET_TICKET = exports.GET_TICKET = 'GET_TICKET';
var GET_CRYPTO = exports.GET_CRYPTO = 'GET_CRYPTO';

// Export Actions
function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

function addProjects(projects) {
  return {
    type: FETCH_PROJECTS,
    projects: projects
  };
}

function addProject(project) {
  return {
    type: FETCH_PROJECT,
    project: project
  };
}

function addUsers(users) {
  return {
    type: FETCH_USERS,
    users: users
  };
}

function addUser(res) {
  return {
    type: FETCH_USER,
    res: res
  };
}

function getProject(project) {
  return {
    type: FETCH_PROJECT,
    project: project
  };
}

function getCryptoAddr(crypto) {
  return {
    type: GET_CRYPTO,
    crypto: crypto
  };
}

function fetchProjects() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('projects').then(function (res) {
      dispatch(addProjects(res.projects));
      return res.projects;
    });
  };
}

function fetchUsers() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('users').then(function (res) {
      dispatch(addUsers(res.users));
      return res.users;
    });
  };
}

function fetchUser() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('user').then(function (res) {
      dispatch(addUser(res));
      return res;
    });
  };
}

function fetchProject(id) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('project/' + id).then(function (res) {
      dispatch(getProject(res.project));
      return res.project;
    });
  };
}

function fetchCryptoAddr(email, projectID) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('users/getCryptoAddr/' + email + '/' + projectID).then(function (res) {
      dispatch(getCryptoAddr(res.crypto));
      return res.crypto;
    });
  };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.fetchAPI = fetchAPI;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(74);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(27);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function fetchAPI(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];

  var token = '';
  try {
    if (typeof window !== "undefined") {
      var tokenData = window.localStorage.getItem('smartproject');
      token = JSON.parse(tokenData).token;
    }
  } catch (err) {
    token = '';
  }
  return (0, _isomorphicFetch2.default)(endpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
      mode: 'no-cors'
    },
    method: method,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];
  var auth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  return fetchAPI(API_URL + '/' + endpoint, method, body, auth);
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _reactRouter = __webpack_require__(2);

var _NavButton = __webpack_require__(31);

var _NavButton2 = _interopRequireDefault(_NavButton);

var _logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAhCAYAAAAvdw6LAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsQAAA7EAZUrDhsAAA3VSURBVGhD7VoJmBTFGX3dM7Ozswd777KgHCogn9zGI4jIKSioQYMSA8ErGBWvqAleCagggigqIgTxQOIRFaMREBYCeHBo5PRABJdDZNmFvWZnZmempzvvr+6Vw9nDY5N8Wd5Hsz1VXd1V9er///dXt2YRqAfrdhjYsDOGwmIL5UELGsuaJWlona2hRxsXft7ObV94DD8atRJisvS+BdV47cMovG4NCZxzlwvQhQ1CWhkxIGIA1YaFEWd6cO+wRLuyiWDYwrHYWvYV58LCGXld8Py5Dzk1Pxy68/cIvLQ6gk5/9GPJZgO5zTSkJ2vwekiCaRMgh8lzKZO6PF6zcKOh2qz4jJVNBLqmwa254NJdPI87ld8b37nL9c+GMPkfYTRP0+BL0BDm/BZXmrQQDf1OcWNUL4865FzKpE4ISuK1OSRm9KwgXqdVNQUICTWHRnJ+Chzhsq6ZE8Km3TE082nKDIsrLQzo5MbdF3k52fFXQHGFifveCGPV5wY8JOjsDi489hufU/v/jeGLb8a2sp0wYeG03E54ZsAkp+aH49tZnrE0jI8LDUWGyQBS4rcw77okTB/lq5UMQW6ajhlX+DCdJPRq33TIaCyomS6h23liaQQZjAfKMkjG0nHJSkE1FP3pwh4ffYyMHwtFyLiXq5GTqik/WBawMGVEIvLTa7eKY2g86BFK1tVfxlSANmIWjsvUMaQ75dMx/FegL95kIDVRrAMIRoAbBiY4VY0LyzDgn/EwDgwbgKKurVF0Skvs/1k7lI6+BMFX5ztX1Q+rYi1iG4YiukxH9G3NPgo0xNYPhlm2yrmqfrxIqX/Z40F0GedHxzv8OGtCFe55tRrhqAV/yMLDC8N4siCMKW+HEaPkbyiMwu2ouPNmFPfupsZY1Ok4lAzuCf8j8QWANmFByJJ8I9FDCUvFtPHBFOrqn0bC1Yaqp59E1bQHoKVlQPN6AbdbZf9K8JEoKxRUiU7GnBeR0ON0u1EcGKtPhlX6BSBrSPW5JuYxY5XMlupbS2sNd6+dTvl3sfWbGH49M6Sen8T7uJ1bSHOR/FXVFsb0S8DTKyIqDSih8vx8aqpKlOtTWeW3X4/qRX+HnpHFPvLmuhMGYjFY1dWw/JXImD0f3l597HJCG/N00PqcnXLx2qpq4KP7U5yq2vHo4jBSaFX1QVzgCbkuDOpyaGul/LbrUL38HehZ2fxlwQoEYIX5YBKguUiMj8IgkQfJie3dg/RHZ8N3/i/sxochuoTPl38uDxNWzrzkozUrV8bNR2o662KsIz/uQRH1+3Cs225g1FMhtMjQFJ/VvDQU4XN5H/mdSAKEJCkXMgQigNZPTFXE1UXIwcvOp3XsgJbaTI3NqvJznGHWWNBIjpbCchIkY8yc+zJJ6avaaaNmBqxdBzgZfJ6HDym4s35C2txciTzK3foQ5UR0bKHjrzckqd/Bl55D5eTxcOXkcqJiMMvLkHrLOPguuAR6ZhaM3YUIPDMLoddfgp6bp9rEvt6N3BUfw9XiOPVbYKzMhBUps8kwohxgGvRO86BlDWYtlWLpMpifjqallUDz2KRoLi/c/Um8gyAnvsddVYoMgcj8C3t4lDW0ztZx0G/ixTVRzF4eUbsVNYlfQwjxPz4FwXl/gZ7OfgoJnPi0+6fB27ufqo9sXo+KP4xVViL7UWbRN8jbvEstSF1clWSG8ryKkLq+XkibRC622o5keiGxoBT+jR3KO1E56V7o2Tlc0faKyVv7GZJHj1FkCNyt2iJt/EPKjM3iIlXmystH2U1Xq3OB+c08WEGHDJnotO5w9y2HnnMhLYArj1agZ58H9znFJKiXTZhcy4kx98xw7gLcMi+ELCpLIVDImPqrREy8NFGRIchK1XHjuV68elOSSpAPy5/rRWDWdOWO1bNTUpC7asO3ZAgSuvRAzjurYVVWqN96egYq7rrVPm+ZyQCoTFRDMMyHNuC5mSka0pLiH1Lnpr3LAORWPpInCC54GRpdkaw0q7Ic6Y/MZvyIvxnp7dkbvktH0lfQt9O8ja2fInawRNWZX42nKYtHY6fFFZ25XpXHg/u099Rfy+KFbGPuYFtCXOm7X8TgpVsLU2We29mNwV15QRx0bOnCyLM8CNFtNQRBWreWkqrGaZaVIvO515waGwYtvuLPd6Coe1toGZlOKdvNm8OFGoPepZVLuRaBrPyCT+vfHFw9PgVv3ZYc93jj1mT6XrEMHpyzFhn2iouseVcFcLEO6C54z7Z9Zm1IueZGmEEGd0JLSkbkvZXq3Cov5GA5k3R5eqsrVFld0NvcpDoibSz/QVW24nOL1mu7IVGW1/YXVVA7RvdOULGlIYj+a61aROKSxc2KhQtCby/AgYv64cB5vRBethh6s3QV1M2SYngHnIfcD7+gdbugS8AVWScWmUQXM5PS7sdALGPHfhMuDla25zsfbxMS+2avvX8fM+Dp2EmV1QVXfgsuJ2dxsF1s3z6e8IbKy/A/9ldLO1NV1wV1jcyltBEFZe3GnlJdiRiBWEv75lJROyRJlrE0BLH97KeoKc6DK7e5kvZF3dqicsI4FTP1tDSYfj+05GSkjpuA5owdaROmwn18a9Vel13a004QK7EY1DUUlphY9kn9VlIbZv8z8m1eU0UXOKiz4wpUJ+WELqtmouuD7e3sdlw99oweBqsB9xEFdjg02SpXHWkcqH7yMZTyxq5CBF98jiSkqwVhlh5gLOmP7DeXI2fR+0i6eIS69nCodTJ5RKLS17K6M5M13Do/hNIqupbviUpa2pMFEWVpUfrmji1cyGBMEbhbt+Xy4TJjR6OfbVZldcHYThN2O2TSqlytjrfPBWLOwu/BAqegdojiUsRKGzWklmiTbcJwhieLcPPuupd/YUlMKdCGwN2qjT1OQkiRc3HVqbffg+Zb9iBt0nS4256k6uNBESJ+/pq+Caigyxa/msVJ7DsxgC+YnzQU+8pN9H0goNrKDIhymXQZmXHg7TOQMo9BmvfXPAkI/u0FpyY+/NMm0qxT1CIRRZbYXyQt75x9KuMQLUN3w9z7piqrC+ZuPocuz6I1aRn2RPTp6FICRu4tilDyqrowUy2yGnOtG94+Ayi3bbkqCW7y6N8iZ+laJF06SpUdjeiWjc6ZDUWI4PYhXioKHX5mppKpi1q6eHoQd71SjYCorzowbVEY/ScFkMp8TtrKe/fLe3rQIf/Qskpk4BK3JUpCkqXKB+6mpWxxao9E1ezHEFn3gZ3FM2kUMiVQCvR2U6kQ7IUjGbqxIk2Vx4OxirkMjUyTt3lso9o6uKCHm4Gat3Br2LTbxBNL4pPy9oaoenMqr7EbAnFJULkPFzNVZWDuk4x/jJ9xEHjmKZQM7Y2ysVc6JewrV8kRs33l7CA27oqprXiBZKkVdEXt8nSccZILzZkQylyINt/E6+TaVJ+d0QpKAxbO7uDGE3G24sNr3kPZVZdCd5I8yTV8Q4fBN2wEM/ccGDt3IDBnBt3VVjupoiKTa/I2UFlxkDUw1p0Oq+wjO+mTGMGx6+0kxxnCWh3mwXdgbvuTnNo5iOQDqR3g7rnVvoGDrnf61ThrFtFJuRoTQy/a5Og4wMTwhQ+ieHergewUe8yChiSG4bXvo+zK4UplyfSaB4qRPPJqeAcOobpqxnF+pcgQOa9T+ppUW1YkjOYyzqMJEci+zcNc9RJPJNHjsKgcLSWPazbWZGtB/Kq996MpUSAkjR2YgBsHHXJVRyPw7Cz4p0yA3pwqSgI9LUBlrCKHZU/Lx1yFLs2KRCgJ9yPrrRXwtDvZaX0IsvqtYDE7IdsybCsdc/qmYoZbjJ8HBYTm5QT2rVRVh2NvqYmBk203K5YicU+sxuBYdQ7Qx7HL+KSsZquooVsnNft1en5L9odCRtxYRMbJ6ZZxSk4m8phu3AwEkLtyvQr+0uvvQOLJhokp6NXejaIKSwVrIUOkYk02LmTIHMj+l8SPtrk6Vt6TXCcZguQrf4eM51/nZAaYU5SpMokVWrM0RYYVNRAr3q+y19x1W+OSIXCfw2taXcXZYjyRCK1IcA4ZlZSxTm85Ii4ZgpaZutq7k4RWJlqa+Nh9eWtas4cl3wvc/8tEtclYg5qzqmgQ5WE/KsKVCESP3OZIueYGZMx5SWXjVkU5cwzGTkkYa8ZJq40V7YOrzYm0jK9sJUY06LusxZuiWLs9hu3ML0qrnO+y2GnZZujeRsfQ7p4GbTYejeqCRahetgjGtq0qAIqb8nTqCt9Fw+Hp3M25qm5YJi2pcCKsAwuZ7n5pF/pOYPA/D3rbu+myku2yeiCvrxd8ZOCzvTFlEfnpmnoLOrJXArbtMzFiRlC5t/0VJj55KFW1WbX3Q1RGAjyzkJWYgZ753VX50QgtfhPh5Utg7NimLEJ2fz1deiBp+OVwn9jeucpGgwhp6ijYEqW4CSvRIupxy2SbkMZAXJfVVLDnoInfM+ea9x5Nog7IN2fyDZpk66e0VEGz0dBkCZHvzwY8GMAaumJ5C/g1A3w8bNkTUzsX8kJKNhjP7yZBqvHQZF3W3jI7kT0u0379IDsV1w1IwPDTPSoH21duqQ/+5q6MqA8AZZYOUtJvfrDx3JWgSccQSfpum1+NFiRFJIns/FZHmTfQWGxFKV9v2rsuX5dZeGVsEnq0bVyX1eSD+povDVw7N8QYYecdsiEt5MikSMwQ6SvvTJ4dk4RTG5kMwTGV5eD5dyOU9wa2Fcm3yrLHpaFDvq5eXon0/U/hGCH/UwD+DS0cBun8XSgRAAAAAElFTkSuQmCC";

var _logo2 = _interopRequireDefault(_logo);

({
  "header": "_2G-rel90MlMZfcv6K_6bS5",
  "add-post-button": "m2U7Ex-3vUwvEbBkF6_y3",
  "language-switcher": "_3DzdSel8S8-j7Qb8afeREF",
  "selected": "J55mED0gmO2nbX8IKW2NK"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


var _ref = _jsx('a', {
  className: 'navbar-brand',
  href: '/'
}, void 0, _jsx('img', {
  src: _logo2.default,
  alt: 'logo'
}));

var _ref2 = _jsx('button', {
  className: 'navbar-toggler',
  type: 'button',
  'data-toggle': 'collapse',
  'data-target': '#navbarSupportedContent',
  'aria-controls': 'navbarSupportedContent',
  'aria-expanded': 'false',
  'aria-label': 'Toggle navigation'
}, void 0, _jsx('span', {
  className: 'navbar-toggler-icon'
}));

var AuthHeader = function (_React$Component) {
  _inherits(AuthHeader, _React$Component);

  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );
  function AuthHeader(props) {
    _classCallCheck(this, AuthHeader);

    var _this = _possibleConstructorReturn(this, (AuthHeader.__proto__ || Object.getPrototypeOf(AuthHeader)).call(this, props));

    _this.navigate = function (url) {
      _reactRouter.browserHistory.push(url);
    };

    _this.state = {
      isUnAuth: true
    };

    _this.navigate = _this.navigate.bind(_this);
    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  _createClass(AuthHeader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window !== "undefined") {
        var token = window.localStorage.getItem('smartproject');
        this.setState({ isUnAuth: !token, token: token });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.token != nextProps.token) {
        var token = nextProps.token;

        this.setState({ isUnAuth: !token });
      }
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.setItem('smartproject', '');
      this.setState(_extends({}, this.state, { isUnAuth: true }));
      _reactRouter.browserHistory.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('div', {}, void 0, _jsx('nav', {
        className: 'header navbar navbar-light nav-pills fixed-top scrolling-navbar navbar-expand-lg'
      }, void 0, _ref, _ref2, _jsx('div', {
        className: 'collapse navbar-collapse',
        id: 'navbarSupportedContent'
      }, void 0, _jsx('ul', {
        className: 'navbar-nav ml-auto mr-5'
      }, void 0, _jsx('li', {
        className: 'nav-item active'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/mytickets');
        },
        label: 'My Tickets'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/referral');
        },
        label: 'Referral'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/checktickets');
        },
        label: 'Check Your Tickets'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/claimbenefites');
        },
        label: 'Claim Your Benefites'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/transferticket');
        },
        label: 'Transfer Tickets'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/account');
        },
        label: 'Account'
      }))), _jsx('button', {
        onClick: function onClick() {
          return _this2.logout();
        },
        className: 'btn btn-lg btn-rounded my-0 bg-light btn-rounded',
        href: '#'
      }, void 0, 'Logout'))));
    }
  }]);

  return AuthHeader;
}(_react2.default.Component);

AuthHeader.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = AuthHeader;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Import Style


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _reactRouter = __webpack_require__(2);

var _AppBar = __webpack_require__(122);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(41);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _classnames = __webpack_require__(19);

var _classnames2 = _interopRequireDefault(_classnames);

var _List = __webpack_require__(123);

var _List2 = _interopRequireDefault(_List);

var _Typography = __webpack_require__(22);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(24);

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = __webpack_require__(21);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Drawer = __webpack_require__(124);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _ListItem = __webpack_require__(125);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Menu = __webpack_require__(126);

var _Menu2 = _interopRequireDefault(_Menu);

var _ChevronLeft = __webpack_require__(127);

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ListItemText = __webpack_require__(128);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAhCAYAAAAvdw6LAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsQAAA7EAZUrDhsAAA3VSURBVGhD7VoJmBTFGX3dM7Ozswd777KgHCogn9zGI4jIKSioQYMSA8ErGBWvqAleCagggigqIgTxQOIRFaMREBYCeHBo5PRABJdDZNmFvWZnZmempzvvr+6Vw9nDY5N8Wd5Hsz1VXd1V9er///dXt2YRqAfrdhjYsDOGwmIL5UELGsuaJWlona2hRxsXft7ObV94DD8atRJisvS+BdV47cMovG4NCZxzlwvQhQ1CWhkxIGIA1YaFEWd6cO+wRLuyiWDYwrHYWvYV58LCGXld8Py5Dzk1Pxy68/cIvLQ6gk5/9GPJZgO5zTSkJ2vwekiCaRMgh8lzKZO6PF6zcKOh2qz4jJVNBLqmwa254NJdPI87ld8b37nL9c+GMPkfYTRP0+BL0BDm/BZXmrQQDf1OcWNUL4865FzKpE4ISuK1OSRm9KwgXqdVNQUICTWHRnJ+Chzhsq6ZE8Km3TE082nKDIsrLQzo5MbdF3k52fFXQHGFifveCGPV5wY8JOjsDi489hufU/v/jeGLb8a2sp0wYeG03E54ZsAkp+aH49tZnrE0jI8LDUWGyQBS4rcw77okTB/lq5UMQW6ajhlX+DCdJPRq33TIaCyomS6h23liaQQZjAfKMkjG0nHJSkE1FP3pwh4ffYyMHwtFyLiXq5GTqik/WBawMGVEIvLTa7eKY2g86BFK1tVfxlSANmIWjsvUMaQ75dMx/FegL95kIDVRrAMIRoAbBiY4VY0LyzDgn/EwDgwbgKKurVF0Skvs/1k7lI6+BMFX5ztX1Q+rYi1iG4YiukxH9G3NPgo0xNYPhlm2yrmqfrxIqX/Z40F0GedHxzv8OGtCFe55tRrhqAV/yMLDC8N4siCMKW+HEaPkbyiMwu2ouPNmFPfupsZY1Ok4lAzuCf8j8QWANmFByJJ8I9FDCUvFtPHBFOrqn0bC1Yaqp59E1bQHoKVlQPN6AbdbZf9K8JEoKxRUiU7GnBeR0ON0u1EcGKtPhlX6BSBrSPW5JuYxY5XMlupbS2sNd6+dTvl3sfWbGH49M6Sen8T7uJ1bSHOR/FXVFsb0S8DTKyIqDSih8vx8aqpKlOtTWeW3X4/qRX+HnpHFPvLmuhMGYjFY1dWw/JXImD0f3l597HJCG/N00PqcnXLx2qpq4KP7U5yq2vHo4jBSaFX1QVzgCbkuDOpyaGul/LbrUL38HehZ2fxlwQoEYIX5YBKguUiMj8IgkQfJie3dg/RHZ8N3/i/sxochuoTPl38uDxNWzrzkozUrV8bNR2o662KsIz/uQRH1+3Cs225g1FMhtMjQFJ/VvDQU4XN5H/mdSAKEJCkXMgQigNZPTFXE1UXIwcvOp3XsgJbaTI3NqvJznGHWWNBIjpbCchIkY8yc+zJJ6avaaaNmBqxdBzgZfJ6HDym4s35C2txciTzK3foQ5UR0bKHjrzckqd/Bl55D5eTxcOXkcqJiMMvLkHrLOPguuAR6ZhaM3YUIPDMLoddfgp6bp9rEvt6N3BUfw9XiOPVbYKzMhBUps8kwohxgGvRO86BlDWYtlWLpMpifjqallUDz2KRoLi/c/Um8gyAnvsddVYoMgcj8C3t4lDW0ztZx0G/ixTVRzF4eUbsVNYlfQwjxPz4FwXl/gZ7OfgoJnPi0+6fB27ufqo9sXo+KP4xVViL7UWbRN8jbvEstSF1clWSG8ryKkLq+XkibRC622o5keiGxoBT+jR3KO1E56V7o2Tlc0faKyVv7GZJHj1FkCNyt2iJt/EPKjM3iIlXmystH2U1Xq3OB+c08WEGHDJnotO5w9y2HnnMhLYArj1agZ58H9znFJKiXTZhcy4kx98xw7gLcMi+ELCpLIVDImPqrREy8NFGRIchK1XHjuV68elOSSpAPy5/rRWDWdOWO1bNTUpC7asO3ZAgSuvRAzjurYVVWqN96egYq7rrVPm+ZyQCoTFRDMMyHNuC5mSka0pLiH1Lnpr3LAORWPpInCC54GRpdkaw0q7Ic6Y/MZvyIvxnp7dkbvktH0lfQt9O8ja2fInawRNWZX42nKYtHY6fFFZ25XpXHg/u099Rfy+KFbGPuYFtCXOm7X8TgpVsLU2We29mNwV15QRx0bOnCyLM8CNFtNQRBWreWkqrGaZaVIvO515waGwYtvuLPd6Coe1toGZlOKdvNm8OFGoPepZVLuRaBrPyCT+vfHFw9PgVv3ZYc93jj1mT6XrEMHpyzFhn2iouseVcFcLEO6C54z7Z9Zm1IueZGmEEGd0JLSkbkvZXq3Cov5GA5k3R5eqsrVFld0NvcpDoibSz/QVW24nOL1mu7IVGW1/YXVVA7RvdOULGlIYj+a61aROKSxc2KhQtCby/AgYv64cB5vRBethh6s3QV1M2SYngHnIfcD7+gdbugS8AVWScWmUQXM5PS7sdALGPHfhMuDla25zsfbxMS+2avvX8fM+Dp2EmV1QVXfgsuJ2dxsF1s3z6e8IbKy/A/9ldLO1NV1wV1jcyltBEFZe3GnlJdiRiBWEv75lJROyRJlrE0BLH97KeoKc6DK7e5kvZF3dqicsI4FTP1tDSYfj+05GSkjpuA5owdaROmwn18a9Vel13a004QK7EY1DUUlphY9kn9VlIbZv8z8m1eU0UXOKiz4wpUJ+WELqtmouuD7e3sdlw99oweBqsB9xEFdjg02SpXHWkcqH7yMZTyxq5CBF98jiSkqwVhlh5gLOmP7DeXI2fR+0i6eIS69nCodTJ5RKLS17K6M5M13Do/hNIqupbviUpa2pMFEWVpUfrmji1cyGBMEbhbt+Xy4TJjR6OfbVZldcHYThN2O2TSqlytjrfPBWLOwu/BAqegdojiUsRKGzWklmiTbcJwhieLcPPuupd/YUlMKdCGwN2qjT1OQkiRc3HVqbffg+Zb9iBt0nS4256k6uNBESJ+/pq+Caigyxa/msVJ7DsxgC+YnzQU+8pN9H0goNrKDIhymXQZmXHg7TOQMo9BmvfXPAkI/u0FpyY+/NMm0qxT1CIRRZbYXyQt75x9KuMQLUN3w9z7piqrC+ZuPocuz6I1aRn2RPTp6FICRu4tilDyqrowUy2yGnOtG94+Ayi3bbkqCW7y6N8iZ+laJF06SpUdjeiWjc6ZDUWI4PYhXioKHX5mppKpi1q6eHoQd71SjYCorzowbVEY/ScFkMp8TtrKe/fLe3rQIf/Qskpk4BK3JUpCkqXKB+6mpWxxao9E1ezHEFn3gZ3FM2kUMiVQCvR2U6kQ7IUjGbqxIk2Vx4OxirkMjUyTt3lso9o6uKCHm4Gat3Br2LTbxBNL4pPy9oaoenMqr7EbAnFJULkPFzNVZWDuk4x/jJ9xEHjmKZQM7Y2ysVc6JewrV8kRs33l7CA27oqprXiBZKkVdEXt8nSccZILzZkQylyINt/E6+TaVJ+d0QpKAxbO7uDGE3G24sNr3kPZVZdCd5I8yTV8Q4fBN2wEM/ccGDt3IDBnBt3VVjupoiKTa/I2UFlxkDUw1p0Oq+wjO+mTGMGx6+0kxxnCWh3mwXdgbvuTnNo5iOQDqR3g7rnVvoGDrnf61ThrFtFJuRoTQy/a5Og4wMTwhQ+ieHergewUe8yChiSG4bXvo+zK4UplyfSaB4qRPPJqeAcOobpqxnF+pcgQOa9T+ppUW1YkjOYyzqMJEci+zcNc9RJPJNHjsKgcLSWPazbWZGtB/Kq996MpUSAkjR2YgBsHHXJVRyPw7Cz4p0yA3pwqSgI9LUBlrCKHZU/Lx1yFLs2KRCgJ9yPrrRXwtDvZaX0IsvqtYDE7IdsybCsdc/qmYoZbjJ8HBYTm5QT2rVRVh2NvqYmBk203K5YicU+sxuBYdQ7Qx7HL+KSsZquooVsnNft1en5L9odCRtxYRMbJ6ZZxSk4m8phu3AwEkLtyvQr+0uvvQOLJhokp6NXejaIKSwVrIUOkYk02LmTIHMj+l8SPtrk6Vt6TXCcZguQrf4eM51/nZAaYU5SpMokVWrM0RYYVNRAr3q+y19x1W+OSIXCfw2taXcXZYjyRCK1IcA4ZlZSxTm85Ii4ZgpaZutq7k4RWJlqa+Nh9eWtas4cl3wvc/8tEtclYg5qzqmgQ5WE/KsKVCESP3OZIueYGZMx5SWXjVkU5cwzGTkkYa8ZJq40V7YOrzYm0jK9sJUY06LusxZuiWLs9hu3ML0qrnO+y2GnZZujeRsfQ7p4GbTYejeqCRahetgjGtq0qAIqb8nTqCt9Fw+Hp3M25qm5YJi2pcCKsAwuZ7n5pF/pOYPA/D3rbu+myku2yeiCvrxd8ZOCzvTFlEfnpmnoLOrJXArbtMzFiRlC5t/0VJj55KFW1WbX3Q1RGAjyzkJWYgZ753VX50QgtfhPh5Utg7NimLEJ2fz1deiBp+OVwn9jeucpGgwhp6ijYEqW4CSvRIupxy2SbkMZAXJfVVLDnoInfM+ea9x5Nog7IN2fyDZpk66e0VEGz0dBkCZHvzwY8GMAaumJ5C/g1A3w8bNkTUzsX8kJKNhjP7yZBqvHQZF3W3jI7kT0u0379IDsV1w1IwPDTPSoH21duqQ/+5q6MqA8AZZYOUtJvfrDx3JWgSccQSfpum1+NFiRFJIns/FZHmTfQWGxFKV9v2rsuX5dZeGVsEnq0bVyX1eSD+povDVw7N8QYYecdsiEt5MikSMwQ6SvvTJ4dk4RTG5kMwTGV5eD5dyOU9wa2Fcm3yrLHpaFDvq5eXon0/U/hGCH/UwD+DS0cBun8XSgRAAAAAElFTkSuQmCC";

var _logo2 = _interopRequireDefault(_logo);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    appFrame: {
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%'
    },
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: 'calc(100% - ' + drawerWidth + 'px)',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    'appBarShift-left': {
      marginLeft: drawerWidth
    },
    'appBarShift-right': {
      marginRight: drawerWidth
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: 'none'
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth
    },
    drawerHeader: _extends({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    'content-left': {
      marginLeft: -drawerWidth
    },
    'content-right': {
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    'contentShift-left': {
      marginLeft: 0
    },
    'contentShift-right': {
      marginRight: 0
    }
  };
};

var _ref = _jsx(_Menu2.default, {});

var _ref2 = _jsx('a', {
  className: 'navbar-brand',
  href: '/'
}, void 0, _jsx('img', {
  src: _logo2.default,
  alt: 'logo'
}));

var _ref3 = _jsx(_ChevronLeft2.default, {});

var _ref4 = _jsx(_Divider2.default, {});

var _ref5 = _jsx(_ListItemText2.default, {
  primary: 'Dashboard Statistics'
});

var _ref6 = _jsx(_Divider2.default, {});

var _ref7 = _jsx(_ListItemText2.default, {
  primary: 'Browser Projects'
});

var _ref8 = _jsx(_ListItemText2.default, {
  primary: 'Create New Project'
});

var _ref9 = _jsx(_Divider2.default, {});

var _ref10 = _jsx(_ListItemText2.default, {
  primary: 'Users'
});

var _ref11 = _jsx(_Divider2.default, {});

var AdminHeader = function (_React$Component) {
  _inherits(AdminHeader, _React$Component);

  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );
  function AdminHeader(props) {
    _classCallCheck(this, AdminHeader);

    var _this = _possibleConstructorReturn(this, (AdminHeader.__proto__ || Object.getPrototypeOf(AdminHeader)).call(this, props));

    _this.navigate = function (url) {
      if (url.includes('admin') && !_this.state.isAuth) {
        _reactRouter.browserHistory.push('/admin/signin');
      } else {
        _reactRouter.browserHistory.push(url);
      }
    };

    _this.handleDrawerOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleDrawerClose = function () {
      _this.setState({ open: false });
    };

    _this.handleChangeAnchor = function (event) {
      _this.setState({
        anchor: event.target.value
      });
    };

    _this.state = {
      isAuth: false,
      open: false,
      anchor: 'left'
    };

    _this.navigate = _this.navigate.bind(_this);
    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  _createClass(AdminHeader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window !== "undefined") {
        var token = window.localStorage.getItem('smartprojectadmin');
        this.setState({ isAuth: token != null });
      }
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.setItem('smartprojectadmin', null);
      this.setState(_extends({}, this.state, { isAuth: false }));
      _reactRouter.browserHistory.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _state = this.state,
          anchor = _state.anchor,
          open = _state.open;

      return _jsx('div', {}, void 0, _jsx('div', {
        className: styles.appFrame
      }, void 0, _jsx(_AppBar2.default, {
        className: (0, _classnames2.default)(styles.appBar, (_classNames = {}, _defineProperty(_classNames, styles.appBarShift, open), _defineProperty(_classNames, styles['appBarShift-left'], open), _classNames))
      }, void 0, _jsx(_Toolbar2.default, {
        disableGutters: !open
      }, void 0, _jsx(_IconButton2.default, {
        color: 'inherit',
        'aria-label': 'Open drawer',
        onClick: this.handleDrawerOpen,
        className: (0, _classnames2.default)(styles.menuButton, open && styles.hide)
      }, void 0, _ref), _ref2)), _jsx(_Drawer2.default, {
        variant: 'persistent',
        open: open,
        classes: {
          paper: styles.drawerPaper
        },
        anchor: 'left'
      }, void 0, _jsx('div', {
        className: styles.drawerHeader
      }, void 0, _jsx(_IconButton2.default, {
        onClick: this.handleDrawerClose
      }, void 0, _ref3), !this.state.isAuth ? _jsx('button', {
        onClick: function onClick() {
          return _this2.navigate('/admin/signin');
        },
        className: 'btn btn-lg btn-rounded my-0 bg-light btn-rounded',
        href: '#'
      }, void 0, 'Login') : _jsx('button', {
        onClick: function onClick() {
          return _this2.logout();
        },
        className: 'btn btn-lg btn-rounded my-0 bg-light btn-rounded',
        href: '#'
      }, void 0, 'Logout')), _ref4, _jsx(_List2.default, {}, void 0, _jsx(_ListItem2.default, {
        button: true,
        onClick: function onClick() {
          return _this2.navigate('/admin/statistics');
        }
      }, void 0, _ref5), _ref6, _jsx(_ListItem2.default, {
        button: true,
        onClick: function onClick() {
          return _this2.navigate('/admin/dashboard');
        }
      }, void 0, _ref7), _jsx(_ListItem2.default, {
        button: true,
        onClick: function onClick() {
          return _this2.navigate('/admin/project');
        }
      }, void 0, _ref8)), _ref9, _jsx(_ListItem2.default, {
        button: true,
        onClick: function onClick() {
          return _this2.navigate('/admin/users');
        }
      }, void 0, _ref10), _ref11)));
    }
  }]);

  return AdminHeader;
}(_react2.default.Component);

AdminHeader.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = AdminHeader;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveToken = saveToken;
exports.registerAuth = registerAuth;
var REGISTER_TOKEN = exports.REGISTER_TOKEN = 'REGISTER_TOKEN';

function saveToken(token) {
  return {
    type: REGISTER_TOKEN,
    token: token
  };
}

function registerAuth(token) {
  return function (dispatch) {
    dispatch(saveToken(token));
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactIntl = __webpack_require__(11);

var _reactRouter = __webpack_require__(2);

var _NavButton = __webpack_require__(31);

var _NavButton2 = _interopRequireDefault(_NavButton);

var _logo = "data:image/png;base64,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";

var _logo2 = _interopRequireDefault(_logo);

var _AuthActions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


var _ref = _jsx('a', {
  className: 'navbar-brand',
  href: '/'
}, void 0, _jsx('img', {
  src: _logo2.default,
  alt: 'logo'
}));

var _ref2 = _jsx('button', {
  className: 'navbar-toggler',
  type: 'button',
  'data-toggle': 'collapse',
  'data-target': '#navbarSupportedContent',
  'aria-controls': 'navbarSupportedContent',
  'aria-expanded': 'false',
  'aria-label': 'Toggle navigation'
}, void 0, _jsx('span', {
  className: 'navbar-toggler-icon'
}));

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );
  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.navigate = function (url) {
      _reactRouter.browserHistory.push(url);
    };

    var token = props.token;

    _this.state = {
      isUnAuth: !token
    };

    _this.navigate = _this.navigate.bind(_this);
    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // if (typeof(window) !== "undefined") {
      //   const tokenData = window.localStorage.getItem('smartproject');
      //   let token = '';
      //   try {
      //     token = JSON.parse(tokenData).token;
      //   } catch (err) {
      //     token = '';
      //   }
      //   this.setState({ isUnAuth: !token, token });
      // }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.token != nextProps.token) {
        var token = nextProps.token;

        this.setState({ isUnAuth: !token });
      }
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.setItem('smartproject', '');
      this.props.dispatch((0, _AuthActions.saveToken)(''));
      _reactRouter.browserHistory.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('div', {}, void 0, _jsx('nav', {
        className: 'header navbar navbar-light nav-pills fixed-top scrolling-navbar navbar-expand-lg'
      }, void 0, _ref, _ref2, _jsx('div', {
        className: 'collapse navbar-collapse',
        id: 'navbarSupportedContent'
      }, void 0, _jsx('ul', {
        className: 'navbar-nav ml-auto mr-5'
      }, void 0, _jsx('li', {
        className: 'nav-item active'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/browseprojects');
        },
        label: 'Browse Projects'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/info');
        },
        label: 'Info'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/userguide');
        },
        label: 'User Guide'
      })), _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx(_NavButton2.default, {
        onClick: function onClick() {
          return _this2.navigate('/user/livechat');
        },
        label: 'Live Chat'
      })), !this.state.isUnAuth && _jsx('li', {
        className: 'nav-item'
      }, void 0, _jsx('button', {
        onClick: function onClick() {
          return _this2.navigate('/user/dashboard');
        },
        className: 'btn btn-lg btn-link',
        type: 'button'
      }, void 0, 'Dashboard'))), this.state.isUnAuth ? _jsx('button', {
        onClick: function onClick() {
          return _this2.navigate('/user/signin');
        },
        className: 'btn btn-lg btn-rounded my-0 bg-light btn-rounded',
        href: '#'
      }, void 0, 'Login') : _jsx('button', {
        onClick: function onClick() {
          return _this2.logout();
        },
        className: 'btn btn-lg btn-rounded my-0 bg-light btn-rounded',
        href: '#'
      }, void 0, 'Logout'))));
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.contextTypes = {
  router: _propTypes2.default.object
};

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-country-region-selector");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("video-react");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/smartproject',
  port: process.env.PORT || 80
};

exports.default = config;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _reactIntl = __webpack_require__(11);

var _intl = __webpack_require__(77);

var _intl2 = _interopRequireDefault(_intl);

var _intlLocalesSupported = __webpack_require__(78);

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

__webpack_require__(79);

var _en = __webpack_require__(80);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(81);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(82);

var _fr = __webpack_require__(83);

var _fr2 = _interopRequireDefault(_fr);

var _fr3 = __webpack_require__(84);

var _fr4 = _interopRequireDefault(_fr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of available languages
var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
var localizationData = exports.localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


// need Intl polyfill, Intl not supported in Safari


if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    global.Intl.NumberFormat = _intl2.default.NumberFormat;
    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = _intl2.default;
}

// use this to allow nested messages, taken from docs:
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages() {
  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return Object.keys(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + '.' + key : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

// bring in intl polyfill, react-intl, and app-specific language data

(0, _reactIntl.addLocaleData)(_en2.default);
localizationData.en = _en4.default;
localizationData.en.messages = flattenMessages(localizationData.en.messages);

(0, _reactIntl.addLocaleData)(_fr2.default);
localizationData.fr = _fr4.default;
localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(87);

var _reduxDevtoolsLogMonitor = __webpack_require__(88);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(89);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _reactTimeout = __webpack_require__(93);

var _reactTimeout2 = _interopRequireDefault(_reactTimeout);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _AppActions = __webpack_require__(5);

var _AuthActions = __webpack_require__(12);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _BTC_yellow = '/' + "ce4b36cd2f379e7b213717950d2bfa4b.png";

var _BTC_yellow2 = _interopRequireDefault(_BTC_yellow);

var _ETH_color = '/' + "3717b4697e78c2f583c3e26e1d8c806f.png";

var _ETH_color2 = _interopRequireDefault(_ETH_color);

var _LTC_yellow = '/' + "0cf6af4b7e3c990575a4fb3d98961837.png";

var _LTC_yellow2 = _interopRequireDefault(_LTC_yellow);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _ProjectView = __webpack_require__(94);

var _ProjectView2 = _interopRequireDefault(_ProjectView);

var _TicketControl = __webpack_require__(32);

var _TicketControl2 = _interopRequireDefault(_TicketControl);

var _UserRegister = __webpack_require__(33);

var _UserRegister2 = _interopRequireDefault(_UserRegister);

var _Payment = __webpack_require__(34);

var _Payment2 = _interopRequireDefault(_Payment);

var _Thankyou = __webpack_require__(100);

var _Thankyou2 = _interopRequireDefault(_Thankyou);

var _CustomizedSnackbars = __webpack_require__(101);

var _CustomizedSnackbars2 = _interopRequireDefault(_CustomizedSnackbars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var coinTypeArray = {
    BTC: _BTC_yellow2.default,
    ETH: _ETH_color2.default,
    LTC: _LTC_yellow2.default
};

var _ref = _jsx('div', {}, void 0, ' loading.... ');

var _ref2 = _jsx(_Footer2.default, {});

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.onSuccessCopy = function (msg) {
            _this.setState(_extends({}, _this.state, {
                snackOpen: true,
                message: msg
            }));
        };

        _this.handleTickets = function (event, value) {
            var totalPrice = _this.state.totalPrice;
            totalPrice[_this.state.coinType] = parseFloat((value * _this.state.ticketPrice[_this.state.coinType]).toFixed(8)).toString();
            var _value = value === 0 ? 1 : value;
            var donationShare = parseFloat((_this.state.project.totalTickets / _value).toFixed(1));
            var donationPower = value === 0 ? 0 : _this.state.donationPower;
            _this.setState(_extends({}, _this.state, { tickets: value, donationPower: donationPower, donationShare: donationShare.toString(), totalPrice: totalPrice }));
        };

        _this.handlePower = function (event, value) {
            _this.setState(_extends({}, _this.state, { donationPower: value }));
        };

        _this.handleCoinType = function (event) {
            var type = event.target.alt;
            var totalPrice = _this.state.totalPrice;
            totalPrice[type] = parseFloat((_this.state.tickets * _this.state.ticketPrice[type]).toFixed(8)).toString();

            _this.setState(_extends({}, _this.state, { coinType: type, totalPrice: totalPrice }));
        };

        _this.getNow = function () {
            var body = {
                ticket: {
                    projectID: _this.state.project._id,
                    totalTickets: _this.state.tickets,
                    totalPrice: _this.state.totalPrice
                }
            };
            (0, _apiCaller2.default)('users/getNow', 'POST', body).then(function (res) {
                if (res.errors) {
                    _this.setState(_extends({}, _this.state, { snackOpen: true, message: res.errors }));
                } else {
                    console.log(res);
                    if (res.status == 'authorized') {
                        _this.setState(_extends({}, _this.state, {
                            subID: res.id,
                            crypto: res.crypto,
                            isRegistering: false,
                            snackOpen: false,
                            activePage: 'payment'
                        }), function () {
                            _this.startBalanceInterval();
                        });
                        _this.props.dispatch((0, _AuthActions.saveToken)(res.token));
                    } else if (res.status == 'unauthorized') {
                        _this.setState(_extends({}, _this.state, {
                            home: false,
                            activePage: 'userRegister'
                        }));
                    }
                }
            });
        };

        _this.gotoNext = function () {
            if (!_this.state.email) {
                _this.setState(_extends({}, _this.state, { snackOpen: true, message: 'Please subscribe to Smartprojects.tech to donate!' }));
                return;
            }

            if (!_this.state.terms_cond) {
                _this.setState(_extends({}, _this.state, { snackOpen: true, message: 'Please read and accept terms and conditions.' }));
                return;
            }

            if (!_this.state.offers_email) {
                _this.setState(_extends({}, _this.state, { snackOpen: true, message: 'Please agree to receive offers and emails from SmartProjects.tech.' }));
                return;
            }

            _this.setState(_extends({}, _this.state, {
                isRegistering: true
            }));

            var body = {
                user: { email: _this.state.email },
                ticket: {
                    projectID: _this.state.project._id,
                    totalTickets: _this.state.tickets,
                    totalPrice: _this.state.totalPrice
                }
            };

            (0, _apiCaller2.default)('users/userSignup', 'POST', body).then(function (res, err) {
                var message = 'Successfully authenticated';
                if (res.errors) {
                    message = res.errors;
                    _this.setState(_extends({}, _this.state, {
                        isRegistering: false,
                        message: message,
                        snackOpen: true
                    }));
                } else {
                    localStorage.setItem('smartproject', JSON.stringify({ token: res.token, isSignIn: false }));
                    if (res.isNewUser && res.isMsgSent) {
                        message = 'Successfully sent your personal credential!';
                    } else {
                        message = 'You are automatically signed in';
                    }
                    _this.setState(_extends({}, _this.state, {
                        message: message,
                        crypto: res.crypto,
                        subID: res.id,
                        snackOpen: true,
                        activePage: 'payment',
                        token: res.token
                    }), function () {
                        _this.startBalanceInterval();
                    });
                    _this.props.dispatch((0, _AuthActions.saveToken)(res.token));
                }
            });
        };

        _this.handleClose = function (event, reason) {
            if (reason === 'clickaway') {
                return;
            }

            _this.setState({ snackOpen: false });
        };

        _this.handleCheck = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, _defineProperty({}, name, event.target.checked)));
            };
        };

        _this.handleChange = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, _defineProperty({}, name, event.target.value)));
            };
        };

        _this.goBack = function () {
            _this.setState(_extends({}, _this.state, { activePage: 'home' }));
        };

        _this.manageBalanceResponse = function (res) {
            if (_this.state.activePage != 'payment') {
                return;
            }
            console.log('balance', res);
            var message = '';
            if (res.errors) {
                message = res.errors;
                // clearInterval(this.balanceInterval);
                _this.setState(_extends({}, _this.state, {
                    activePage: 'payment',
                    snackOpen: true,
                    message: message
                }));
                return;
            } else if (res.status == 'ok') {
                // stop scheduling and go to the thank you page
                console.log(' got payment ');
                message = 'You paid ' + res.paidAmount + ' ' + _this.state.coinType + ' for ' + res.paidTickets + ' out of ' + _this.state.tickets;
                _this.setState(_extends({}, _this.state, {
                    snackOpen: false,
                    activePage: 'thankyou',
                    message: message,
                    paidAmount: res.paidAmount,
                    paidTickets: res.paidTickets
                }));
                clearInterval(_this.balanceBTCInterval);
                clearInterval(_this.balanceLTCInterval);
                return;
            } else if (res.status == 'less') {
                message = 'We got only ' + res.amount + '. \n which does not reach the 1 ticket out of ' + _this.state.tickets;
            } else {
                message = ' still wait for a payment ';
                console.log(' still wait for a payment ');
            }
            _this.setState(_extends({}, _this.state, {
                snackOpen: false,
                activePage: 'payment',
                message: message,
                paidAmount: res.paidAmount
            }));
        };

        _this.balanceBody = function () {
            return {
                email: _this.state.email,
                projectID: _this.state.project._id,
                ticketPrice: _this.state.ticketPrice,
                tickets: _this.state.tickets,
                coinType: _this.state.coinType,
                subID: _this.state.subID,
                crypto: _this.state.crypto
            };
        };

        _this.startBalanceInterval = function () {
            _this.btcBalanceInterval = setInterval(function () {
                _this.checkBTCBalance();
            }, 15000);
            _this.ltcBalanceInterval = setInterval(function () {
                _this.checkLTCBalance();
            }, 10000);
            _this.ethBalanceInterval = setInterval(function () {
                _this.checkETHBalance();
            }, 8000);
        };

        _this.clearBalanceInterval = function () {
            clearInterval(_this.btcBalanceInterval);
            clearInterval(_this.ltcBalanceInterval);
            clearInterval(_this.ethBalanceInterval);
        };

        _this.checkLTCBalance = function () {
            if (!_this.state.crypto || _this.state.activePage != 'payment') {
                // console.log('clearInterval ', addr);
                _this.clearBalanceInterval();
                return;
            }
            console.log('timer LTC');
            var body = _this.balanceBody();
            (0, _apiCaller2.default)('users/checkLTCBalance', 'POST', body).then(function (res, err) {
                _this.manageBalanceResponse(res);
            });
        };

        _this.checkBTCBalance = function () {
            if (!_this.state.crypto || _this.state.activePage != 'payment') {
                // console.log('clearInterval ', addr);
                _this.clearBalanceInterval();
                return;
            }
            console.log('timer BTC');
            var body = _this.balanceBody();
            (0, _apiCaller2.default)('users/checkBTCBalance', 'POST', body).then(function (res, err) {
                _this.manageBalanceResponse(res);
            });
        };

        _this.checkETHBalance = function () {
            if (!_this.state.crypto || _this.state.activePage != 'payment') {
                // console.log('clearInterval ', addr);
                _this.clearBalanceInterval();
                return;
            }
            console.log('timer ETH');
            var body = _this.balanceBody();
            (0, _apiCaller2.default)('users/checkETHBalance', 'POST', body).then(function (res, err) {
                _this.manageBalanceResponse(res);
            });
        };

        _this.toggleDetail = function (type) {
            _this.setState(_extends({}, _this.state, {
                activePane: _this.state.activePane == type ? 'Thumb' : type
            }));
        };

        _this.state = {
            loading: true,
            token: '',
            activePage: 'home',
            activePane: 'Thumb',
            tickets: 4,
            ticketPrice: {
                BTC: 0.008,
                ETH: 0.08,
                LTC: 0.8
            },
            totalPrice: {
                BTC: 0.008,
                ETH: 0.08,
                LTC: 0.8
            },
            donationPower: 50,
            coinType: 'BTC',
            donationShare: 400,
            project: {},
            remainingDays: '',
            email: '',
            terms_cond: '',
            offers_email: '',
            crypto: {
                BTC: {
                    address: ''
                }
            }
        };

        _this.onSuccessCopy = _this.onSuccessCopy.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearBalanceInterval();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.project !== nextProps.project) {
                var project = nextProps.project;
                var a = (0, _moment2.default)(project.fundingDuration, 'YYYY-MM-DD');
                var b = (0, _moment2.default)().format('YYYY-MM-DD');
                var days = a.diff(b, 'days');
                var donationShare = parseFloat((project.totalTickets / this.state.tickets).toFixed(1));
                var ticketPrice = {
                    BTC: project.ticketPriceInBTC,
                    ETH: project.ticketPriceInETH,
                    LTC: project.ticketPriceInLTC
                };
                var totalPrice = {
                    BTC: parseFloat((this.state.tickets * project.ticketPriceInBTC).toFixed(8)).toString(),
                    ETH: parseFloat((this.state.tickets * project.ticketPriceInETH).toFixed(8)).toString(),
                    LTC: parseFloat((this.state.tickets * project.ticketPriceInLTC).toFixed(8)).toString()
                };
                this.setState(_extends({}, this.state, { project: project, ticketPrice: ticketPrice, totalPrice: totalPrice, remainingDays: days, donationShare: donationShare.toString(), loading: false }));
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = undefined;
            if (this.props.params.id) {
                id = this.props.params.id;
            }
            this.props.dispatch((0, _AppActions.fetchProject)(id));
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                message = _state.message,
                project = _state.project,
                activePage = _state.activePage,
                activePane = _state.activePane,
                loading = _state.loading,
                remainingDays = _state.remainingDays;


            return _jsx('div', {}, void 0, _jsx(_Header2.default, {
                activePage: activePage
            }), _jsx(_CustomizedSnackbars2.default, {
                handleClose: this.handleClose,
                open: this.state.snackOpen,
                message: message
            }), _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, !loading && _jsx('div', {}, void 0, _jsx('div', {
                className: 'row'
            }, void 0, _jsx(_ProjectView2.default, {
                project: project,
                remainingDays: remainingDays,
                activePane: activePane,
                toggleDetail: this.toggleDetail
            }), activePage == 'home' && _jsx(_TicketControl2.default, {
                coinTypeArray: coinTypeArray,
                coinType: this.state.coinType,
                tickets: this.state.tickets,
                totalPrice: this.state.totalPrice,
                ticketPrice: this.state.ticketPrice,
                donationShare: this.state.donationShare,
                donationPower: this.state.donationPower,
                handlePower: this.handlePower,
                handleCoinType: this.handleCoinType,
                handleTickets: this.handleTickets,
                getNow: this.getNow,
                project: this.state.project
            }), activePage == 'userRegister' && _jsx(_UserRegister2.default, {
                coinTypeArray: coinTypeArray,
                coinType: this.state.coinType,
                tickets: this.state.tickets,
                totalPrice: this.state.totalPrice,
                handleCoinType: this.handleCoinType,
                project: project,
                email: this.state.email,
                handleChange: this.handleChange,
                handleCheck: this.handleCheck,
                offers_email: this.state.offers_email,
                terms_cond: this.state.terms_cond,
                goBack: this.goBack,
                gotoNext: this.gotoNext,
                isRegistering: this.state.isRegistering
            }), activePage == 'payment' && _jsx(_Payment2.default, {
                coinTypeArray: coinTypeArray,
                coinType: this.state.coinType,
                tickets: this.state.tickets,
                totalPrice: this.state.totalPrice,
                handleCoinType: this.handleCoinType,
                project: project,
                crypto: this.state.crypto,
                ticketPrice: this.state.ticketPrice
            }), activePage == 'thankyou' && _jsx(_Thankyou2.default, {
                coinTypeArray: coinTypeArray,
                coinType: this.state.coinType,
                tickets: this.state.paidTickets,
                totalPrice: this.state.paidAmount,
                project: project,
                ticketPrice: this.state.ticketPrice
            }))), this.state.loading && _ref), _ref2);
        }
    }]);

    return Home;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        project: state.app.project,
        token: state.auth.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

exports.default = NavButton;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavButton(props) {
    var label = props.label,
        onClick = props.onClick;

    return _jsx("button", {
        onClick: onClick,
        className: "btn btn-lg btn-link",
        type: "button"
    }, void 0, label);
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Slider = __webpack_require__(95);

var _Slider2 = _interopRequireDefault(_Slider);

var _BTC_yellow = '/' + "ce4b36cd2f379e7b213717950d2bfa4b.png";

var _BTC_yellow2 = _interopRequireDefault(_BTC_yellow);

var _ETH_color = '/' + "3717b4697e78c2f583c3e26e1d8c806f.png";

var _ETH_color2 = _interopRequireDefault(_ETH_color);

var _LTC_yellow = '/' + "0cf6af4b7e3c990575a4fb3d98961837.png";

var _LTC_yellow2 = _interopRequireDefault(_LTC_yellow);

var _Ticket_Black_Clean = "data:image/png;base64,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";

var _Ticket_Black_Clean2 = _interopRequireDefault(_Ticket_Black_Clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, 'You have selected');

var _ref2 = _jsx('strong', {}, void 0, 'Ticket price:');

var _ref3 = _jsx('strong', {}, void 0, 'Max. amount of tickets per person:');

var _ref4 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option1'
});

var _ref5 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option2'
});

var _ref6 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option3'
});

var TicketControl = function (_React$Component) {
    _inherits(TicketControl, _React$Component);

    function TicketControl() {
        _classCallCheck(this, TicketControl);

        return _possibleConstructorReturn(this, (TicketControl.__proto__ || Object.getPrototypeOf(TicketControl)).apply(this, arguments));
    }

    _createClass(TicketControl, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                tickets = _props.tickets,
                totalPrice = _props.totalPrice,
                ticketPrice = _props.ticketPrice,
                coinTypeArray = _props.coinTypeArray,
                coinType = _props.coinType,
                donationShare = _props.donationShare,
                donationPower = _props.donationPower,
                handlePower = _props.handlePower,
                handleCoinType = _props.handleCoinType,
                handleTickets = _props.handleTickets,
                getNow = _props.getNow,
                project = _props.project;


            var ticketsArray = [];
            if (project.maximumAvailableTicketsPerPerson) {
                ticketsArray = Array.from(new Array(project.maximumAvailableTicketsPerPerson + 1), function (x, i) {
                    return i;
                });
            }

            var btnState = tickets > 0 ? 'btn btn-lg bg-dark text-white float-right mt-sm-1' : 'btn btn-lg bg-dark text-white disabled float-right mt-sm-1';

            return _jsx('div', {
                className: 'col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane'
            }, void 0, _jsx('div', {
                className: 'card plr-30 card-bg'
            }, void 0, _jsx('div', {
                className: 'd-flex flex-column justify-content-center pt-4 pb-4 ticket-background',
                role: 'alert',
                style: { backgroundImage: 'url(' + _Ticket_Black_Clean2.default + ')' }
            }, void 0, _jsx('h5', {
                className: 'card-title text-center fw-500 text-white fs-125 mb-0 mt-1'
            }, void 0, _ref, ' ', _jsx('strong', {
                className: 'fs-11 text-white'
            }, void 0, tickets), ' tickets'), _jsx('div', {
                className: 'text-center'
            }, void 0, _jsx('span', {
                className: 'card-text mr-1 fs-1 text-white'
            }, void 0, ' ', totalPrice[coinType]), _jsx('img', {
                src: coinTypeArray[coinType],
                alt: 'BTC',
                width: '30',
                height: '30'
            }))), _jsx('div', {
                className: 'pb-3 mt-2',
                role: 'alert'
            }, void 0, _jsx('span', {
                className: 'card-text '
            }, void 0, _ref2, ' ', _jsx('span', {
                className: 'fs-11 mr-1'
            }, void 0, ticketPrice[coinType]), _jsx('img', {
                src: coinTypeArray[coinType],
                alt: 'BTC',
                width: '20',
                height: '20'
            })), _jsx('div', {
                className: 'card-text'
            }, void 0, _jsx('span', {}, void 0, _ref3, ' ', _jsx('span', {
                className: 'fs-11'
            }, void 0, project.maximumAvailableTicketsPerPerson))), _jsx('div', {
                className: 'slider'
            }, void 0, _jsx(_Slider2.default, {
                className: 'slider-control',
                value: tickets,
                min: 0,
                max: project.maximumAvailableTicketsPerPerson,
                step: 1,
                'aria-labelledby': 'label',
                onChange: handleTickets
            }), _jsx('div', {
                className: 'slider-ticks'
            }, void 0, ticketsArray.map(function (i, key) {
                return _jsx('div', {}, key, i);
            })))), _jsx('div', {
                className: 'pb-2',
                role: 'alert'
            }, void 0, _jsx('div', {
                className: 'card-text fb'
            }, void 0, 'Your donation share is 1:', donationShare, ' and has a power of ', donationPower, ' out of 100'), _jsx('div', {
                className: 'slider'
            }, void 0, _jsx(_Slider2.default, {
                className: 'slider-control',
                value: donationPower,
                min: 0,
                max: 100,
                step: 10,
                'aria-labelledby': 'label',
                onChange: handlePower
            }), _jsx('div', {
                className: 'slider-ticks'
            }, void 0, [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(function (i, key) {
                return _jsx('div', {}, key, i);
            })))), _jsx('div', {
                className: 'mt-2 mb-2 px-1'
            }, void 0, _jsx('span', {
                className: 'fb fs-11 warning-color mb-1'
            }, void 0, 'Only ', project.maximumAvailableTickets, ' out of ', project.totalTickets, ' left'), _jsx('button', {
                onClick: getNow,
                className: btnState
            }, void 0, 'Get Now')), _jsx('div', {
                className: 'card-footer d-flex justify-content-around card-bg btn-group p-0 ',
                role: 'group',
                'aria-label': 'Basic example'
            }, void 0, _jsx('div', {
                className: 'btn-group btn-group-toggle mt-0 mb-0',
                'data-toggle': 'buttons'
            }, void 0, _jsx('label', {
                className: 'btn active',
                'data-toggle': 'tooltip',
                title: 'Bitcoin'
            }, void 0, _ref4, _jsx('img', {
                src: _BTC_yellow2.default,
                alt: 'BTC',
                width: '50',
                height: '50',
                onClick: handleCoinType
            })), _jsx('label', {
                className: 'btn',
                'data-toggle': 'tooltip',
                title: 'Ethereum'
            }, void 0, _ref5, _jsx('img', {
                src: _ETH_color2.default,
                alt: 'ETH',
                width: '50',
                height: '50',
                onClick: handleCoinType
            })), _jsx('label', {
                className: 'btn',
                'data-toggle': 'tooltip',
                title: 'Litecoin'
            }, void 0, _ref6, _jsx('img', {
                src: _LTC_yellow2.default,
                alt: 'LTC',
                width: '50',
                height: '50',
                onClick: handleCoinType
            }))))));
        }
    }]);

    return TicketControl;
}(_react2.default.Component);

exports.default = TicketControl;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _BTC_yellow = '/' + "ce4b36cd2f379e7b213717950d2bfa4b.png";

var _BTC_yellow2 = _interopRequireDefault(_BTC_yellow);

var _ETH_color = '/' + "3717b4697e78c2f583c3e26e1d8c806f.png";

var _ETH_color2 = _interopRequireDefault(_ETH_color);

var _LTC_yellow = '/' + "0cf6af4b7e3c990575a4fb3d98961837.png";

var _LTC_yellow2 = _interopRequireDefault(_LTC_yellow);

var _Ticket_Black_Clean = "data:image/png;base64,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";

var _Ticket_Black_Clean2 = _interopRequireDefault(_Ticket_Black_Clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, 'You have selected');

var _ref2 = _jsx('div', {
    className: 'card-text black-color'
}, void 0, 'Your personal login credential will be sent to this email');

var _ref3 = _jsx('div', {
    className: 'card-text black-color'
}, void 0, 'The purchased tickets are immediately available and can be easily transferred as a gift or can be upgraded for free through our referral system');

var _ref4 = _jsx('span', {
    className: 'checkbox-decorator'
}, void 0, _jsx('span', {
    className: 'check'
}), _jsx('div', {
    className: 'ripple-container'
}));

var _ref5 = _jsx('a', {
    href: '#',
    className: 'black-color fb'
}, void 0, 'Terms and Conditions');

var _ref6 = _jsx('span', {
    className: 'checkbox-decorator'
}, void 0, _jsx('span', {
    className: 'check'
}), _jsx('div', {
    className: 'ripple-container'
}));

var _ref7 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x'
});

var _ref8 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option1'
});

var _ref9 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option2'
});

var _ref10 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option3'
});

var UserRegister = function (_Component) {
    _inherits(UserRegister, _Component);

    function UserRegister(props) {
        _classCallCheck(this, UserRegister);

        return _possibleConstructorReturn(this, (UserRegister.__proto__ || Object.getPrototypeOf(UserRegister)).call(this, props));
    }

    _createClass(UserRegister, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                email = _props.email,
                tickets = _props.tickets,
                coinTypeArray = _props.coinTypeArray,
                totalPrice = _props.totalPrice,
                coinType = _props.coinType,
                handleChange = _props.handleChange,
                handleCheck = _props.handleCheck,
                goBack = _props.goBack,
                gotoNext = _props.gotoNext,
                offers_email = _props.offers_email,
                terms_cond = _props.terms_cond,
                project = _props.project,
                handleCoinType = _props.handleCoinType,
                isRegistering = _props.isRegistering;


            var btnState = email ? 'btn btn-lg bg-dark text-white float-right' : 'btn btn-lg bg-dark text-white float-right disabled';

            return _jsx('div', {
                className: 'col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane'
            }, void 0, _jsx('div', {
                className: 'card plr-30 card-bg'
            }, void 0, _jsx('div', {
                className: 'justify-content-center pt-4 pb-4 ticket-background',
                role: 'alert',
                style: { backgroundImage: 'url(' + _Ticket_Black_Clean2.default + ')' }
            }, void 0, _jsx('h5', {
                className: 'card-title text-center fw-500 text-white fs-125 mb-0 mt-1'
            }, void 0, _ref, ' ', _jsx('strong', {
                className: 'fs-11 text-white'
            }, void 0, tickets), ' tickets'), _jsx('div', {
                className: 'text-center'
            }, void 0, _jsx('span', {
                className: 'card-text mr-1 fs-1 text-white'
            }, void 0, ' ', totalPrice[coinType]), _jsx('img', {
                src: coinTypeArray[coinType],
                alt: 'BTC',
                width: '30',
                height: '30'
            }))), _jsx('div', {
                className: 'pb-3 mt-3',
                role: 'alert'
            }, void 0, _jsx('input', {
                type: 'email',
                value: email,
                onChange: handleChange('email'),
                className: 'form-control email',
                id: 'last_name',
                name: 'last_name',
                placeholder: 'Email:'
            }), _ref2), _jsx('div', {
                className: 'mt-2',
                role: 'alert'
            }, void 0, _ref3, _jsx('div', {
                className: 'checkbox mt-3'
            }, void 0, _jsx('label', {
                className: 'black-color'
            }, void 0, _jsx('input', {
                type: 'checkbox',
                checked: terms_cond,
                onChange: handleCheck('terms_cond')
            }), _ref4, ' I accept the ', _ref5)), _jsx('div', {
                className: 'checkbox'
            }, void 0, _jsx('label', {
                className: 'black-color'
            }, void 0, _jsx('input', {
                type: 'checkbox',
                checked: offers_email,
                onChange: handleCheck('offers_email')
            }), _ref6, ' I agree to receive offers and emails from SmartProjects.tech.'))), _jsx('div', {
                className: 'mt-2 px-1'
            }, void 0, _jsx('span', {
                className: 'fb fs-11 warning-color mb-1'
            }, void 0, 'Only ', project.maximumAvailableTickets, ' out of ', project.totalTickets, ' left'), isRegistering && _ref7, _jsx('div', {
                className: 'float-right mt-sm-2'
            }, void 0, _jsx('button', {
                onClick: goBack,
                className: 'btn btn-lg bg-dark text-white mr-2'
            }, void 0, 'Back'), _jsx('button', {
                onClick: gotoNext,
                className: btnState
            }, void 0, 'Next'))), _jsx('div', {
                className: 'card-footer d-flex justify-content-around card-bg btn-group p-0 ',
                role: 'group',
                'aria-label': 'Basic example'
            }, void 0, _jsx('div', {
                className: 'btn-group btn-group-toggle mt-0 mb-0',
                'data-toggle': 'buttons'
            }, void 0, _jsx('label', {
                className: coinType == 'BTC' ? 'btn active' : 'btn',
                'data-toggle': 'tooltip',
                title: 'Bitcoin'
            }, void 0, _ref8, _jsx('img', {
                src: _BTC_yellow2.default,
                alt: 'BTC',
                width: '50',
                height: '50',
                onClick: handleCoinType
            })), _jsx('label', {
                className: coinType == 'ETH' ? 'btn active' : 'btn',
                'data-toggle': 'tooltip',
                title: 'Ethereum'
            }, void 0, _ref9, _jsx('img', {
                src: _ETH_color2.default,
                alt: 'ETH',
                width: '50',
                height: '50',
                onClick: handleCoinType
            })), _jsx('label', {
                className: coinType == 'LTC' ? 'btn active' : 'btn',
                'data-toggle': 'tooltip',
                title: 'Litecoin'
            }, void 0, _ref10, _jsx('img', {
                src: _LTC_yellow2.default,
                alt: 'LTC',
                width: '50',
                height: '50',
                onClick: handleCoinType
            }))))));
        }
    }]);

    return UserRegister;
}(_react.Component);

exports.default = UserRegister;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ReactBTCQR = __webpack_require__(96);

var _ReactBTCQR2 = _interopRequireDefault(_ReactBTCQR);

var _ethereumQrCode = __webpack_require__(98);

var _ethereumQrCode2 = _interopRequireDefault(_ethereumQrCode);

var _reactClipboard = __webpack_require__(99);

var _reactClipboard2 = _interopRequireDefault(_reactClipboard);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _BTC_yellow = '/' + "ce4b36cd2f379e7b213717950d2bfa4b.png";

var _BTC_yellow2 = _interopRequireDefault(_BTC_yellow);

var _ETH_color = '/' + "3717b4697e78c2f583c3e26e1d8c806f.png";

var _ETH_color2 = _interopRequireDefault(_ETH_color);

var _LTC_yellow = '/' + "0cf6af4b7e3c990575a4fb3d98961837.png";

var _LTC_yellow2 = _interopRequireDefault(_LTC_yellow);

var _Ticket_Black_Clean = "data:image/png;base64,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";

var _Ticket_Black_Clean2 = _interopRequireDefault(_Ticket_Black_Clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bitcore = __webpack_require__(35);
var litecore = __webpack_require__(36);

var web3 = __webpack_require__(37);

var _ref = _jsx('h5', {
    className: 'fb'
}, void 0, 'SCAN THE TAG BELOW TO PAY');

var _ref2 = _jsx('strong', {}, void 0, 'Ticket price:');

var _ref3 = _jsx('i', {
    className: 'fa fa-clipboard'
});

var _ref4 = _jsx('div', {}, void 0, _jsx('div', {}, void 0, 'Send the exact amount to this address.'), _jsx('div', {}, void 0, 'You will receive your tickets after payment confirmation viewable in your login area, "Dashboard"'));

var _ref5 = _jsx('div', {
    className: 'float-right mt-sm-2'
}, void 0);

var _ref6 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option1'
});

var _ref7 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option2'
});

var _ref8 = _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option3'
});

var Payment = function (_React$Component) {
    _inherits(Payment, _React$Component);

    function Payment(props) {
        _classCallCheck(this, Payment);

        var _this = _possibleConstructorReturn(this, (Payment.__proto__ || Object.getPrototypeOf(Payment)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            ETH: ''
        };
        return _this;
    }

    _createClass(Payment, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.coinType != nextProps.coinType) {
                this.drawETHQR(nextProps);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.drawETHQR(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                tickets = _props.tickets,
                coinTypeArray = _props.coinTypeArray,
                totalPrice = _props.totalPrice,
                ticketPrice = _props.ticketPrice,
                coinType = _props.coinType,
                project = _props.project,
                handleCoinType = _props.handleCoinType,
                crypto = _props.crypto;


            var BTC = null;
            var LTC = null;
            if (crypto) {
                BTC = new bitcore.URI({
                    address: crypto.BTC.address.publicKey,
                    amount: crypto.BTC.amount,
                    message: crypto.BTC.message
                });

                LTC = new litecore.URI({
                    address: crypto.LTC.address.publicKey,
                    amount: crypto.LTC.amount,
                    message: crypto.LTC.message
                });
            }

            return _jsx('div', {
                className: 'col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane'
            }, void 0, _jsx('div', {
                className: 'card px-2 card-bg'
            }, void 0, _jsx('div', {
                className: 'd-flex flex-column align-items-center justify-content-center mt-2 px-1 '
            }, void 0, _ref, crypto && coinType == 'BTC' && _jsx('a', {
                href: BTC.toString(),
                target: '_blank'
            }, void 0, _jsx(_ReactBTCQR2.default, {
                text: BTC.toString()
            })), crypto && coinType == 'LTC' && _jsx('a', {
                href: LTC.toString(),
                target: '_blank'
            }, void 0, _jsx(_ReactBTCQR2.default, {
                text: LTC.toString()
            })), this.state.ETH && _jsx('a', {}, void 0, _jsx('div', {
                id: 'ethereum-qr-code'
            }, void 0, _jsx('canvas', {
                height: '205',
                width: '205',
                style: { width: '200px' }
            })))), _jsx('div', {
                className: 'justify-content-center mt-2 pt-1 pb-4 ticket-background',
                role: 'alert',
                style: { backgroundImage: 'url(' + _Ticket_Black_Clean2.default + ')', height: '70px' }
            }, void 0, _jsx('h5', {
                className: 'card-title text-center fw-500 text-white fs-125 mb-0 mt-1',
                style: { paddingTop: '0.1rem' }
            }, void 0, _jsx('strong', {
                className: 'fs-11 text-white'
            }, void 0, tickets), ' tickets'), _jsx('div', {
                className: 'text-center'
            }, void 0, _jsx('span', {
                className: 'card-text mr-1 fs-1 text-white'
            }, void 0, ' ', totalPrice[coinType]), _jsx('img', {
                src: coinTypeArray[coinType],
                alt: coinType,
                width: '25',
                height: '25'
            }))), _jsx('div', {
                className: 'pb-3 mt-2 px-2',
                role: 'alert'
            }, void 0, _jsx('span', {
                className: 'card-text '
            }, void 0, _ref2, ' ', _jsx('span', {
                className: 'fs-11 mr-1'
            }, void 0, ticketPrice[coinType]), _jsx('img', {
                src: coinTypeArray[coinType],
                alt: coinType,
                width: '20',
                height: '20'
            })), _jsx('div', {
                className: 'input-group mb-3'
            }, void 0, _jsx('input', {
                type: 'text',
                id: 'clipboard',
                className: 'form-control pl-2',
                value: crypto[coinType].address.publicKey,
                'aria-label': 'Recipient\'s username',
                'aria-describedby': 'basic-addon2',
                disabled: true
            }), _jsx('div', {
                className: 'input-group-append ml-1'
            }, void 0, _jsx(_reactClipboard2.default, {
                'data-clipboard-text': crypto[coinType].address.publicKey
            }, void 0, _ref3))), _ref4), _jsx('div', {
                className: 'mt-2 plr-30'
            }, void 0, _jsx('span', {
                className: 'fb fs-11 warning-color mb-1'
            }, void 0, 'Only ', project.maximumAvailableTickets, ' out of ', project.totalTickets, ' left'), _ref5), _jsx('div', {
                className: 'card-footer d-flex justify-content-around card-bg btn-group p-0 ',
                role: 'group',
                'aria-label': 'Basic example'
            }, void 0, _jsx('div', {
                className: 'btn-group btn-group-toggle mt-0 mb-0',
                'data-toggle': 'buttons'
            }, void 0, _jsx('label', {
                className: coinType == 'BTC' ? 'btn active' : 'btn',
                'data-toggle': 'tooltip',
                title: 'Bitcoin'
            }, void 0, _ref6, _jsx('img', {
                src: _BTC_yellow2.default,
                alt: 'BTC',
                width: '50',
                height: '50',
                onClick: handleCoinType
            })), _jsx('label', {
                className: coinType == 'ETH' ? 'btn active' : 'btn',
                'data-toggle': 'tooltip',
                title: 'Ethereum'
            }, void 0, _ref7, _jsx('img', {
                src: _ETH_color2.default,
                alt: 'ETH',
                width: '50',
                height: '50',
                onClick: handleCoinType
            })), _jsx('label', {
                className: coinType == 'LTC' ? 'btn active' : 'btn',
                'data-toggle': 'tooltip',
                title: 'Litecoin'
            }, void 0, _ref8, _jsx('img', {
                src: _LTC_yellow2.default,
                alt: 'LTC',
                width: '50',
                height: '50',
                onClick: handleCoinType
            }))))));
        }
    }]);

    return Payment;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.drawETHQR = function (props) {
        var crypto = props.crypto,
            coinType = props.coinType;

        var qr = new _ethereumQrCode2.default();
        var sendDetails = {
            to: crypto.ETH.address.publicKey,
            value: web3.utils.toWei(crypto.ETH.amount, 'ether')
        };

        var configDetials = {
            size: 230,
            selector: '#ethereum-qr-code',
            options: {
                margin: 2
            }
        };

        if (coinType == 'ETH') {
            _this2.setState(_extends({}, _this2.state, { ETH: true }), function () {
                qr.toCanvas(sendDetails, configDetials);
            });
        } else {
            _this2.setState(_extends({}, _this2.state, { ETH: false }));
        }
    };
};

exports.default = Payment;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("bitcore-lib");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("litecore-lib");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _AppActions = __webpack_require__(5);

var _EnhancedTable = __webpack_require__(111);

var _EnhancedTable2 = _interopRequireDefault(_EnhancedTable);

var _AdminHeader = __webpack_require__(10);

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AdminHeader2.default, {});

var _ref2 = _jsx('div', {}, void 0, '...loading');

var _ref3 = _jsx(_Footer2.default, {});

var Dashboard = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Dashboard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _AppActions.fetchProjects)());
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartprojectadmin');
                if (token == null || token == 'null') {
                    _reactRouter.browserHistory.push('/admin/signin');
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.projects !== nextProps.projects && nextProps.projects && nextProps.projects.length > 0) {
                this.setState(_extends({}, this.state, { loading: false }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var projects = this.props.projects;

            console.log('projects', projects);

            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-100'
            }, void 0, !this.state.loading && _jsx(_EnhancedTable2.default, {
                data: projects
            }), this.state.loading && _ref2), _ref3);
        }
    }]);

    return Dashboard;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        projects: state.app.projects
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Dashboard);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = __webpack_require__(39);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(120);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(40);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableSortLabel = __webpack_require__(121);

var _TableSortLabel2 = _interopRequireDefault(_TableSortLabel);

var _Tooltip = __webpack_require__(42);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancedTableHead = function (_React$Component) {
  _inherits(EnhancedTableHead, _React$Component);

  function EnhancedTableHead() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EnhancedTableHead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EnhancedTableHead.__proto__ || Object.getPrototypeOf(EnhancedTableHead)).call.apply(_ref, [this].concat(args))), _this), _this.createSortHandler = function (property) {
      return function (event) {
        _this.props.onRequestSort(event, property);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EnhancedTableHead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          order = _props.order,
          orderBy = _props.orderBy,
          rows = _props.rows;


      return _jsx(_TableHead2.default, {}, void 0, _jsx(_TableRow2.default, {}, void 0, rows.map(function (row) {
        return _jsx(_TableCell2.default, {
          numeric: row.numeric,
          padding: row.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === row.id ? order : false
        }, row.id, _jsx(_Tooltip2.default, {
          title: 'Sort',
          placement: row.numeric ? 'bottom-end' : 'bottom-start',
          enterDelay: 300
        }, void 0, _jsx(_TableSortLabel2.default, {
          active: orderBy === row.id,
          direction: order,
          onClick: _this2.createSortHandler(row.id)
        }, void 0, row.label)));
      }, this)));
    }
  }]);

  return EnhancedTableHead;
}(_react2.default.Component);

exports.default = EnhancedTableHead;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Header2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Info Page');

var _ref3 = _jsx(_Footer2.default, {});

var Info = function (_React$Component) {
    _inherits(Info, _React$Component);

    function Info(props) {
        _classCallCheck(this, Info);

        var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Info, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return Info;
}(_react2.default.Component);

exports.default = Info;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AuthHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'User Dashboard');

var _ref3 = _jsx(_Footer2.default, {});

var UserDashboard = function (_React$Component) {
    _inherits(UserDashboard, _React$Component);

    function UserDashboard(props) {
        _classCallCheck(this, UserDashboard);

        var _this = _possibleConstructorReturn(this, (UserDashboard.__proto__ || Object.getPrototypeOf(UserDashboard)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(UserDashboard, [{
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return UserDashboard;
}(_react2.default.Component);

exports.default = UserDashboard;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _AdminHeader = __webpack_require__(10);

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _BTC_yellow = '/' + "ce4b36cd2f379e7b213717950d2bfa4b.png";

var _BTC_yellow2 = _interopRequireDefault(_BTC_yellow);

var _ETH_color = '/' + "3717b4697e78c2f583c3e26e1d8c806f.png";

var _ETH_color2 = _interopRequireDefault(_ETH_color);

var _LTC_yellow = '/' + "0cf6af4b7e3c990575a4fb3d98961837.png";

var _LTC_yellow2 = _interopRequireDefault(_LTC_yellow);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});
({
    "gallery-block": "_3OTASnFyiGX0HAyCWwvwjz",
    "heading": "_3O53eapAbVLnVSE9swKtAB",
    "cards-gallery": "_2IGOZFOr0LAOKcWtmvI_vS",
    "card": "_3vLWJbo1qbzLPaJDTTsUQh",
    "card-body": "_2K7c-ToTuXVgVJUmAwtLQQ",
    "transform-on-hover": "UPsmNVvtWwukvOi8ZiMuK"
});

var _AppActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AdminHeader2.default, {});

var _ref2 = _jsx('div', {}, void 0, '...loading');

var _ref3 = _jsx('i', {
    className: 'fa fa-map-marker fa-2x align-middle warning-color',
    'aria-hidden': 'true'
});

var _ref4 = _jsx('i', {
    className: 'fa fa-btc text-white',
    'aria-hidden': 'true'
});

var _ref5 = _jsx('img', {
    src: '../../' + _BTC_yellow2.default,
    alt: 'BTC',
    width: '50',
    height: '50'
});

var _ref6 = _jsx('img', {
    src: '../../' + _ETH_color2.default,
    alt: 'ETH',
    width: '50',
    height: '50'
});

var _ref7 = _jsx('img', {
    src: '../../' + _LTC_yellow2.default,
    alt: 'LTC',
    width: '50',
    height: '50'
});

var _ref8 = _jsx(_Footer2.default, {});

var ProjectDetailView = function (_React$Component) {
    _inherits(ProjectDetailView, _React$Component);

    function ProjectDetailView(props) {
        _classCallCheck(this, ProjectDetailView);

        var _this = _possibleConstructorReturn(this, (ProjectDetailView.__proto__ || Object.getPrototypeOf(ProjectDetailView)).call(this, props));

        _this.updateProject = function () {
            _reactRouter.browserHistory.push('/admin/project/' + _this.props.project._id);
        };

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(ProjectDetailView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _AppActions.fetchProject)(this.props.params.id));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.project !== nextProps.project) {
                var project = nextProps.project;
                this.setState(_extends({}, this.state, { loading: false }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var project = this.props.project;

            console.log(this.props);
            var daysLeft = 0;
            var thumbnail = '';
            if (project) {
                var a = (0, _moment2.default)(project.fundingDuration, 'YYYY-MM-DD');
                var b = (0, _moment2.default)().format('YYYY-MM-DD');
                daysLeft = a.diff(b, 'days');
                thumbnail = 'http://' + window.location.host + '/' + project.projectThumbnail;
            }
            return _jsx('div', {
                className: 'container'
            }, void 0, _ref, this.state.loading && _ref2, !this.state.loading && _jsx('div', {
                className: 'row',
                style: { marginTop: '90px' }
            }, void 0, _jsx('div', {
                className: 'col-md-12'
            }, void 0, _jsx('div', {
                className: ''
            }, void 0, _jsx('button', {
                className: 'btn btn-lg bg-warning text-white float-right',
                onClick: this.updateProject
            }, void 0, 'Update')), _jsx('div', {
                className: 'card border-0 transform-on-hover'
            }, void 0, _jsx('div', {
                className: 'card-img-container'
            }, void 0, _jsx('a', {
                href: '#'
            }, void 0, _jsx('img', {
                className: 'card-img-top',
                src: thumbnail,
                alt: project.title
            })), _jsx('a', {
                href: '#',
                className: 'btn btn-info btn-link top-left bg-dard',
                'data-toggle': 'tooltip',
                title: 'Location'
            }, void 0, _jsx('span', {
                className: 'align-middle'
            }, void 0, project.address && project.address.city), _ref3), _jsx('div', {
                className: 'bottom-left bg-dark px-1'
            }, void 0, _jsx('span', {}, void 0, '$\xA0', project.totalMoneyInUSD), '\xA0\xA0', _ref4, '\xA0', _jsx('span', {}, void 0, project.totalMoneyInBTC))), _jsx('div', {
                className: 'p-2'
            }, void 0, _jsx('div', {
                className: 'text-left'
            }, void 0, _jsx('span', {}, void 0, 'Tickets From $', project.ticketPriceInUSD), _jsx('span', {
                className: 'float-right'
            }, void 0, daysLeft, ' Days Left')), _jsx('h3', {
                className: 'fb text-center mb-2'
            }, void 0, project.title), _jsx('div', {
                className: 'row divider text-center'
            }, void 0, _jsx('div', {
                className: 'col-xs-12 col-sm-4 emphasis'
            }, void 0, _jsx('h5', {}, void 0, _jsx('strong', {}, void 0, ' ', project.donatedBTC.toFixed(8), ' ')), _ref5), _jsx('div', {
                className: 'col-xs-12 col-sm-4 emphasis'
            }, void 0, _jsx('h5', {}, void 0, _jsx('strong', {}, void 0, project.donatedETH.toFixed(8))), _ref6), _jsx('div', {
                className: 'col-xs-12 col-sm-4 emphasis'
            }, void 0, _jsx('h5', {}, void 0, _jsx('strong', {}, void 0, ' ', project.donatedLTC.toFixed(8), ' ')), _ref7)))))), _ref8);
        }
    }]);

    return ProjectDetailView;
}(_react2.default.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        project: state.app.project
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProjectDetailView);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactCountryRegionSelector = __webpack_require__(15);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _ProjectItem = __webpack_require__(129);

var _ProjectItem2 = _interopRequireDefault(_ProjectItem);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});
({
    "gallery-block": "_3OTASnFyiGX0HAyCWwvwjz",
    "heading": "_3O53eapAbVLnVSE9swKtAB",
    "cards-gallery": "_2IGOZFOr0LAOKcWtmvI_vS",
    "card": "_3vLWJbo1qbzLPaJDTTsUQh",
    "card-body": "_2K7c-ToTuXVgVJUmAwtLQQ",
    "transform-on-hover": "UPsmNVvtWwukvOi8ZiMuK"
});

var _AppActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, '...loading');

var _ref2 = _jsx('div', {
    className: 'heading text-center'
}, void 0, _jsx('h2', {
    className: 'fb text-uppercase'
}, void 0, 'Global\'s #1 Project Funding'));

var _ref3 = _jsx(_Footer2.default, {});

var UserBrowseProjects = function (_Component) {
    _inherits(UserBrowseProjects, _Component);

    function UserBrowseProjects(props) {
        _classCallCheck(this, UserBrowseProjects);

        var _this = _possibleConstructorReturn(this, (UserBrowseProjects.__proto__ || Object.getPrototypeOf(UserBrowseProjects)).call(this, props));

        _this.searchProject = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, {
                    search: event.target.value
                }));
            };
        };

        _this.gotoHome = function (id) {
            _reactRouter.browserHistory.push('/' + id);
        };

        _this.filterData = function () {
            var newData = [];
            var keyword = _this.state.search.toLowerCase();
            for (var idx in _this.props.projects) {
                var val = _this.props.projects[idx];
                if (val._id.toLowerCase().includes(keyword) || val.title.toLowerCase().includes(keyword) || val.subTitle.toLowerCase().includes(keyword) || val.shortDescription.includes(keyword) || val.address.country.includes(keyword) || val.address.city.includes(keyword)) {
                    if (_this.state.country) {
                        if (_this.state.country == val.address.country) {
                            newData.push(val);
                        }
                    } else if (_this.state.city) {
                        if (_this.state.city == val.address.city) {
                            newData.push(val);
                        }
                    } else {
                        newData.push(val);
                    }
                }
            }
            return newData;
        };

        _this.state = {
            loading: true,
            search: '',
            country: '',
            region: ''
        };

        _this.searchProject = _this.searchProject.bind(_this);
        return _this;
    }

    _createClass(UserBrowseProjects, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                if (token == null || token == 'null') {
                    _reactRouter.browserHistory.push('/signin');
                }
                this.setState(_extends({}, this.state, { token: token }));
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _AppActions.fetchProjects)());
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.projects !== nextProps.projects && nextProps.projects && nextProps.projects.length > 0) {
                this.setState(_extends({}, this.state, { loading: false }));
            }
        }
    }, {
        key: 'selectCountry',
        value: function selectCountry(val) {
            var city = val ? this.state.city : '';
            this.setState({ country: val, city: city });
        }
    }, {
        key: 'selectRegion',
        value: function selectRegion(val) {
            this.setState({ city: val });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                country = _state.country,
                region = _state.region;

            var gallery = '';
            var newProjects = this.filterData();
            if (newProjects) {
                gallery = newProjects.map(function (project) {
                    return _jsx(_ProjectItem2.default, {
                        project: project,
                        gotoHome: _this2.gotoHome
                    });
                });
            }

            return _jsx('section', {
                className: 'gallery-block cards-gallery'
            }, void 0, _jsx('div', {
                className: ' mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _jsx(_Header2.default, {
                activePage: this.state.activePage,
                token: this.state.token
            }), this.state.loading && _ref, _ref2, !this.state.loading && _jsx('div', {
                className: 'row ml-1 mb-sm-5 d-flex align-items-baseline'
            }, void 0, _jsx(_TextField2.default, {
                id: 'outlined-search',
                label: 'Search Project',
                className: 'ml-3 ml-sm-0',
                type: 'search',
                value: this.state.search,
                placeholder: 'id, location or title',
                onChange: this.searchProject(''),
                margin: 'normal'
            }), _jsx('div', {
                className: 'mb-sm-2',
                style: { height: '36px' }
            }, void 0, _jsx(_reactCountryRegionSelector.CountryDropdown, {
                defaultOptionLabel: 'Choose a country',
                value: this.state.country,
                onChange: function onChange(val) {
                    return _this2.selectCountry(val);
                },
                style: {
                    fontSize: '1.25rem',
                    padding: '0.25rem',
                    marginLeft: '1rem' }
            }), _jsx(_reactCountryRegionSelector.RegionDropdown, {
                country: country,
                value: this.state.city,
                blankOptionLabel: 'No country selected.',
                defaultOptionLabel: 'Now select a region',
                style: {
                    fontSize: '1.25rem',
                    padding: '0.25rem' },
                onChange: function onChange(val) {
                    return _this2.selectRegion(val);
                }
            })), _jsx('div', {
                className: 'row'
            }, void 0, gallery)), _ref3));
        }
    }]);

    return UserBrowseProjects;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        projects: state.app.projects
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(UserBrowseProjects);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Header2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'User Guide Page');

var _ref3 = _jsx(_Footer2.default, {});

var UserGuide = function (_React$Component) {
    _inherits(UserGuide, _React$Component);

    function UserGuide(props) {
        _classCallCheck(this, UserGuide);

        var _this = _possibleConstructorReturn(this, (UserGuide.__proto__ || Object.getPrototypeOf(UserGuide)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(UserGuide, [{
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return UserGuide;
}(_react2.default.Component);

exports.default = UserGuide;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Header2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Live Chat Page');

var _ref3 = _jsx(_Footer2.default, {});

var LiveChat = function (_React$Component) {
    _inherits(LiveChat, _React$Component);

    function LiveChat(props) {
        _classCallCheck(this, LiveChat);

        var _this = _possibleConstructorReturn(this, (LiveChat.__proto__ || Object.getPrototypeOf(LiveChat)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(LiveChat, [{
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return LiveChat;
}(_react2.default.Component);

exports.default = LiveChat;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _reactBootstrapTable = __webpack_require__(130);

var _reactCountryRegionSelector = __webpack_require__(15);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _AppActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('h3', {
    className: 'fb'
}, void 0, 'My Tickets');

var _ref3 = _jsx('label', {
    className: 'custom-control-label',
    htmlFor: 'customCheck1'
}, void 0, 'Payed Tickets');

var _ref4 = _jsx('label', {
    className: 'custom-control-label',
    htmlFor: 'customCheck2'
}, void 0, 'UnPayed Tickets');

var _ref5 = _jsx(_reactBootstrapTable.TableHeaderColumn, {
    dataField: '_id',
    isKey: true,
    hidden: true,
    dataAlign: 'center',
    dataSort: true
}, void 0, 'Product ID');

var _ref6 = _jsx(_reactBootstrapTable.TableHeaderColumn, {
    dataField: 'title',
    dataSort: true
}, void 0, 'Title');

var _ref7 = _jsx(_reactBootstrapTable.TableHeaderColumn, {
    dataField: 'totalTickets',
    dataSort: true
}, void 0, 'Selected Tickets');

var _ref8 = _jsx(_reactBootstrapTable.TableHeaderColumn, {
    dataField: 'coins',
    dataSort: true
}, void 0, 'Coins(BTC/ETH/LTC)');

var _ref9 = _jsx(_reactBootstrapTable.TableHeaderColumn, {
    dataField: 'datePaid'
}, void 0, 'Paid Date');

var _ref10 = _jsx(_Footer2.default, {});

var MyTickets = function (_Component) {
    _inherits(MyTickets, _Component);

    function MyTickets(props) {
        _classCallCheck(this, MyTickets);

        var _this = _possibleConstructorReturn(this, (MyTickets.__proto__ || Object.getPrototypeOf(MyTickets)).call(this, props));

        _this.findProject = function (ID) {
            for (var index in _this.props.res.projects) {
                if (_this.props.res.projects[index]._id == ID) {
                    return _this.props.res.projects[index];
                }
            }
        };

        _this.searchProject = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, {
                    search: event.target.value
                }));
            };
        };

        _this.gotoHome = function (id) {
            _reactRouter.browserHistory.push('/home/' + id);
        };

        _this.priceFormatter = function (cell, row) {
            return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
        };

        _this.actionFormatter = function (cell, row) {
            return _jsx('button', {
                className: 'btn btn-info',
                onClick: function onClick() {
                    return _this.gotoHome(row.projectID);
                }
            }, void 0, 'Purchase');
        };

        _this.handlePayedFilter = function (name) {
            _this.setState(_extends({}, _this.state, _defineProperty({}, name.target.name, name.target.checked)));
        };

        _this.state = {
            loading: true,
            search: '',
            country: '',
            region: '',
            payed: true,
            unPayed: false
        };

        _this.searchProject = _this.searchProject.bind(_this);
        return _this;
    }

    _createClass(MyTickets, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                if (token == null || token == 'null') {
                    _reactRouter.browserHistory.push('/signin');
                }
                this.setState(_extends({}, this.state, { token: token }));
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _AppActions.fetchUser)());
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.res !== nextProps.res) {
                this.setState(_extends({}, this.state, { loading: false }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var res = this.props.res;

            var data = [];
            if (!this.state.loading && res) {
                for (var sub in res.user.subProjects) {
                    var selected = res.user.subProjects[sub];
                    var project = this.findProject(selected.projectID);
                    if (project) {
                        selected.title = project.title;
                        var a = (0, _moment2.default)(project.fundingDuration, 'YYYY-MM-DD');
                        var b = (0, _moment2.default)().format('YYYY-MM-DD');
                        selected.days = a.diff(b, 'days');
                        selected.startDate = (0, _moment2.default)(selected.dateAdded).format('MMM DD, YYYY');
                        if (!selected.datePaid || selected.datePaid == '-' || selected.datePaid == 'Invalid date') {
                            selected.datePaid = '-';
                        } else {
                            selected.datePaid = (0, _moment2.default)(selected.datePaid).format('MMM DD, YYYY');
                        }
                        selected.coins = selected.paidAmountBTC + '/' + selected.paidAmountETH + '/' + selected.paidAmountLTC;
                        if (this.state.payed && selected.datePaid != '-') {
                            data.push(selected);
                        }
                        if (this.state.unPayed && selected.datePaid == '-') {
                            data.push(selected);
                        }
                    }
                }
            }
            return _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _jsx(_AuthHeader2.default, {
                token: this.state.token
            }), this.state.loading && _ref, !this.state.loading && _jsx('div', {}, void 0, _jsx('div', {
                className: 'd-flex align-items-center'
            }, void 0, _ref2, _jsx('div', {
                className: 'custom-control custom-checkbox mx-2'
            }, void 0, _jsx('input', {
                type: 'checkbox',
                className: 'custom-control-input',
                name: 'payed',
                id: 'customCheck1',
                onChange: this.handlePayedFilter,
                checked: this.state.payed
            }), _ref3), _jsx('div', {
                className: 'custom-control custom-checkbox mx-2'
            }, void 0, _jsx('input', {
                type: 'checkbox',
                className: 'custom-control-input',
                id: 'customCheck2',
                name: 'unPayed',
                onChange: this.handlePayedFilter
            }), _ref4)), _jsx(_reactBootstrapTable.BootstrapTable, {
                data: data,
                striped: true,
                hover: true,
                pagination: true
            }, void 0, _ref5, _ref6, _ref7, _jsx(_reactBootstrapTable.TableHeaderColumn, {
                dataField: 'paidTickets',
                dataFormat: this.priceFormatter
            }, void 0, 'Purchased Tickets'), _ref8, _ref9, _jsx(_reactBootstrapTable.TableHeaderColumn, {
                dataField: 'projectID',
                dataFormat: this.actionFormatter,
                'export': false
            }))), _ref10);
        }
    }]);

    return MyTickets;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        res: state.app.res
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyTickets);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouter = __webpack_require__(2);

var _Paper = __webpack_require__(23);

var _Paper2 = _interopRequireDefault(_Paper);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _core = __webpack_require__(25);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _AuthActions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h2', {
    className: 'text-center text-uppercase'
}, void 0, 'Sign In');

var _ref2 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var SignIn = function (_Component) {
    _inherits(SignIn, _Component);

    function SignIn(props) {
        _classCallCheck(this, SignIn);

        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

        _this.handleChange = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, _defineProperty({}, name, event.target.value)));
            };
        };

        _this.navigate = function (url) {
            _reactRouter.browserHistory.push(url);
        };

        _this.signIn = function () {
            var self = _this;
            self.setState(_extends({}, self.state, { isCreate: true, errOnCreate: '' }));
            (0, _apiCaller2.default)('users/signin', 'POST', { user: _this.state }).then(function (res, err) {
                var message = 'Successfully created';
                if (res.errors) {
                    message = res.errors;
                } else {
                    window.localStorage.setItem('smartprojectadmin', token);
                    _this.props.dispatch((0, _AuthActions.saveToken)(res.user.token));
                    _reactRouter.browserHistory.goBack();
                }
                self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
            });
        };

        _this.state = {
            email: '',
            password: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SignIn, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'container mt-100'
            }, void 0, _jsx('div', {
                className: 'card',
                style: { width: '33%', margin: '0 auto', minWidth: '330px' }
            }, void 0, _jsx('div', {
                className: 'card-head mt-5 text-center'
            }, void 0, _ref, this.state.isCreate && _ref2, !this.state.isCreate && _jsx('div', {
                className: 'warning-color text-center'
            }, void 0, this.state.errOnCreate)), _jsx('div', {
                className: 'd-flex justify-content-center align-items-center flex-column card-body'
            }, void 0, _jsx(_TextField2.default, {
                id: 'outlined-email-input',
                label: 'Email',
                className: 'textField',
                type: 'email',
                name: 'email',
                value: this.state.email,
                onChange: this.handleChange('email'),
                autoComplete: 'email',
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                id: 'standard-password-input',
                label: 'Password',
                className: 'textField',
                type: 'password',
                value: this.state.password,
                onChange: this.handleChange('password'),
                autoComplete: 'current-password',
                margin: 'normal'
            }), _jsx('button', {
                onClick: function onClick() {
                    return _this2.signIn();
                },
                className: 'btn btn-lg bg-warning text-white mt-2 mb-2'
            }, void 0, 'Sign In'))));
        }
    }]);

    return SignIn;
}(_react.Component);

function mapStateToProps(state) {
    return {
        token: state.auth.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignIn);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouter = __webpack_require__(2);

var _Paper = __webpack_require__(23);

var _Paper2 = _interopRequireDefault(_Paper);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _core = __webpack_require__(25);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _AuthActions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h2', {
    className: 'text-center text-uppercase'
}, void 0, 'Sign In');

var _ref2 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var CustomerSignIn = function (_Component) {
    _inherits(CustomerSignIn, _Component);

    function CustomerSignIn(props) {
        _classCallCheck(this, CustomerSignIn);

        var _this = _possibleConstructorReturn(this, (CustomerSignIn.__proto__ || Object.getPrototypeOf(CustomerSignIn)).call(this, props));

        _this.handleChange = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, _defineProperty({}, name, event.target.value)));
            };
        };

        _this.navigate = function (url) {
            _reactRouter.browserHistory.push(url);
        };

        _this.signIn = function () {
            var self = _this;
            self.setState(_extends({}, self.state, { isCreate: true, errOnCreate: '' }));
            (0, _apiCaller2.default)('users/customersignin', 'POST', { user: _this.state }).then(function (res, err) {
                var message = 'Successfully created';
                if (res.errors) {
                    message = res.errors;
                } else {
                    window.localStorage.setItem('smartproject', JSON.stringify({ token: res.user.token, isSignIn: true }));
                    _this.props.dispatch((0, _AuthActions.saveToken)(res.user.token));
                    _reactRouter.browserHistory.goBack();
                }
                self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
            });
        };

        _this.state = {
            email: '',
            password: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(CustomerSignIn, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'container mt-100'
            }, void 0, _jsx('div', {
                className: 'card',
                style: { width: '33%', margin: '0 auto', minWidth: '330px' }
            }, void 0, _jsx('div', {
                className: 'card-head mt-5 text-center'
            }, void 0, _ref, this.state.isCreate && _ref2, !this.state.isCreate && _jsx('div', {
                className: 'warning-color text-center'
            }, void 0, this.state.errOnCreate)), _jsx('div', {
                className: 'd-flex justify-content-center align-items-center flex-column card-body'
            }, void 0, _jsx(_TextField2.default, {
                id: 'outlined-email-input',
                label: 'Email',
                className: 'textField',
                type: 'email',
                name: 'email',
                value: this.state.email,
                onChange: this.handleChange('email'),
                autoComplete: 'email',
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                id: 'standard-password-input',
                label: 'Password',
                className: 'textField',
                type: 'password',
                value: this.state.password,
                onChange: this.handleChange('password'),
                autoComplete: 'current-password',
                margin: 'normal'
            }), _jsx('button', {
                onClick: function onClick() {
                    return _this2.signIn();
                },
                className: 'btn btn-lg bg-warning text-white mt-4 mb-3'
            }, void 0, 'Sign In'), _jsx('div', {
                className: 'mb-2'
            }, void 0, 'Do you want to have an account? ', _jsx('a', {
                href: 'javascript:void(0)',
                onClick: function onClick() {
                    return _this2.navigate('/user/signup');
                },
                className: 'warning-color'
            }, void 0, 'Sign Up')))));
        }
    }]);

    return CustomerSignIn;
}(_react.Component);

function mapStateToProps(state) {
    return {
        token: state.auth.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CustomerSignIn);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouter = __webpack_require__(2);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h2', {
    className: 'text-center text-uppercase'
}, void 0, 'Sign Up');

var _ref2 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var CustomerSignUp = function (_React$Component) {
    _inherits(CustomerSignUp, _React$Component);

    function CustomerSignUp(props) {
        _classCallCheck(this, CustomerSignUp);

        var _this = _possibleConstructorReturn(this, (CustomerSignUp.__proto__ || Object.getPrototypeOf(CustomerSignUp)).call(this, props));

        _this.handleChange = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, _defineProperty({}, name, event.target.value)));
            };
        };

        _this.navigate = function (url) {
            _reactRouter.browserHistory.push(url);
        };

        _this.signUp = function () {
            var self = _this;
            self.setState(_extends({}, self.state, { isCreate: true }));
            (0, _apiCaller2.default)('users/customersignup', 'POST', { user: _this.state }).then(function (res, err) {
                var message = 'Successfully created';
                if (res.errors) {
                    message = res.errors;
                    self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
                } else {
                    localStorage.setItem('smartproject', res.user.token);
                    _reactRouter.browserHistory.push('/');
                }
            });
        };

        _this.state = {
            email: '',
            password: '',
            password_repeat: '',
            isCreate: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(CustomerSignUp, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'container mt-100'
            }, void 0, _jsx('div', {
                className: 'card',
                style: { width: '33%', margin: '0 auto', minWidth: '330px' }
            }, void 0, _jsx('div', {
                className: 'card-head mt-5 text-center'
            }, void 0, _ref, this.state.isCreate && _ref2, !this.state.isCreate && _jsx('div', {
                className: 'warning-color text-center'
            }, void 0, this.state.errOnCreate)), _jsx('div', {
                className: 'd-flex justify-content-center align-items-center flex-column card-body'
            }, void 0, _jsx(_TextField2.default, {
                id: 'outlined-email-input',
                label: 'Email',
                className: 'textField',
                type: 'email',
                name: 'email',
                autoComplete: 'email',
                value: this.state.email,
                onChange: this.handleChange('email'),
                margin: 'normal'
            }), _jsx('button', {
                onClick: function onClick() {
                    return _this2.signUp();
                },
                className: 'btn btn-lg bg-warning text-white mt-4 mb-4'
            }, void 0, 'Sign Up'), _jsx('p', {}, void 0, 'Do you already have an account? ', _jsx('a', {
                href: 'javascript:void(0)',
                onClick: function onClick() {
                    return _this2.navigate('/user/signin');
                },
                className: 'warning-color'
            }, void 0, 'Sign In')))));
        }
    }]);

    return CustomerSignUp;
}(_react2.default.Component);

exports.default = CustomerSignUp;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _axios = __webpack_require__(55);

var _axios2 = _interopRequireDefault(_axios);

var _videoReact = __webpack_require__(18);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _Divider = __webpack_require__(24);

var _Divider2 = _interopRequireDefault(_Divider);

var _Button = __webpack_require__(20);

var _Button2 = _interopRequireDefault(_Button);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _reactCountryRegionSelector = __webpack_require__(15);

var _AdminHeader = __webpack_require__(10);

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _AppActions = __webpack_require__(5);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {
    className: 'previewText'
}, void 0, 'Project Thumbnail');

var _ref2 = _jsx('div', {}, void 0, 'No Image Added');

var _ref3 = _jsx('i', {
    className: 'fa fa-close fa-2x',
    'aria-hidden': 'true'
});

var _ref4 = _jsx('div', {
    className: 'previewText'
}, void 0, 'No Video');

var _ref5 = _jsx(_AdminHeader2.default, {});

var _ref6 = _jsx('span', {
    className: 'fs-125'
}, void 0, 'Update the Project');

var _ref7 = _jsx('span', {
    className: 'warning-color'
}, void 0, 'Please wait...');

var _ref8 = _jsx('i', {
    className: 'fa fa-trash fa-2x'
});

var _ref9 = _jsx('i', {
    className: 'fa fa-plus'
});

var _ref10 = _jsx(_Divider2.default, {});

var _ref11 = _jsx(_Button2.default, {
    type: 'submit',
    variant: 'contained',
    component: 'span'
}, void 0, 'Image Upload');

var _ref12 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var _ref13 = _jsx('div', {}, void 0, 'Project Thumbnail');

var _ref14 = _jsx(_Button2.default, {
    type: 'submit',
    variant: 'contained',
    component: 'span'
}, void 0, 'Teaser Video Upload');

var _ref15 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var _ref16 = _jsx('div', {}, void 0, '...loading');

var _ref17 = _jsx(_Footer2.default, {});

var ProjectDetail = function (_Component) {
    _inherits(ProjectDetail, _Component);

    function ProjectDetail(props) {
        _classCallCheck(this, ProjectDetail);

        var _this = _possibleConstructorReturn(this, (ProjectDetail.__proto__ || Object.getPrototypeOf(ProjectDetail)).call(this, props));

        _this.handleKeyFactsChange = function (idx) {
            return function (evt) {
                var newKeyFacts = _this.state.key_facts.map(function (key_fact, sidx) {
                    if (idx !== sidx) return key_fact;
                    return _extends({}, key_fact, { name: evt.target.value });
                });

                _this.setState({ key_facts: newKeyFacts });
            };
        };

        _this.handleAddKeyFact = function () {
            _this.setState({ key_facts: _this.state.key_facts.concat([{ name: '' }]) });
        };

        _this.handleRemoveKeyFact = function (idx) {
            return function () {
                _this.setState({ key_facts: _this.state.key_facts.filter(function (s, sidx) {
                        return idx !== sidx;
                    }) });
            };
        };

        _this.removeImage = function (key) {
            // const key = e.target.getAttribute('data-key');
            var images = _this.state.images;
            delete images[key];
            var index = -1;
            var arr_length = images ? images.length : 0;
            var resIndex = -1;
            var result = [];

            while (++index < arr_length) {
                var value = images[index];

                if (value) {
                    result[++resIndex] = value;
                }
            }
            var imagePreviewUrl = result.length == 0 ? null : _this.state.imagePreviewUrl;
            _this.setState(_extends({}, _this.state, {
                images: result,
                imagePreviewUrl: imagePreviewUrl
            }));
        };

        _this.handleKeyDown = function (name) {
            return function (event) {
                if (event.keyCode == 13) {
                    _this.updateCoinPrice(event.target.value);
                }
            };
        };

        _this.updateCoinPrice = function (value) {
            var self = _this;
            (0, _apiCaller2.default)('fxrate').then(function (json) {
                var ticket_price_ETH = value / parseFloat(json.ETH_BTC);
                var ticket_price_LTC = value / parseFloat(json.LTC_BTC);
                var ticket_price_USD = value * parseFloat(json.BTC_USD);
                var totalUSD = ticket_price_USD * _this.state.total_tickets;
                var totalBTC = value * _this.state.total_tickets;
                self.setState(_extends({}, self.state, {
                    ticket_price_BTC: value,
                    ticket_price_ETH: ticket_price_ETH.toFixed(8),
                    ticket_price_LTC: ticket_price_LTC.toFixed(8),
                    ticket_price_USD: ticket_price_USD.toFixed(3),
                    total_money_in_USD: totalUSD.toFixed(3),
                    total_money_in_BTC: totalBTC.toFixed(8)
                }));
            });
            _this.setState(_extends({}, _this.state, {
                ticket_price_BTC: value
            }));
        };

        _this.handleBlur = function (name) {
            return function (event) {
                if (event.target.value) {
                    _this.updateCoinPrice(event.target.value);
                }
            };
        };

        _this.handleChange = function (name) {
            return function (event) {
                var _extends2;

                _this.setState(_extends({}, _this.state, (_extends2 = {}, _defineProperty(_extends2, name, event.target.value), _defineProperty(_extends2, name + 'Err', event.target.required && !event.target.value ? true : false), _extends2)));
            };
        };

        _this.setThumbnail = function (image, key) {
            window.document.querySelectorAll('div.gallery img').forEach(function (each) {
                each.classList.remove('active');
            });
            window.document.querySelectorAll('div.gallery img')[key].classList.add('active');
            _this.setState(_extends({}, _this.state, { projectThumbnail: image }));
        };

        _this.navigate = function (url) {
            if (url.includes('admin') && !_this.state.isAuth) {
                _reactRouter.browserHistory.push('/signin');
            } else {
                _reactRouter.browserHistory.push(url);
            }
        };

        _this.updateProject = function () {
            var self = _this;
            _this.setState(_extends({}, _this.state, {
                titleErr: !_this.state.title ? true : false,
                sub_titleErr: !_this.state.sub_title ? true : false,
                short_descriptionErr: !_this.state.short_description ? true : false,
                long_descriptionErr: !_this.state.long_description ? true : false,
                ticket_price_BTCErr: !_this.state.ticket_price_BTC || _this.state.ticket_price_BTC == '0' ? true : false,
                total_ticketsErr: !_this.state.total_tickets || _this.state.total_tickets == '0' ? true : false,
                funding_durationErr: (0, _moment2.default)(_this.state.funding_duration, 'YYYY-MM-DD').isBefore((0, _moment2.default)()) ? true : false,
                maximum_available_tickets_per_personErr: !_this.state.maximum_available_tickets_per_person || _this.state.maximum_available_tickets_per_person == '0' || _this.state.maximum_available_tickets_per_person > '10' ? true : false,
                countryErr: !_this.state.country ? true : false,
                cityErr: !_this.state.city ? true : false,
                coin_BTCErr: !_this.state.coin_BTC ? true : false,
                coin_ETHErr: !_this.state.coin_ETH ? true : false,
                coin_LTCErr: !_this.state.coin_LTC ? true : false,
                totalMoneyInUSDErr: !_this.state.total_money_in_USD ? true : false,
                totalMoneyInBTCErr: !_this.state.total_money_in_BTC ? true : false
            }), function () {
                if (_this.state.titleErr || _this.state.sub_titleErr || _this.state.short_descriptionErr || _this.state.long_descriptionErr || _this.state.ticket_price_BTCErr || _this.state.total_ticketsErr || _this.state.maximum_available_tickets_per_personErr || _this.state.countryErr || _this.state.cityErr || _this.state.coin_BTCErr || _this.state.coin_ETHErr || _this.state.coin_LTCErr) {
                    return;
                } else {
                    _this.setState(_extends({}, _this.state, {
                        isCreate: true
                    }));
                    (0, _apiCaller2.default)('updateProjects', 'POST', { project: _this.state }).then(function (res, err) {
                        console.log('loading finished', res, err);
                        var message = 'Successfully updated';
                        if (res.errors) {
                            message = res.errors;
                        }
                        self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
                    });
                }
            });
        };

        _this.deleteProject = function () {
            var self = _this;
            _this.setState(_extends({}, _this.state, { isCreate: true }));
            (0, _apiCaller2.default)('deleteProjects', 'POST', { _id: _this.state._id }).then(function (res, err) {
                self.setState(_extends({}, self.state, { isCreate: false }));
                if (res.errors) {
                    var message = 'Fail to delete project.';
                    self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
                } else {
                    _this.navigate('/admin/project');
                }
            });
        };

        _this.handleVideoUpload = function (files) {
            var self = _this;
            _this.setState(_extends({}, _this.state, { videoUpload: true }));
            var file = files[0];
            var url = '/api/uploadVideo';
            var formData = new FormData();
            formData.append('uploadFile', file);
            var config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            (0, _axios.post)(url, formData, config).then(function (res) {
                console.log('loading finished', res);
                self.setState(_extends({}, self.state, { videoUpload: false, video: res.data, videoPreviewUrl: res.data }));
            }).catch(function (err) {
                console.log('loading finished', err);
                self.setState(_extends({}, self.state, { videoUpload: false }));
            });
        };

        _this.handleFileUpload = function (files) {
            if (_this.state.images.length == 10) {
                alert("You cannot add an image any more unless you remove any one.");
                return;
            }
            var self = _this;
            _this.setState(_extends({}, _this.state, { imageUpload: true }));
            var file = files[0];
            var url = '/api/upload';
            var formData = new FormData();
            formData.append('uploadFile', file);
            var config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            (0, _axios.post)(url, formData, config).then(function (res) {
                console.log('loading finished', res);
                var images = self.state.images;
                images.push(res.data);
                self.setState(_extends({}, self.state, {
                    imageUpload: false,
                    projectThumbnail: res.data,
                    images: images
                }));
            }).catch(function (err) {
                console.log('loading finished', err);
                self.setState(_extends({}, self.state, { imageUpload: false }));
            });
        };

        _this.state = {
            loading: true,
            isCreate: false,
            errOnCreate: '',
            imageUpload: false,
            videoUpload: false,
            images: [],
            title: '',
            sub_title: '',
            funding_duration: '2020-05-24',
            short_description: '',
            long_description: '',
            ticket_price_BTC: '',
            ticket_price_ETH: '',
            ticket_price_LTC: '',
            ticket_price_USD: '',
            total_tickets: '',
            maximum_available_tickets_per_person: '',
            maximum_available_tickets: '',
            start_date: '',
            country: '',
            city: '',
            postal_code: '',
            name: '',
            key_facts: [{ name: '' }],
            coin_BTC: '',
            coin_ETH: '',
            coin_LTC: '',
            imagesToServer: []
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleFileUpload = _this.handleFileUpload.bind(_this);
        _this.navigate = _this.navigate.bind(_this);
        return _this;
    }

    _createClass(ProjectDetail, [{
        key: 'selectCountry',
        value: function selectCountry(val) {
            this.setState({
                country: val,
                countryErr: !val ? true : false
            });
        }
    }, {
        key: 'selectCity',
        value: function selectCity(val) {
            this.setState({
                city: val,
                cityErr: !val ? true : false
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
            this.props.dispatch((0, _AppActions.fetchProject)(id));
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                if (token == null) {
                    _reactRouter.browserHistory.push('/signin');
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.project !== nextProps.project && nextProps.project) {
                this.setState(_extends({}, this.state, {
                    loading: false,
                    _id: nextProps.project._id,
                    title: nextProps.project.title,
                    sub_title: nextProps.project.subTitle,
                    short_description: nextProps.project.shortDescription,
                    long_description: nextProps.project.fullDescription,
                    country: nextProps.project.address.country,
                    city: nextProps.project.address.city,
                    postal_code: nextProps.project.address.postalCode,
                    coin_BTC: nextProps.project.wallet.BTC.address,
                    coin_ETH: nextProps.project.wallet.ETH.address,
                    coin_LTC: nextProps.project.wallet.LTC.address,
                    ticket_price_BTC: nextProps.project.ticketPriceInBTC,
                    ticket_price_ETH: nextProps.project.ticketPriceInETH,
                    ticket_price_LTC: nextProps.project.ticketPriceInLTC,
                    ticket_price_USD: nextProps.project.ticketPriceInUSD,
                    videoPreviewUrl: nextProps.project.video,
                    images: nextProps.project.images,
                    projectThumbnail: nextProps.project.projectThumbnail,
                    total_tickets: nextProps.project.totalTickets,
                    maximum_available_tickets_per_person: nextProps.project.maximumAvailableTicketsPerPerson,
                    maximum_available_tickets: nextProps.project.maximumAvailableTickets,
                    funding_duration: nextProps.project.fundingDuration,
                    key_facts: nextProps.project.keyfacts,
                    total_money_in_BTC: nextProps.project.totalMoneyInBTC,
                    total_money_in_USD: nextProps.project.totalMoneyInUSD
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                projectThumbnail = _state.projectThumbnail,
                videoPreviewUrl = _state.videoPreviewUrl;

            var $imagePreview = null,
                $videoPreview = null;
            if (projectThumbnail) {
                $imagePreview = _jsx('img', {
                    src: 'http://' + window.location.host + '/' + projectThumbnail
                });
            } else {
                $imagePreview = _ref;
            }

            var $imageGallery = _ref2;
            if (this.state.images.length > 0) {
                $imageGallery = this.state.images.map(function (image, key) {
                    return _jsx('div', {
                        className: 'gallery transform-on-hover card-img-container'
                    }, key, _jsx('img', {
                        src: 'http://' + window.location.host + '/' + image,
                        onClick: _this2.setThumbnail.bind(_this2, image, key),
                        alt: 'project image',
                        width: '600',
                        height: '400'
                    }), _jsx('a', {
                        href: '#',
                        className: 'btn btn-link gallery-top-right hidden-close',
                        onClick: _this2.removeImage.bind(null, key),
                        'data-key': key
                    }, void 0, _ref3));
                }, this);
            }

            if (videoPreviewUrl && videoPreviewUrl != '') {
                $videoPreview = _jsx(_videoReact.Player, {}, void 0, _jsx('source', {
                    src: 'http://' + window.location.host + '/' + videoPreviewUrl
                }));
            } else {
                $videoPreview = _ref4;
            }
            var inputProps = {
                step: 300
            };
            return _jsx('div', {}, void 0, _ref5, _jsx('div', {
                className: 'container-fluid mt-100'
            }, void 0, !this.state.loading && _jsx('div', {
                className: 'container bg-white mt-100'
            }, void 0, _jsx('div', {
                className: 'card bg-light'
            }, void 0, _jsx('div', {
                className: 'card-body card-header card-title text-uppercase'
            }, void 0, _ref6, ' ', this.state.isCreate && _ref7, _jsx('button', {
                className: 'btn btn-lg bg-warning text-white float-right',
                onClick: this.updateProject
            }, void 0, 'Update'), _jsx('button', {
                className: 'btn btn-lg bg-warning text-white float-right mr-2',
                onClick: this.deleteProject
            }, void 0, 'Delete'), _jsx('p', {
                className: 'warning-color'
            }, void 0, !this.state.isCreate && this.state.errOnCreate)), _jsx('div', {
                className: 'container bg-white'
            }, void 0, _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'title',
                label: 'Title',
                className: 'textField w-20rem',
                style: { margin: 8 },
                helperText: 'Up to 30 letters',
                value: this.state.title,
                onChange: this.handleChange('title'),
                margin: 'normal',
                inputProps: inputProps
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'sub_title',
                label: 'Sub Title',
                className: 'textField w-20rem',
                style: { margin: 8 },
                helperText: 'Up to 45 letters',
                value: this.state.sub_title,
                onChange: this.handleChange('sub_title'),
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'funding_duration',
                type: 'date',
                label: 'Funding Duration',
                style: { margin: 8 },
                className: 'textField',
                value: this.state.funding_duration,
                margin: 'normal',
                onChange: this.handleChange('funding_duration')
            })), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'short_description',
                label: 'Short Description',
                className: 'textField w-20rem',
                style: { margin: 8 },
                multiline: true,
                rowsMax: '4',
                helperText: 'Up to 50 words',
                value: this.state.short_description,
                onChange: this.handleChange('short_description'),
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'long_description',
                label: 'Long Description',
                className: 'textField w-40rem',
                style: { margin: 8 },
                multiline: true,
                rowsMax: '7',
                helperText: 'Up to 5000 words',
                value: this.state.long_description,
                onChange: this.handleChange('long_description'),
                margin: 'normal'
            })), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'ticket_price_BTC',
                label: 'Ticket Price in BTC',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in BTC',
                value: this.state.ticket_price_BTC,
                onChange: this.handleChange('ticket_price_BTC'),
                onKeyDown: this.handleKeyDown('ticket_price_BTC'),
                onBlur: this.handleBlur('ticket_price_BTC')
            }), _jsx(_TextField2.default, {
                required: true,
                disabled: true,
                id: 'ticket_price_USD',
                label: 'Ticket Price in USD',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in USD',
                value: this.state.ticket_price_USD,
                onChange: this.handleChange('ticket_price_USD')
            }), _jsx(_TextField2.default, {
                required: true,
                disabled: true,
                id: 'ticket_price_ETH',
                label: 'Ticket Price in ETH',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in ETH',
                value: this.state.ticket_price_ETH,
                onChange: this.handleChange('ticket_price_ETH')
            }), _jsx(_TextField2.default, {
                required: true,
                disabled: true,
                id: 'ticket_price_LTC',
                label: 'Ticket Price in LTC',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in LTC',
                value: this.state.ticket_price_LTC,
                onChange: this.handleChange('ticket_price_LTC')
            })), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'total_tickets',
                label: 'Total Tickets',
                type: 'number',
                className: 'textField',
                style: { margin: 8 },
                margin: 'normal',
                value: this.state.total_tickets,
                onChange: this.handleChange('total_tickets')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'total_money_in_BTC',
                error: this.state.total_money_in_btcErr,
                label: 'Total Money(BTC)',
                type: 'number',
                className: 'textField',
                style: { margin: 8 },
                margin: 'normal',
                value: this.state.total_money_in_BTC,
                onChange: this.handleChange('total_money_in_BTC')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'total_money_in_USD',
                error: this.state.total_money_in_USDErr,
                label: 'Total Money(USD)',
                type: 'number',
                className: 'textField',
                style: { margin: 8 },
                margin: 'normal',
                value: this.state.total_money_in_USD,
                onChange: this.handleChange('total_money_in_USD')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'maximum_available_tickets_per_person',
                error: this.state.maximum_available_tickets_per_personErr,
                label: 'Maximum Avaliable Tickets per Person',
                className: 'textField',
                helperText: 'Up to 10 tickets',
                type: 'number',
                style: { margin: 8 },
                value: this.state.maximum_available_tickets_per_person,
                margin: 'normal',
                onChange: this.handleChange('maximum_available_tickets_per_person')
            }), _jsx('div', {
                className: 'row d-flex mx-1'
            }, void 0, _jsx(_reactCountryRegionSelector.CountryDropdown, {
                defaultOptionLabel: 'Choose a country',
                value: this.state.country,
                onChange: function onChange(val) {
                    return _this2.selectCountry(val);
                },
                classes: this.state.countryErr ? 'selectErr' : '',
                style: {
                    fontSize: '1.25rem',
                    padding: '0.25rem',
                    marginLeft: '0.5rem' }
            }), _jsx(_reactCountryRegionSelector.RegionDropdown, {
                country: this.state.country,
                value: this.state.city,
                defaultOptionLabel: 'Select a region',
                classes: this.state.cityErr ? 'selectErr' : '',
                style: {
                    fontSize: '1.25rem',
                    padding: '0.25rem',
                    marginRight: '0.5rem' },
                onChange: function onChange(val) {
                    return _this2.selectCity(val);
                }
            }), _jsx(_TextField2.default, {
                id: 'postal_code',
                label: 'Postal Code',
                className: '',
                style: { margin: 8 },
                value: this.state.postal_code,
                margin: 'normal',
                onChange: this.handleChange('postal_code')
            }))), _jsx('div', {
                className: 'row card-body'
            }, void 0, this.state.key_facts.map(function (key_fact, idx) {
                return _jsx('div', {
                    className: 'd-flex'
                }, void 0, _jsx(_TextField2.default, {
                    required: true,
                    id: 'key_facts',
                    label: 'Key Facts',
                    style: { margin: 8 },
                    className: '',
                    helperText: 'key fact',
                    value: key_fact.name,
                    margin: 'normal',
                    onChange: _this2.handleKeyFactsChange(idx)
                }, idx), _jsx('button', {
                    type: 'button',
                    onClick: _this2.handleRemoveKeyFact(idx),
                    className: 'btn btn-link btn-sm'
                }, void 0, _ref8));
            }), _jsx('button', {
                type: 'button',
                onClick: this.handleAddKeyFact,
                className: 'btn btn-link btn-md'
            }, void 0, _ref9, ' Add Key Fact')), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                id: 'my_wallet',
                label: 'My Wallet (BTC)',
                className: 'textField',
                style: { margin: 8 },
                helperText: 'Bitcoin Address',
                value: this.state.coin_BTC,
                margin: 'normal',
                onChange: this.handleChange('coin_BTC')
            }), _jsx(_TextField2.default, {
                id: 'my_wallet',
                label: 'My Wallet (ETH)',
                className: 'textField',
                style: { margin: 8 },
                helperText: 'Etherum Address',
                value: this.state.coin_ETH,
                margin: 'normal',
                onChange: this.handleChange('coin_ETH')
            }), _jsx(_TextField2.default, {
                id: 'my_wallet',
                label: 'My Wallet (LTC)',
                className: 'textField',
                style: { margin: 8 },
                helperText: 'Litecoin Address',
                value: this.state.coin_LTC,
                margin: 'normal',
                onChange: this.handleChange('coin_LTC')
            })), _ref10, _jsx('div', {
                className: 'row m-2 card-body'
            }, void 0, _jsx('div', {
                className: 'mr-3'
            }, void 0, _jsx('div', {}, void 0, _jsx('input', {
                accept: 'image/*',
                style: { display: 'none' },
                id: 'contained-button-file',
                type: 'file',
                onChange: function onChange(e) {
                    return _this2.handleFileUpload(e.target.files);
                },
                name: 'uploadFile'
            }), _jsx('label', {
                htmlFor: 'contained-button-file'
            }, void 0, _ref11, this.state.imageUpload && _ref12)), _jsx('div', {
                className: 'imgPreview'
            }, void 0, _ref13, $imagePreview)), _jsx('div', {}, void 0, $imageGallery)), _jsx('div', {
                className: 'm-2 card-body'
            }, void 0, _jsx('input', {
                accept: 'video/*',
                style: { display: 'none' },
                id: 'contained-video-file',
                type: 'file',
                onChange: function onChange(e) {
                    return _this2.handleVideoUpload(e.target.files);
                },
                name: 'uploadFile'
            }), _jsx('label', {
                htmlFor: 'contained-video-file'
            }, void 0, _ref14, this.state.videoUpload && _ref15), _jsx('div', {
                className: 'videoPreview'
            }, void 0, $videoPreview)), _jsx('div', {
                className: 'card-body card-footer card-title text-uppercase'
            }, void 0, _jsx('button', {
                className: 'btn btn-lg bg-warning text-white float-right',
                onClick: this.updateProject
            }, void 0, 'Update'))))), this.state.loading && _ref16), _ref17);
        }
    }]);

    return ProjectDetail;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        project: state.app.project
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProjectDetail);

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(55);

var _axios2 = _interopRequireDefault(_axios);

var _videoReact = __webpack_require__(18);

var _reactRouter = __webpack_require__(2);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _Divider = __webpack_require__(24);

var _Divider2 = _interopRequireDefault(_Divider);

var _Button = __webpack_require__(20);

var _Button2 = _interopRequireDefault(_Button);

var _AdminHeader = __webpack_require__(10);

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactCountryRegionSelector = __webpack_require__(15);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import 'video-react/dist/video-react.css';

var _ref = _jsx('div', {
    className: 'previewText'
}, void 0, 'Project Thumbnail');

var _ref2 = _jsx('div', {}, void 0, 'No Image Added');

var _ref3 = _jsx('i', {
    className: 'fa fa-close fa-2x',
    'aria-hidden': 'true'
});

var _ref4 = _jsx('div', {
    className: 'previewText'
}, void 0, 'No Video');

var _ref5 = _jsx(_AdminHeader2.default, {});

var _ref6 = _jsx('span', {
    className: 'fs-125'
}, void 0, 'Create New Project');

var _ref7 = _jsx('span', {
    className: 'warning-color'
}, void 0, 'Please wait...');

var _ref8 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var _ref9 = _jsx('i', {
    className: 'fa fa-trash fa-2x'
});

var _ref10 = _jsx('i', {
    className: 'fa fa-plus'
});

var _ref11 = _jsx(_Divider2.default, {});

var _ref12 = _jsx('p', {
    className: 'fb'
}, void 0, 'Project Image Upload');

var _ref13 = _jsx(_Button2.default, {
    type: 'submit',
    variant: 'contained',
    component: 'span'
}, void 0, 'Upload');

var _ref14 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var _ref15 = _jsx('span', {
    className: 'warning-color ml-1'
}, void 0, 'Reqired*');

var _ref16 = _jsx('p', {
    className: 'fb mr-2'
}, void 0, 'Project Teaser Video Upload');

var _ref17 = _jsx(_Button2.default, {
    type: 'submit',
    variant: 'contained',
    component: 'span'
}, void 0, 'Upload');

var _ref18 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var _ref19 = _jsx(_Footer2.default, {});

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.handleKeyFactsChange = function (idx) {
            return function (evt) {
                var newKeyFacts = _this.state.key_facts.map(function (key_fact, sidx) {
                    if (idx !== sidx) return key_fact;
                    return _extends({}, key_fact, { name: evt.target.value });
                });

                _this.setState({ key_facts: newKeyFacts });
            };
        };

        _this.handleAddKeyFact = function () {
            _this.setState({ key_facts: _this.state.key_facts.concat([{ name: '' }]) });
        };

        _this.handleRemoveKeyFact = function (idx) {
            return function () {
                _this.setState({ key_facts: _this.state.key_facts.filter(function (s, sidx) {
                        return idx !== sidx;
                    }) });
            };
        };

        _this.setThumbnail = function (image, key) {
            window.document.querySelectorAll('div.gallery img').forEach(function (each) {
                each.classList.remove('active');
            });
            window.document.querySelectorAll('div.gallery img')[key].classList.add('active');
            _this.setState(_extends({}, _this.state, { projectThumbnail: image }));
        };

        _this.removeImage = function (key) {
            // const key = e.target.getAttribute('data-key');
            var images = _this.state.images;
            delete images[key];
            var index = -1;
            var arr_length = images ? images.length : 0;
            var resIndex = -1;
            var result = [];

            while (++index < arr_length) {
                var value = images[index];

                if (value) {
                    result[++resIndex] = value;
                }
            }
            var projectThumbnail = result.length == 0 ? null : _this.state.projectThumbnail;
            _this.setState(_extends({}, _this.state, {
                images: result,
                projectThumbnail: projectThumbnail
            }));
        };

        _this.handleKeyDown = function (name) {
            return function (event) {
                if (event.keyCode == 13) {
                    _this.updateCoinPrice(event.target.value);
                }
            };
        };

        _this.updateCoinPrice = function (value) {
            var self = _this;
            (0, _apiCaller2.default)('fxrate').then(function (json) {
                var ticket_price_ETH = value / parseFloat(json.ETH_BTC);
                var ticket_price_LTC = value / parseFloat(json.LTC_BTC);
                var ticket_price_USD = value * parseFloat(json.BTC_USD);
                var totalUSD = ticket_price_USD * _this.state.total_tickets;
                var totalBTC = value * _this.state.total_tickets;
                self.setState(_extends({}, self.state, {
                    ticket_price_BTC: value,
                    ticket_price_ETH: ticket_price_ETH.toFixed(8),
                    ticket_price_LTC: ticket_price_LTC.toFixed(8),
                    ticket_price_USD: ticket_price_USD.toFixed(3),
                    total_money_in_USD: totalUSD.toFixed(3),
                    total_money_in_BTC: totalBTC.toFixed(8)
                }));
            });
            _this.setState(_extends({}, _this.state, {
                ticket_price_BTC: value
            }));
        };

        _this.handleBlur = function (name) {
            return function (event) {
                if (event.target.value) {
                    _this.updateCoinPrice(event.target.value);
                }
            };
        };

        _this.handleChange = function (name) {
            return function (event) {
                var _extends2;

                _this.setState(_extends({}, _this.state, (_extends2 = {}, _defineProperty(_extends2, name, event.target.value), _defineProperty(_extends2, name + 'Err', event.target.required && !event.target.value ? true : false), _extends2)));
            };
        };

        _this.createProject = function () {
            var self = _this;
            // Apply validate

            _this.setState(_extends({}, _this.state, {
                titleErr: !_this.state.title ? true : false,
                sub_titleErr: !_this.state.sub_title ? true : false,
                short_descriptionErr: !_this.state.short_description ? true : false,
                long_descriptionErr: !_this.state.long_description ? true : false,
                ticket_price_BTCErr: !_this.state.ticket_price_BTC || _this.state.ticket_price_BTC == '0' ? true : false,
                total_ticketsErr: !_this.state.total_tickets || _this.state.total_tickets == '0' ? true : false,
                funding_durationErr: (0, _moment2.default)(_this.state.funding_duration, 'YYYY-MM-DD').isBefore((0, _moment2.default)()) ? true : false,
                maximum_available_tickets_per_personErr: !_this.state.maximum_available_tickets_per_person || _this.state.maximum_available_tickets_per_person == '0' || _this.state.maximum_available_tickets_per_person > 10 ? true : false,
                countryErr: !_this.state.country ? true : false,
                cityErr: !_this.state.city ? true : false,
                coin_BTCErr: !_this.state.coin_BTC ? true : false,
                coin_ETHErr: !_this.state.coin_ETH ? true : false,
                coin_LTCErr: !_this.state.coin_LTC ? true : false,
                totalMoneyInUSDErr: !_this.state.total_money_in_USD ? true : false,
                totalMoneyInBTCErr: !_this.state.total_money_in_BTC ? true : false
            }), function () {
                if (_this.state.titleErr || _this.state.sub_titleErr || _this.state.short_descriptionErr || _this.state.long_descriptionErr || _this.state.ticket_price_BTCErr || _this.state.total_ticketsErr || _this.state.maximum_available_tickets_per_personErr || _this.state.countryErr || _this.state.cityErr || _this.state.coin_BTCErr || _this.state.coin_ETHErr || _this.state.coin_LTCErr) {
                    return;
                } else {
                    _this.setState(_extends({}, _this.state, {
                        isCreate: true
                    }));
                    (0, _apiCaller2.default)('projects', 'POST', { project: _this.state }).then(function (res, err) {
                        console.log('loading finished', res, err);
                        var message = 'Successfully created';
                        if (res.errors) {
                            message = 'Fail to create new project.';
                        }
                        self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
                    });
                }
            });
        };

        _this.handleVideoUpload = function (files) {
            var self = _this;
            _this.setState(_extends({}, _this.state, { videoUpload: true }));
            var file = files[0];
            var url = '/api/uploadVideo';
            var formData = new FormData();
            formData.append('uploadFile', file);
            var config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            (0, _axios.post)(url, formData, config).then(function (res) {
                console.log('loading finished', res);
                self.setState(_extends({}, self.state, {
                    videoUpload: false,
                    videoPreviewUrl: 'http://' + window.location.host + '/' + res.data,
                    video: res.data }));
            }).catch(function (err) {
                console.log('loading finished', err);
                self.setState(_extends({}, self.state, { videoUpload: false }));
            });
        };

        _this.handleFileUpload = function (files) {
            if (_this.state.images.length == 10) {
                alert("You cannot add an image any more unless you remove any one.");
                return;
            }
            var self = _this;
            _this.setState(_extends({}, _this.state, { imageUpload: true }));
            var file = files[0];
            var url = '/api/upload';
            var formData = new FormData();
            formData.append('uploadFile', file);
            var config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            (0, _axios.post)(url, formData, config).then(function (res) {
                console.log('loading finished', res);
                var images = self.state.images;
                images.push(res.data);
                self.setState(_extends({}, self.state, {
                    imageUpload: false,
                    projectThumbnail: res.data,
                    images: images
                }));
            }).catch(function (err) {
                console.log('loading finished', err);
                self.setState(_extends({}, self.state, { imageUpload: false }));
            });
        };

        _this.state = {
            isCreate: false,
            errOnCreate: '',
            projectThumbnail: '',
            imageUpload: false,
            videoUpload: false,
            images: [],
            title: '',
            sub_title: '',
            funding_duration: '2020-05-24',
            short_description: '',
            long_description: '',
            ticket_price_BTC: '',
            ticket_price_ETH: '',
            ticket_price_LTC: '',
            total_tickets: '',
            maximum_available_tickets_per_person: '',
            country: '',
            city: '',
            postal_code: '',
            coin_BTC: '',
            coin_ETH: '',
            coin_LTC: '',
            imagesToServer: [],
            name: '',
            key_facts: [{ name: '' }],
            titleErr: false,
            sub_titleErr: false,
            funding_durationErr: false,
            short_descriptionErr: false,
            long_descriptionErr: false,
            ticket_price_BTCErr: false,
            total_ticketsErr: false,
            maximum_available_tickets_per_personErr: false,
            countryErr: false,
            cityErr: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleFileUpload = _this.handleFileUpload.bind(_this);
        _this.createProject = _this.createProject.bind(_this);
        return _this;
    }

    _createClass(Project, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                if (!token) {
                    _reactRouter.browserHistory.push('/signin');
                }
            }
        }
    }, {
        key: 'selectCountry',
        value: function selectCountry(val) {
            this.setState({
                country: val,
                countryErr: !val ? true : false
            });
        }
    }, {
        key: 'selectCity',
        value: function selectCity(val) {
            this.setState({
                city: val,
                cityErr: !val ? true : false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                projectThumbnail = _state.projectThumbnail,
                videoPreviewUrl = _state.videoPreviewUrl;

            var $imagePreview = null,
                $videoPreview = null;
            if (projectThumbnail) {
                $imagePreview = _jsx('img', {
                    src: 'http://' + window.location.host + '/' + projectThumbnail
                });
            } else {
                $imagePreview = _ref;
            }

            var $imageGallery = _ref2;
            if (this.state.images.length > 0) {
                var self = this;
                $imageGallery = this.state.images.map(function (image, key) {
                    return _jsx('div', {
                        className: 'gallery transform-on-hover card-img-container'
                    }, key, _jsx('img', {
                        src: 'http://' + window.location.host + '/' + image,
                        onClick: _this2.setThumbnail.bind(_this2, image, key),
                        alt: '5Terre',
                        width: '600',
                        height: '400'
                    }), _jsx('a', {
                        href: '#',
                        className: 'btn btn-link gallery-top-right hidden-close',
                        onClick: _this2.removeImage.bind(null, key),
                        'data-key': key
                    }, void 0, _ref3));
                }, this);
            }

            if (videoPreviewUrl) {
                $videoPreview = _jsx(_videoReact.Player, {}, void 0, _jsx('source', {
                    src: videoPreviewUrl
                }));
            } else {
                $videoPreview = _ref4;
            }
            var inputProps = {
                step: 300
            };
            return _jsx('div', {}, void 0, _ref5, _jsx('div', {
                className: 'container bg-white mt-100'
            }, void 0, _jsx('div', {
                className: 'card bg-light'
            }, void 0, _jsx('div', {
                className: 'card-body card-header card-title text-uppercase'
            }, void 0, _ref6, this.state.isCreate && _ref7, _jsx('button', {
                className: 'btn btn-lg bg-warning text-white float-right',
                onClick: this.createProject
            }, void 0, this.state.isCreate && _ref8, '\xA0Create'), _jsx('p', {
                className: 'warning-color'
            }, void 0, !this.state.isCreate && this.state.errOnCreate)), _jsx('div', {
                className: 'container bg-white'
            }, void 0, _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                error: this.state.titleErr,
                id: 'title',
                label: 'Title',
                className: 'textField w-20rem',
                style: { margin: 8 },
                helperText: 'Up to 30 letters',
                value: this.state.title,
                onChange: this.handleChange('title'),
                margin: 'normal',
                inputProps: inputProps
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'sub_title',
                error: this.state.sub_titleErr,
                label: 'Sub Title',
                className: 'textField w-20rem',
                style: { margin: 8 },
                helperText: 'Up to 45 letters',
                value: this.state.sub_title,
                onChange: this.handleChange('sub_title'),
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'funding_duration',
                error: this.state.funding_durationErr,
                type: 'date',
                label: 'Funding Duration',
                style: { margin: 8 },
                className: 'textField',
                value: this.state.funding_duration,
                margin: 'normal',
                onChange: this.handleChange('funding_duration')
            })), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'short_description',
                error: this.state.short_descriptionErr,
                label: 'Short Description',
                className: 'textField w-20rem',
                style: { margin: 8 },
                multiline: true,
                rowsMax: '4',
                helperText: 'Up to 50 words',
                value: this.state.short_description,
                onChange: this.handleChange('short_description'),
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'long_description',
                label: 'Long Description',
                error: this.state.long_descriptionErr,
                className: 'textField w-40rem',
                style: { margin: 8 },
                multiline: true,
                rowsMax: '7',
                helperText: 'Up to 5000 words',
                value: this.state.long_description,
                onChange: this.handleChange('long_description'),
                margin: 'normal'
            })), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'ticket_price_BTC',
                error: this.state.ticket_price_BTCErr,
                label: 'Ticket Price in BTC',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in BTC',
                value: this.state.ticket_price_BTC,
                onChange: this.handleChange('ticket_price_BTC'),
                onKeyDown: this.handleKeyDown('ticket_price_BTC'),
                onBlur: this.handleBlur('ticket_price_BTC')
            }), _jsx(_TextField2.default, {
                required: true,
                disabled: true,
                id: 'ticket_price_USD',
                label: 'Ticket Price in USD',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in USD',
                value: this.state.ticket_price_USD,
                onChange: this.handleChange('ticket_price_USD')
            }), _jsx(_TextField2.default, {
                required: true,
                disabled: true,
                id: 'ticket_price_ETH',
                label: 'Ticket Price in ETH',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in ETH',
                value: this.state.ticket_price_ETH,
                onChange: this.handleChange('ticket_price_ETH')
            }), _jsx(_TextField2.default, {
                required: true,
                disabled: true,
                id: 'ticket_price_LTC',
                label: 'Ticket Price in LTC',
                className: 'textField',
                margin: 'normal',
                type: 'number',
                style: { margin: 8 },
                helperText: 'Donation price for one ticket in LTC',
                value: this.state.ticket_price_LTC,
                onChange: this.handleChange('ticket_price_LTC')
            })), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'total_tickets',
                error: this.state.total_ticketsErr,
                label: 'Total Tickets',
                type: 'number',
                className: 'textField',
                style: { margin: 8 },
                margin: 'normal',
                value: this.state.total_tickets,
                onChange: this.handleChange('total_tickets')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'total_money_in_BTC',
                error: this.state.total_money_in_btcErr,
                label: 'Total Money(BTC)',
                type: 'number',
                className: 'textField',
                style: { margin: 8 },
                margin: 'normal',
                value: this.state.total_money_in_BTC,
                onChange: this.handleChange('total_money_in_BTC')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'total_money_in_USD',
                error: this.state.total_money_in_USDErr,
                label: 'Total Money(USD)',
                type: 'number',
                className: 'textField',
                style: { margin: 8 },
                margin: 'normal',
                value: this.state.total_money_in_USD,
                onChange: this.handleChange('total_money_in_USD')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'maximum_available_tickets_per_person',
                error: this.state.maximum_available_tickets_per_personErr,
                label: 'Maximum Avaliable Tickets per Person',
                className: 'textField',
                helperText: 'Up to 10 tickets',
                type: 'number',
                style: { margin: 8 },
                value: this.state.maximum_available_tickets_per_person,
                margin: 'normal',
                onChange: this.handleChange('maximum_available_tickets_per_person')
            }), _jsx('div', {
                className: 'row d-flex mx-1'
            }, void 0, _jsx(_reactCountryRegionSelector.CountryDropdown, {
                defaultOptionLabel: 'Choose a country',
                value: this.state.country,
                onChange: function onChange(val) {
                    return _this2.selectCountry(val);
                },
                classes: this.state.countryErr ? 'selectErr' : '',
                style: {
                    fontSize: '1.25rem',
                    padding: '0.25rem',
                    marginLeft: '0.5rem' }
            }), _jsx(_reactCountryRegionSelector.RegionDropdown, {
                country: this.state.country,
                value: this.state.city,
                defaultOptionLabel: 'Select a region',
                classes: this.state.cityErr ? 'selectErr' : '',
                style: {
                    fontSize: '1.25rem',
                    padding: '0.25rem',
                    marginRight: '0.5rem' },
                onChange: function onChange(val) {
                    return _this2.selectCity(val);
                }
            }), _jsx(_TextField2.default, {
                id: 'postal_code',
                label: 'Postal Code',
                className: '',
                style: { margin: 8 },
                value: this.state.postal_code,
                margin: 'normal',
                onChange: this.handleChange('postal_code')
            }))), _jsx('div', {
                className: 'row card-body'
            }, void 0, this.state.key_facts.map(function (key_fact, idx) {
                return _jsx('div', {
                    className: 'd-flex'
                }, void 0, _jsx(_TextField2.default, {
                    id: 'key_facts',
                    label: 'Key Facts',
                    style: { margin: 8 },
                    helperText: 'key fact',
                    value: key_fact.name,
                    margin: 'normal',
                    onChange: _this2.handleKeyFactsChange(idx)
                }, idx), _jsx('button', {
                    type: 'button',
                    onClick: _this2.handleRemoveKeyFact(idx),
                    className: 'btn btn-link btn-sm'
                }, void 0, _ref9));
            }), _jsx('button', {
                type: 'button',
                onClick: this.handleAddKeyFact,
                className: 'btn btn-link btn-md'
            }, void 0, _ref10, ' Add Key Fact')), _jsx('div', {
                className: 'row card-body'
            }, void 0, _jsx(_TextField2.default, {
                required: true,
                id: 'my_wallet_BTC',
                error: this.state.coin_BTCErr,
                label: 'My Wallet (BTC)',
                className: 'textField',
                style: { margin: 8 },
                helperText: 'Bitcoin Address',
                value: this.state.coin_BTC,
                margin: 'normal',
                onChange: this.handleChange('coin_BTC')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'my_wallet_ETH',
                error: this.state.coin_ETHErr,
                label: 'My Wallet (ETH)',
                className: 'textField',
                style: { margin: 8 },
                helperText: 'Etherum Address',
                value: this.state.coin_ETH,
                margin: 'normal',
                onChange: this.handleChange('coin_ETH')
            }), _jsx(_TextField2.default, {
                required: true,
                id: 'my_wallet',
                error: this.state.coin_LTCErr,
                label: 'My Wallet (LTC)',
                className: 'textField',
                style: { margin: 8 },
                helperText: 'Litecoin Address',
                value: this.state.coin_LTC,
                margin: 'normal',
                onChange: this.handleChange('coin_LTC')
            })), _ref11, _jsx('div', {
                className: 'row m-2 card-body'
            }, void 0, _jsx('div', {
                className: ''
            }, void 0, _ref12, _jsx('div', {}, void 0, _jsx('input', {
                accept: 'image/*',
                style: { display: 'none' },
                id: 'contained-button-file',
                type: 'file',
                onChange: function onChange(e) {
                    return _this2.handleFileUpload(e.target.files);
                },
                name: 'uploadFile'
            }), _jsx('label', {
                htmlFor: 'contained-button-file'
            }, void 0, _ref13, this.state.imageUpload && _ref14, this.state.images.length == 0 && _ref15)), _jsx('div', {
                className: 'imgPreview'
            }, void 0, $imagePreview)), _jsx('div', {}, void 0, $imageGallery)), _jsx('div', {
                className: 'm-2 card-body'
            }, void 0, _ref16, _jsx('input', {
                accept: 'video/*',
                style: { display: 'none' },
                id: 'contained-video-file',
                type: 'file',
                onChange: function onChange(e) {
                    return _this2.handleVideoUpload(e.target.files);
                },
                name: 'uploadFile'
            }), _jsx('label', {
                htmlFor: 'contained-video-file'
            }, void 0, _ref17, this.state.videoUpload && _ref18), _jsx('div', {
                className: 'videoPreview'
            }, void 0, $videoPreview)), _jsx('div', {
                className: 'card-body card-footer card-title text-uppercase'
            }, void 0, _jsx('button', {
                className: 'btn btn-lg bg-warning text-white float-right',
                onClick: this.createProject
            }, void 0, 'Create'))))), _ref19);
        }
    }]);

    return Project;
}(_react2.default.Component);

exports.default = Project;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _AppActions = __webpack_require__(5);

var _AdminHeader = __webpack_require__(10);

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, _jsx(_AdminHeader2.default, {}), _jsx('div', {
    className: 'container-fluid mt-100'
}, void 0, _jsx('h1', {}, void 0, 'Users Page')), _jsx(_Footer2.default, {}));

var User = function (_Component) {
    _inherits(User, _Component);

    function User(props) {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch((0, _AppActions.fetchProjects)());
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartprojectadmin');
                if (token == null) {
                    _reactRouter.browserHistory.push('/admin/signin');
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var projects = this.props.projects;

            console.log('projects', projects);

            return _ref;
        }
    }]);

    return User;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        projects: state.app.projects
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(User);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.balanceChecker = balanceChecker;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.signin = signin;
exports.signup = signup;
exports.customerSignin = customerSignin;
exports.customerSignup = customerSignup;
exports.authCheck = authCheck;
exports.authCheckAdmin = authCheckAdmin;
exports.getNow = getNow;
exports.getTicketInfo = getTicketInfo;
exports.userSignup = userSignup;
exports.checkETHBalance = checkETHBalance;
exports.checkLTCBalance = checkLTCBalance;
exports.checkBTCBalance = checkBTCBalance;
exports.checkBalance = checkBalance;
exports.getCryptoAddr = getCryptoAddr;
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.createProject = createProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
exports.getProjects = getProjects;
exports.getProject = getProject;
exports.uploadFile = uploadFile;
exports.uploadVideoFile = uploadVideoFile;
exports.getFxRate = getFxRate;

var _post = __webpack_require__(59);

var _post2 = _interopRequireDefault(_post);

var _project = __webpack_require__(142);

var _project2 = _interopRequireDefault(_project);

var _user = __webpack_require__(60);

var _user2 = _interopRequireDefault(_user);

var _cuid = __webpack_require__(146);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(147);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(148);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

var _sensitive = __webpack_require__(149);

var _sensitive2 = _interopRequireDefault(_sensitive);

var _express = __webpack_require__(16);

var _passport = __webpack_require__(150);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueFilename = __webpack_require__(153);
var generator = __webpack_require__(154);
var fileUpload = __webpack_require__(62);
var sgMail = __webpack_require__(155);

var bitcoinTransaction = __webpack_require__(156);
var ltcTransaction = __webpack_require__(158);
var ethTransaction = __webpack_require__(161);

var router = new _express.Router();

function balanceChecker() {
  _project2.default.Project.find().sort('-dateAdded').exec(function (errors, projects) {
    if (errors) {
      return console.log(errors);
    }
    projects.map(function (project) {
      var ethAddr = project.wallet.ETH.address;
      var btcAddr = project.wallet.BTC.address;
      var ltcAddr = project.wallet.LTC.address;
      var ltcNetwork = 'LTCTEST';
      if (process.env.LTCNET == 'mainnet') {
        ltcNetwork = 'LTC';
      }
      Promise.all([ethTransaction.getBalance(ethAddr), bitcoinTransaction.getBalance(btcAddr, { network: process.env.BTCNET }), ltcTransaction.getBalance(ltcAddr, ltcNetwork)]).then(function (data) {
        project.donatedETH = parseFloat(data[0]);
        project.donatedBTC = parseFloat(data[1]);
        project.donatedLTC = parseFloat(data[2]);
        project.save(function (err, saved) {
          if (err) {
            console.log(err.message);
          }
          // console.log(saved);
        });
      }).catch(function (err) {
        console.log(err.message);
      });
    });
  });
}

function getUsers(req, res) {
  _user2.default.find().sort('-dateAdded').exec(function (errors, users) {
    if (errors) {
      res.status(500).send({ errors: errors });
    }
    res.json({ users: users });
  });
}

function getUser(req, res) {
  Promise.all([_user2.default.findById(req.decoded), _project2.default.Project.find()]).then(function (data) {
    if (!data[0]) {
      return res.send({ errors: 'Unauthorized user' });
    }
    return res.json({ user: data[0], projects: data[1] });
  }).catch(function (err) {
    return res.send({ errors: err.message });
  });
}

function updateUser(req, res, next) {
  _user2.default.findById(req.body.id).then(function (user) {
    if (!user) {
      return res.status(401).send({ errors: 'Unauthorized user' });
    }

    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }

    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }

    return user.save().then(function () {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
}

function signin(req, res, next) {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  _user2.default.findOne({ 'email': req.body.user.email }).then(function (user) {
    if (!user) {
      return res.status(422).json({ errors: 'User does not exist' });
    } else {
      if (user.validPassword(req.body.user.password)) {
        return res.json({ errors: 'Email and Password does not match' });
      } else {
        user.token = user.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      }
    }
  }).catch(function (err) {
    return done(err);
  });
}

function signup(req, res) {
  _user2.default.findOne({ email: req.body.user.email }).then(function (user) {
    if (user) {
      return res.status(422).json({ errors: 'User width this email already exists' });
    } else {
      var newUser = new _user2.default();

      newUser.email = req.body.user.email;
      newUser.role = 'Owner';
      newUser.setPassword(req.body.user.password);
      return newUser.save(function (err, saved) {
        return res.json({ user: newUser.toAuthJSON() });
      });
    }
  }).catch(function (err) {
    return res.send({ errors: err.message });
  });
}

function customerSignin(req, res, next) {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  _user2.default.findOne({ 'email': req.body.user.email }).then(function (user) {
    if (!user) {
      var newUser = new _user2.default();

      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      var newPassword = req.body.user.password;
      newUser.setPassword(newPassword);

      newUser.save(function (err, saved) {
        sgMail.setApiKey(_sensitive2.default.sendgrid);
        var msg = {
          to: saved.email,
          from: 'info@smartprojects.tech',
          subject: 'Authentication',
          text: 'Congratulation! You successfully signed up. Your password is ' + newPassword,
          html: '<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ' + newPassword + ' <p></div>'
        };
        sgMail.send(msg).then(function (statusMessage) {
          return res.json({ user: saved.toAuthJSON(), isNewUser: true });
        });
      }).catch(next);
    } else {
      if (user.validPassword(req.body.user.password)) {
        return res.json({ errors: 'Email and Password does not match' });
      } else {
        user.token = user.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      }
    }
  }).catch(function (err) {
    return done(err);
  });
}

function customerSignup(req, res) {
  _user2.default.findOne({ email: req.body.user.email }).then(function (user) {
    if (user) {
      return res.status(422).json({ errors: 'User width this email already exists' });
    } else {
      var newUser = new _user2.default();

      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      var newPassword = generator.generate({
        length: 10,
        numbers: true
      });
      newUser.setPassword(newPassword);

      return newUser.save(function (err, saved) {
        sgMail.setApiKey(_sensitive2.default.sendgrid);
        var msg = {
          to: saved.email,
          from: 'info@smartprojects.tech',
          subject: 'Authentication',
          text: 'Congratulation! You successfully signed up. Your password is ' + newPassword,
          html: '<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ' + newPassword + '<p></div>'
        };
        sgMail.send(msg).then(function (statusMessage) {
          return res.json({ user: newUser.toAuthJSON() });
        });
      });
    }
  }).catch(function (err) {
    return res.send({ errors: err.message });
  });
}

function authCheck(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }
  _user2.default.findOne({ _id: req.decoded }).then(function (user) {
    if (user) {
      return res.send({ status: 'authorized' });
    }
    return res.send({ status: 'unauthorized' });
  }).catch(function (err) {
    return res.send({ status: 'unauthorized' });
  });
}

function authCheckAdmin(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }
  _user2.default.findOne({ _id: req.decoded, email: 'veselin.mitrovic@outlook.com' }).then(function (user) {
    if (user) {
      return res.send({ status: 'authorized' });
    }
    return res.send({ status: 'unauthorized' });
  }).catch(function (err) {
    return res.send({ status: 'unauthorized' });
  });
}

function getNow(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }

  if (!req.body.ticket.projectID) {
    return res.status(400).send({ errors: 'Bad request.' });
  }

  // req.decoded = user.id
  _user2.default.findOne({ _id: req.decoded }).then(function (user) {
    if (user) {
      // User exists
      var btcAddress = bitcoinTransaction.createUserBitcoinAddress();
      var ltcAddress = ltcTransaction.createUserLitecoinAddress();
      var ethAddress = ethTransaction.createUserEthereumAddress();
      var _newSubProject = new _user.SubProject();
      _newSubProject.projectID = req.body.ticket.projectID;
      _newSubProject.totalTickets = req.body.ticket.totalTickets;
      _newSubProject.totalPrice = req.body.ticket.totalPrice;
      _newSubProject.btcAddress = btcAddress;
      _newSubProject.ethAddress = ethAddress;
      _newSubProject.ltcAddress = ltcAddress;
      _newSubProject.paidAmountBTC = 0;
      _newSubProject.paidAmountLTC = 0;
      _newSubProject.paidAmountETH = 0;
      if (!user.subProjects) {
        user.subProjects = [];
      }
      user.subProjects.push(_newSubProject);
      user.save(function (err, saved) {
        if (err) {
          return res.send({ errors: err.message });
        } else {
          return res.send({
            status: 'authorized',
            id: _newSubProject.id,
            token: saved.generateJWT(),
            crypto: {
              BTC: {
                address: btcAddress,
                amount: _newSubProject.totalPrice['BTC'],
                message: _newSubProject.totalPrice['BTC'] + ' BTC Donation to '
              },
              ETH: {
                address: ethAddress,
                amount: _newSubProject.totalPrice['ETH'],
                message: _newSubProject.totalPrice['ETH'] + ' ETH Donation to '
              },
              LTC: {
                address: ltcAddress,
                amount: _newSubProject.totalPrice['LTC'],
                message: _newSubProject.totalPrice['LTC'] + ' LTC Donation to '
              }
            }
          });
        }
      });
    } else {
      // Something is wrong
      return res.send({ status: 'unauthorized' });
    }
  });
}

function getTicketInfo(req, res) {
  if (!req.body.params.token) {
    return res.status(401).send('Request has no token in body');
  } else {
    _user2.default.findOne({ token: req.body.params.token }).then(function (user) {});
  }
}

function userSignup(req, res) {
  if (!req.body.user.email) {
    return res.status(401).send('Request has no email in body');
  }
  _user2.default.findOne({ email: req.body.user.email }).then(function (user) {
    var btcAddress = bitcoinTransaction.createUserBitcoinAddress();
    var ethAddress = ethTransaction.createUserEthereumAddress();
    var ltcAddress = ltcTransaction.createUserLitecoinAddress();
    var _newSubProject = new _user.SubProject();
    _newSubProject.projectID = req.body.ticket.projectID;
    _newSubProject.totalTickets = req.body.ticket.totalTickets;
    _newSubProject.totalPrice = req.body.ticket.totalPrice;
    _newSubProject.btcAddress = btcAddress;
    _newSubProject.ltcAddress = ltcAddress;
    _newSubProject.ethAddress = ethAddress;
    _newSubProject.paidAmountBTC = 0;
    _newSubProject.paidAmountLTC = 0;
    _newSubProject.paidAmountETH = 0;
    if (user) {
      // User already signed up
      if (!user.subProjects) {
        user.subProjects = [];
      }
      user.subProjects.push(_newSubProject);
      user.save(function (err, saved) {
        if (err) {
          return res.send({ errors: err.message });
        } else {
          return res.send({
            isNewUser: false,
            isMsgSent: false,
            token: saved.generateJWT(),
            id: _newSubProject.id,
            crypto: {
              BTC: {
                address: btcAddress,
                amount: _newSubProject.totalPrice.BTC,
                message: _newSubProject.totalPrice.BTC + ' BTC Donation to '
              },
              ETH: {
                address: ethAddress,
                amount: _newSubProject.totalPrice.ETH,
                message: _newSubProject.totalPrice.ETH + ' ETH Donation to '
              },
              LTC: {
                address: ltcAddress,
                amount: _newSubProject.totalPrice.LTC,
                message: _newSubProject.totalPrice.LTC + ' LTC Donation to '
              }
            }
          });
        }
      });
    } else {
      // New user signed up and send an email with password
      var newUser = new _user2.default();

      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      newUser.subProjects = [_newSubProject];
      var newPassword = generator.generate({
        length: 10,
        numbers: true
      });
      newUser.setPassword(newPassword);

      newUser.save(function (err, saved) {
        sgMail.setApiKey(_sensitive2.default.sendgrid);
        var msg = {
          to: saved.email,
          from: 'info@smartprojects.tech',
          subject: 'Authentication',
          text: 'Congratulation! You successfully signed up. Your password is ' + newPassword,
          html: '<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ' + newPassword + '<p></div>'
        };
        sgMail.send(msg).then(function (statusMessage) {
          return res.send({
            isNewUser: true,
            isMsgSent: true,
            token: saved.generateJWT(),
            id: _newSubProject.id,
            crypto: {
              BTC: {
                address: btcAddress,
                amount: _newSubProject.totalPrice['BTC'],
                message: _newSubProject.totalPrice['BTC'] + ' BTC Donation to '
              },
              ETH: {
                address: ethAddress,
                amount: _newSubProject.totalPrice['ETH'],
                message: _newSubProject.totalPrice['ETH'] + ' ETH Donation to '
              },
              LTC: {
                address: ltcAddress,
                amount: _newSubProject.totalPrice['LTC'],
                message: _newSubProject.totalPrice['LTC'] + ' LTC Donation to '
              }
            }
          });
        }).catch(function (err) {
          return res.send({ errors: 'Fail to authenticate the user with this email' });
        });
      });
    }
  }).catch(function (err) {
    return res.send({ errors: err.message });
  });
}

function checkETHBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }

  ethTransaction.getBalance(req.body.crypto.ETH.address.publicKey).then(function (balance) {
    if (balance) {
      var paidTickets = Math.round(balance / req.body.ticketPrice.ETH);
      if (paidTickets < 1) {
        return res.send({ status: 'less', paidTickets: paidTickets, amount: balance / req.body.ticketPrice.ETH });
      } else {
        // Update paidAmount field of sub project of user collection
        _user2.default.findOne({ _id: req.decoded }).then(function (user) {
          if (user) {
            var subProject = user.subProjects.find(function (sub) {
              return sub._id == req.body.subID;
            });
            if (!subProject) {
              return res.status(404).send({ errors: 'Project with ID ' + req.body.projectID + ' does not exist' });
            }
            subProject.paidAmountETH = balance;
            subProject.datePaid = new Date();
            subProject.paidTickets = paidTickets;
            user.save(function (err, saved) {
              if (err) {
                return res.status(503).send({ errors: err.message });
              }
              // Creat transaction to the Project address.
              _project2.default.Project.findOne({ _id: req.body.projectID }).then(function (project) {
                if (!project) {
                  return res.status(404).send({ errors: res.message });
                }
                project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;
                project.donors.push(saved._id);
                project.save(function (err, saved) {
                  if (err) {
                    return res.status(400).send({ errors: err.message });
                  }
                  return res.send({ status: 'ok', paidTickets: paidTickets, paidAmount: subProject.paidAmountETH, availableTickets: saved.maximumAvailableTickets });
                });
                var privateKeyWIF = subProject.ethAddress.privateKey;
                var from = subProject.ethAddress.publicKey;
                ethTransaction.sendTransaction(from, privateKeyWIF, project.wallet.ETH.address, balance).then(function (txid) {
                  if (txid) {
                    console.log(txid);
                  }
                }).catch(function (err) {
                  console.log(err);
                });
              });
            });
          }
        });
      }
    } else {
      return res.send({ status: 'again' });
    }
  }).catch(function (err) {
    return res.send({ errors: err.message });
  });
}

function checkLTCBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }
  ltcTransaction.getUTXOs(req.body.crypto.LTC.address.publicKey, process.env.LTCNET).then(function (utxos) {
    var balance = 0;
    var fee = bitcoinTransaction.BITCOIN_SAT_MULT * 0.00077; //fee for the tx
    for (var i = 0; i < utxos.length; i++) {
      if (utxos[i].confirmations > 0) {
        balance += utxos[i]['satoshis'];
      }
    } //add up the balance in satoshi format from all utxos
    if (balance > 0) {
      var paidTickets = Math.round(balance / req.body.ticketPrice.LTC / bitcoinTransaction.BITCOIN_SAT_MULT);
      if (paidTickets < 1) {
        return res.send({ status: 'less', paidTickets: paidTickets, amount: balance / req.body.ticketPrice.LTC });
      } else {
        // Update paidAmount field of sub project of user collection
        _user2.default.findOne({ _id: req.decoded }).then(function (user) {
          if (user) {
            var subProject = user.subProjects.find(function (sub) {
              return sub._id == req.body.subID;
            });
            if (!subProject) {
              return res.status(404).send({ errors: 'Project with ID ' + req.body.projectID + ' does not exist' });
            }
            subProject.paidAmountLTC = balance / bitcoinTransaction.BITCOIN_SAT_MULT;
            subProject.datePaid = new Date();
            subProject.paidTickets = paidTickets;
            user.save(function (err, saved) {
              if (err) {
                return res.status(503).send({ errors: err.message });
              }
              // Creat transaction to the Project address.
              _project2.default.Project.findOne({ _id: req.body.projectID }).then(function (project) {
                if (!project) {
                  return res.status(404).send({ errors: res.message });
                }
                project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;
                project.donors.push(saved._id);
                project.save(function (err, saved) {
                  if (err) {
                    return res.status(400).send({ errors: err.message });
                  }
                  return res.send({ status: 'ok', paidTickets: paidTickets, paidAmount: subProject.paidAmountLTC, availableTickets: saved.maximumAvailableTickets });
                });
                var privateKeyWIF = subProject.ltcAddress.privateKey;
                try {
                  ltcTransaction.sendTransaction(utxos, project.wallet.LTC.address, balance - fee, fee, privateKeyWIF).then(function (msg) {
                    if (msg) {
                      console.log(msg);
                    }
                  }).catch(function (err) {
                    console.log(err);
                  });
                } catch (err) {
                  console.log('err while transfering LTC', err.message);
                };
              });
            });
          }
        });
      }
    } else {
      return res.send({ status: 'again' });
    }
  }).catch(function (err) {
    return res.send({ errors: err.message });
  });
}

function checkBTCBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }

  Promise.all([bitcoinTransaction.getBalance(req.body.crypto.BTC.address.publicKey, { network: process.env.BTCNET }), bitcoinTransaction.getFees(bitcoinTransaction.providers.fees[process.env.BTCNET].default, 'fastest')]).then(function (data) {
    var balanceInBTC = data[0];
    var feeBTC = data[1] / bitcoinTransaction.BITCOIN_SAT_MULT;
    // const feeBTC = 300;
    if (balanceInBTC) {
      var paidTickets = Math.round(balanceInBTC / req.body.ticketPrice.BTC);
      if (paidTickets < 1) {
        return res.send({ status: 'less', paidTickets: paidTickets, amount: balanceInBTC });
      } else {
        // Update paidAmount field of sub project of user collection
        _user2.default.findOne({ _id: req.decoded }).then(function (user) {
          if (user) {
            var subProject = user.subProjects.find(function (sub) {
              return sub._id == req.body.subID;
            });
            if (!subProject) {
              return res.status(404).send({ errors: 'Project with ID ' + req.body.projectID + ' does not exist' });
            }
            subProject.paidAmountBTC = balanceInBTC;
            subProject.datePaid = new Date();
            subProject.paidTickets = paidTickets;
            user.save(function (err, saved) {
              if (err) {
                return res.status(503).send({ errors: err.message });
              }
              // Creat transaction to the Project address.
              _project2.default.Project.findOne({ _id: req.body.projectID }).then(function (project) {
                if (!project) {
                  return res.status(404).send({ errors: res.message });
                }
                try {
                  bitcoinTransaction.sendTransaction({
                    from: subProject.btcAddress.publicKey,
                    to: project.wallet.BTC.address,
                    privKeyWIF: subProject.btcAddress.privateKey,
                    btc: subProject.paidAmountBTC - feeBTC,
                    network: process.env.BTCNET,
                    pushtxProvider: bitcoinTransaction.providers.pushtx[process.env.BTCNET].omni
                  }).then(function (msg) {
                    console.log(msg);
                    project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;
                    project.donors.push(saved._id);
                    project.save(function (err, saved) {
                      if (err) {
                        return res.status(400).send({ errors: err.message });
                      }
                      return res.send({ status: 'ok', paidTickets: paidTickets, paidAmount: subProject.paidAmountBTC, availableTickets: saved.maximumAvailableTickets });
                    });
                  });
                } catch (err) {
                  return res.status(503).send({ errors: err.message });
                };
              });
            });
          } else {
            res.status(400).send({ errors: 'Bad Request' });
          }
        });
      }
    } else {
      return res.send({ status: 'again' });
    }
  }).catch(function (err) {
    return res.status(503).send({ errors: err.message });
  });
}

function checkBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }
  // checkBTCBalance(req, res);
  // checkLTCBalance(req, res);
}

function getCryptoAddr(req, res) {
  if (!req.params.email) {
    return res.status(401).send({ errors: 'You are not authorized to do this action' });
  }
  _user2.default.findOne({ email: req.params.email }).then(function (user) {
    user.subProjects.map(function (subProject) {
      if (subProject.projectID == req.params.projectID) {
        // const btcKeyPair = bitcoin.ECPair.makeRandom();
        // const { btcAddress } = bitcoin.payments.p2pkh(({ pubkey: btcKeyPair.publicKey }));
        // return res.send({
        //   crypto: {
        //     ticket: {
        //       subProject,
        //     },
        //     btc: {
        //       publicKey: btcAddress,
        //     },
        //   },
        // });
      }
    });
  });
}

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
function getPosts(req, res) {
  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  var newPost = new _post2.default(req.body.post);

  // Let's sanitize inputs
  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = (0, _cuid2.default)();
  newPost.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
function getPost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
function deletePost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (errors, post) {
    if (errors) {
      res.status(500).send({ errors: errors });
    }

    post.remove(function () {
      res.status(200).end();
    });
  });
}

/**
 * Get the help
 */

function createProject(req, res) {
  if (!req.body.project.title) {
    res.status(403).send({ errors: 'something wrong happened' });
    return;
  }

  var project = req.body.project;
  var newObject = new _project2.default.Project(project);
  var wallet = new _project2.default.Wallet(project);
  var coin = new _project2.default.Coin(project);
  coin.address = project.coin_BTC;
  wallet.BTC = coin;
  coin.address = project.coin_ETH;
  wallet.ETH = coin;
  coin.address = project.coin_LTC;
  wallet.LTC = coin;
  var address = new _project2.default.Address(project);
  address.country = project.country;
  address.city = project.city;
  address.postalCode = project.postal_code;

  // Let's sanitize inputs
  newObject.title = project.title;
  newObject.subTitle = project.sub_title;
  newObject.ticketPriceInBTC = project.ticket_price_BTC;
  newObject.ticketPriceInETH = project.ticket_price_ETH;
  newObject.ticketPriceInLTC = project.ticket_price_LTC;
  newObject.ticketPriceInUSD = project.ticket_price_USD;
  newObject.maximumAvailableTickets = project.total_tickets;
  newObject.maximumAvailableTicketsPerPerson = project.maximum_available_tickets_per_person;
  newObject.fundingDuration = project.funding_duration;
  newObject.projectThumbnail = project.projectThumbnail;
  newObject.images = project.images;
  newObject.address = address;
  newObject.video = project.video;
  newObject.keyfacts = project.key_facts;
  newObject.wallet = wallet;
  newObject.totalMoneyInBTC = project.total_money_in_BTC;
  newObject.totalMoneyInUSD = project.total_money_in_USD;
  newObject.totalTickets = project.total_tickets;
  newObject.donors = [];
  newObject.shortDescription = project.short_description;
  newObject.fullDescription = project.long_description;
  // newObject.location = project.location;
  newObject.save(function (errors, saved) {
    if (errors) {
      res.status(500).send({ errors: errors });
    } else {
      res.json({ project: saved });
    }
  });
}

function updateProject(req, res) {
  if (!req.body.project._id) {
    res.status(403).end();
  } else {
    _project2.default.Project.findOne({ _id: req.body.project._id }).exec(function (errors, newObject) {
      if (errors) {
        res.status(500).send({ errors: errors });
      } else {
        var project = req.body.project;
        newObject.title = project.title;
        newObject.subTitle = project.sub_title;
        newObject.ticketPriceInBTC = project.ticket_price_BTC;
        newObject.ticketPriceInETH = project.ticket_price_ETH;
        newObject.ticketPriceInLTC = project.ticket_price_LTC;
        newObject.ticketPriceInUSD = project.ticket_price_USD;
        newObject.maximumAvailableTickets = project.total_tickets;
        newObject.maximumAvailableTicketsPerPerson = project.maximum_available_tickets_per_person;
        newObject.fundingDuration = project.funding_duration;
        newObject.projectThumbnail = project.projectThumbnail;
        newObject.images = project.images;
        newObject.address.country = project.country;
        newObject.address.city = project.city;
        newObject.video = project.video;
        newObject.keyfacts = project.key_facts;
        newObject.wallet.BTC.address = project.coin_BTC;
        newObject.wallet.ETH.address = project.coin_ETH;
        newObject.wallet.LTC.address = project.coin_LTC;
        newObject.totalMoneyInBTC = project.total_money_in_BTC;
        newObject.totalMoneyInUSD = project.total_money_in_USD;
        newObject.totalTickets = project.total_tickets;
        newObject.shortDescription = project.short_description;
        newObject.fullDescription = project.long_description;
        // newObject.location = project.location;
        newObject.save(function (err1, saved) {
          if (err1) {
            res.status(500).send({ errors: err1 });
          } else {
            res.json({ project: 'success' });
          }
        });
      }
    });
  }
}

function deleteProject(req, res) {
  if (!req.body._id) {
    res.status(403).send({ errors: 'something wrong happened' });
  } else {
    _project2.default.Project.deleteOne({ _id: req.body._id }).exec(function (err, obj) {
      res.json({ obj: obj });
    });
  }
}

function getProjects(req, res) {
  _project2.default.Project.find().sort('-dateAdded').populate('donors').exec(function (errors, projects) {
    if (errors) {
      return res.status(500).send({ errors: errors });
    }
    res.json({ projects: projects });
  });
}

function getProject(req, res) {
  if (req.params.id == 'undefined' || req.params.id == 'null') {
    _project2.default.Project.findOne().sort('-dateAdded').populate('donors').exec(function (errors, project) {
      if (errors) {
        return res.status(500).send({ errors: errors });
      }
      res.json({ project: project });
    });
  } else {
    _project2.default.Project.findOne({ _id: req.params.id }).exec(function (errors, project) {
      if (errors) {
        return res.status(500).send({ errors: errors });
      }
      res.json({ project: project });
    });
  }
}

function uploadFile(req, res) {
  if (!req.files) return res.status(400).send({ errors: 'No files were uploaded.' });

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  var _uploadFile = req.files.uploadFile;

  var uniqueTmpfile = null;
  try {
    if (process.env.mode == 'local') {
      uniqueTmpfile = uniqueFilename('/upload/image', 'image');
    } else {
      uniqueTmpfile = uniqueFilename('/root/upload/image', 'image');
    }
  } catch (errors) {
    return res.status(500).send({ errors: errors });
  }
  uniqueTmpfile += '.jpg';
  // Use the mv() method to place the file somewhere on your server
  _uploadFile.mv(uniqueTmpfile, function (errors) {
    if (errors) return res.status(500).send({ errors: errors });
    if (process.env.mode == 'local') {
      res.send(uniqueTmpfile.replace('\\upload', ''));
    } else {
      res.send(uniqueTmpfile.replace('/root/upload', ''));
    }
  });
}

function uploadVideoFile(req, res) {
  if (!req.files) return res.status(400).send({ errors: 'No files were uploaded.' });

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  var _uploadFile = req.files.uploadFile;

  var uniqueTmpfile = null;
  try {
    if (process.env.mode == 'local') {
      uniqueTmpfile = uniqueFilename('/upload/video', 'video');
    } else {
      uniqueTmpfile = uniqueFilename('/root/upload/video', 'video');
    }
  } catch (errors) {
    return res.status(500).send({ errors: errors });
  }
  uniqueTmpfile += '.mp4';
  // Use the mv() method to place the file somewhere on your server
  _uploadFile.mv(uniqueTmpfile, function (errors) {
    if (errors) return res.status(500).send({ errors: errors });

    if (process.env.mode == 'local') {
      res.send(uniqueTmpfile.replace('\\upload', ''));
    } else {
      res.send(uniqueTmpfile.replace('/root/upload', ''));
    }
  });
}

function getFxRate(req, res) {
  fetch('https://api.kraken.com/0/public/Ticker?pair=ETHXBT,XLTCXXBT,XBTUSD', {
    headers: {
      'content-type': 'application/json',
      mode: 'no-cors'
    }
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }

    return res.send({
      ETH_BTC: json.result.XETHXXBT.a,
      LTC_BTC: json.result.XLTCXXBT.a,
      BTC_USD: json.result.XXBTZUSD.a
    });
  });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var uniqueValidator = require('mongoose-unique-validator');
var uniqueValidator = __webpack_require__(144);
var crypto = __webpack_require__(145);
var jwt = __webpack_require__(61);
var Schema = _mongoose2.default.Schema;

var subProjectSchema = new Schema({
  projectID: { type: Schema.ObjectId, ref: 'Project.Project' },
  totalTickets: { type: Number, required: true },
  totalPrice: { type: Object, required: false },
  paidAmountBTC: { type: Number, default: 0.0, required: false },
  paidAmountLTC: { type: Number, default: 0.0, required: false },
  paidAmountETH: { type: Number, default: 0.0, required: false },
  paidTickets: { type: Number, default: 0.0, required: false },
  isFullPaid: { type: Boolean, default: false, required: false },
  dateAdded: { type: Date, default: Date.now, required: false },
  datePaid: { type: Date, required: false },
  btcAddress: { type: Object, required: false },
  ethAddress: { type: Object, required: false },
  ltcAddress: { type: Object, required: false }
});

var userSchema = new Schema({
  email: { type: String, lowercase: true, unique: 'Two users cannot share the same email ({VALUE})', required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  subProjects: [subProjectSchema],
  hash: String,
  salt: String,
  role: String,
  dateAdded: { type: Date, default: Date.now, required: true }
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
  // set expiration to 1 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 1);

  return jwt.sign({
    _id: this._id,
    exp: parseInt(exp.getTime() / 1000, 10)
  }, process.env.secret);
};

userSchema.methods.toAuthJSON = function () {
  return {
    email: this.email,
    role: this.role,
    token: this.generateJWT()
  };
};

userSchema.plugin(uniqueValidator);

exports.default = _mongoose2.default.model('User', userSchema);

exports.SubProject = _mongoose2.default.model('SubProject', subProjectSchema);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(66);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(67);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(68);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(69);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _store = __webpack_require__(70);

var _reactRedux = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(90);

var _reactRouter = __webpack_require__(2);

var _reactHelmet = __webpack_require__(17);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(91);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(139);

var _main = __webpack_require__(141);

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(58);

var MainController = _interopRequireWildcard(_main3);

var _dummyData = __webpack_require__(165);

var _dummyData2 = _interopRequireDefault(_dummyData);

var _config = __webpack_require__(27);

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(166).config();

var cors = __webpack_require__(167);
var session = __webpack_require__(168);
var fileUpload = __webpack_require__(62);

// Initialize the Express App
var app = new _express2.default();

// Set Development modes checks
var isDevMode = process.env.NODE_ENV === 'development' || false;
var isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  var webpack = __webpack_require__(64);
  // eslint-disable-next-line global-require
  var config = __webpack_require__(169);
  // eslint-disable-next-line global-require
  var webpackDevMiddleware = __webpack_require__(173);
  // eslint-disable-next-line global-require
  var webpackHotMiddleware = __webpack_require__(174);
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup


// Import required modules


// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  _mongoose2.default.connect(_config2.default.mongoURL, function (error) {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }

    // feed some dummy data in DB.
    (0, _dummyData2.default)();
  });
}

// Apply body Parser and server public assets and routes
app.use(cors());

app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
app.use(_express2.default.static('/root/upload'));
app.use(_express2.default.static('/upload'));
app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(fileUpload());

app.use('/api', _main2.default);
// app.use('/api/admin', passport.authenticate(), admin);


// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">\n        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\n        <!-- Material Design for Bootstrap CSS -->\n        <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">\n        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />\n        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />\n        </head>\n      <body>\n        <div id="root">' + (process.env.NODE_ENV === 'production' ? html : '<div>' + html + '</div>') + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n        <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>\n        <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>\n        <script>$(document).ready(function() { $(\'body\').bootstrapMaterialDesign(); });</script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
        store: store
      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

var balanceInterval = setInterval(function () {
  MainController.balanceChecker();
}, 60000);

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(26);

var _reduxThunk = __webpack_require__(71);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(72);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = void 0; /**
                        * Main store function
                        */

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(29).default;
}

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _AppReducer = __webpack_require__(73);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _IntlReducer = __webpack_require__(76);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _AuthReducer = __webpack_require__(86);

var _AuthReducer2 = _interopRequireDefault(_AuthReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer
/**
 * Root Reducer
 */
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  auth: _AuthReducer2.default,
  intl: _IntlReducer2.default
});

// Import Reducers

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import Actions


var _AppActions = __webpack_require__(5);

// Initial State
var initialState = {
  showAddPost: false,
  projects: [],
  crypto: {},
  token: ''
};

var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _AppActions.TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };
    case _AppActions.FETCH_PROJECTS:
      return {
        projects: action.projects
      };
    case _AppActions.FETCH_USERS:
      return {
        users: action.users
      };
    case _AppActions.FETCH_USER:
      return {
        res: action.res
      };
    case _AppActions.FETCH_PROJECT:
      return {
        project: action.project
      };

    case _AppActions.GET_CRYPTO:
      return _extends({}, state, {
        crypto: action.crypto
      });
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
  return state.app.showAddPost;
};

// Export Reducer
exports.default = AppReducer;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _setup = __webpack_require__(28);

var _IntlActions = __webpack_require__(85);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var initLocale = global.navigator && global.navigator.language || 'en';

var initialState = _extends({
  locale: initLocale,
  enabledLanguages: _setup.enabledLanguages
}, _setup.localizationData[initLocale] || {});

var IntlReducer = function IntlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _IntlActions.SWITCH_LANGUAGE:
      {
        var type = action.type,
            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


        return _extends({}, state, actionWithoutType);
      }

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("intl");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("intl-locales-supported");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  messages: {
    siteTitle: 'MERN Starter Blog',
    addPost: 'Add Post',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Author\'s Name',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    submit: 'Submit',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'fr',
  messages: {
    siteTitle: 'MERN blog de démarrage',
    addPost: 'Ajouter Poster',
    switchLanguage: 'Changer de langue',
    twitterMessage: 'Nous sommes sur Twitter',
    by: 'Par',
    deletePost: 'Supprimer le message',
    createNewPost: 'Créer un nouveau message',
    authorName: 'Nom de l\'auteur',
    postTitle: 'Titre de l\'article',
    postContent: 'Contenu après',
    submit: 'Soumettre',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(28);

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return _extends({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AuthActions = __webpack_require__(12);

var initialState = {
    token: ''
};

var AuthReducer = function AuthReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _AuthActions.REGISTER_TOKEN:
            return _extends({}, state, {
                token: action.token
            });
        default:
            return state;
    }
};

exports.default = AuthReducer;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _App = __webpack_require__(92);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(30);

var _Home2 = _interopRequireDefault(_Home);

var _Dashboard = __webpack_require__(38);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Info = __webpack_require__(44);

var _Info2 = _interopRequireDefault(_Info);

var _UserDashboard = __webpack_require__(45);

var _UserDashboard2 = _interopRequireDefault(_UserDashboard);

var _ProjectDetailView = __webpack_require__(46);

var _ProjectDetailView2 = _interopRequireDefault(_ProjectDetailView);

var _UserBrowseProjects = __webpack_require__(47);

var _UserBrowseProjects2 = _interopRequireDefault(_UserBrowseProjects);

var _UserGuide = __webpack_require__(48);

var _UserGuide2 = _interopRequireDefault(_UserGuide);

var _LiveChat = __webpack_require__(49);

var _LiveChat2 = _interopRequireDefault(_LiveChat);

var _MyTickets = __webpack_require__(50);

var _MyTickets2 = _interopRequireDefault(_MyTickets);

var _SignIn = __webpack_require__(51);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _CustomerSignIn = __webpack_require__(52);

var _CustomerSignIn2 = _interopRequireDefault(_CustomerSignIn);

var _CustomerSignUp = __webpack_require__(53);

var _CustomerSignUp2 = _interopRequireDefault(_CustomerSignUp);

var _ProjectDetail = __webpack_require__(54);

var _ProjectDetail2 = _interopRequireDefault(_ProjectDetail);

var _Project = __webpack_require__(56);

var _Project2 = _interopRequireDefault(_Project);

var _Referral = __webpack_require__(131);

var _Referral2 = _interopRequireDefault(_Referral);

var _CheckTickets = __webpack_require__(132);

var _CheckTickets2 = _interopRequireDefault(_CheckTickets);

var _ClaimBenefits = __webpack_require__(133);

var _ClaimBenefits2 = _interopRequireDefault(_ClaimBenefits);

var _TransferTicket = __webpack_require__(134);

var _TransferTicket2 = _interopRequireDefault(_TransferTicket);

var _Account = __webpack_require__(135);

var _Account2 = _interopRequireDefault(_Account);

var _Statistics = __webpack_require__(136);

var _Statistics2 = _interopRequireDefault(_Statistics);

var _Admin = __webpack_require__(137);

var _Admin2 = _interopRequireDefault(_Admin);

var _SignUp = __webpack_require__(138);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _User = __webpack_require__(57);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  // require('./modules/Post/pages/PostListPage/PostListPage');
  // require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  __webpack_require__(43);
  __webpack_require__(57);
  __webpack_require__(56);
  __webpack_require__(38);
  __webpack_require__(51);
  __webpack_require__(30);
  __webpack_require__(32);
  __webpack_require__(34);
  __webpack_require__(33);
  __webpack_require__(54);
  __webpack_require__(47);
  __webpack_require__(45);
  __webpack_require__(44);
  __webpack_require__(48);
  __webpack_require__(49);
  __webpack_require__(50);
  __webpack_require__(52);
  __webpack_require__(53);
  __webpack_require__(46);
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
exports.default = _jsx(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, _jsx(_reactRouter.IndexRoute, {
  component: _Home2.default
}), _jsx(_reactRouter.Route, {
  path: '/:id',
  component: _Home2.default
}), _jsx(_reactRouter.Route, {
  path: '/admin/signup',
  component: _SignUp2.default
}), _jsx(_reactRouter.Route, {
  path: '/admin/',
  component: _Admin2.default
}, void 0, _jsx(_reactRouter.Route, {
  path: 'statistics',
  component: _Statistics2.default
}), _jsx(_reactRouter.Route, {
  path: 'dashboard',
  component: _Dashboard2.default
}), _jsx(_reactRouter.Route, {
  path: 'user',
  component: _User2.default
}), _jsx(_reactRouter.Route, {
  path: 'project',
  component: _Project2.default
}), _jsx(_reactRouter.Route, {
  path: 'project/:id',
  component: _ProjectDetail2.default
}), _jsx(_reactRouter.Route, {
  path: 'projectdetail/:id',
  component: _ProjectDetailView2.default
})), _jsx(_reactRouter.Route, {
  path: '/user/browseprojects',
  component: _UserBrowseProjects2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/info',
  component: _Info2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/userguide',
  component: _UserGuide2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/livechat',
  component: _LiveChat2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/dashboard',
  component: _UserDashboard2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/mytickets',
  component: _MyTickets2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/referral',
  component: _Referral2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/checktickets',
  component: _CheckTickets2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/claimbenefits',
  component: _ClaimBenefits2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/transferticket',
  component: _TransferTicket2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/account',
  component: _Account2.default
}), _jsx(_reactRouter.Route, {
  path: '/admin/signin',
  component: _SignIn2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/signin',
  component: _CustomerSignIn2.default
}), _jsx(_reactRouter.Route, {
  path: '/user/signup',
  component: _CustomerSignUp2.default
}));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

({
  "container": "_15uqt7TaQcflNYjiD0-re1",
  "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
  "navbar": "r0tK_hN9XfaO2C-9Sh67c",
  "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
  "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
  "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
  "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
  "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
  "warning-color": "_1OympKK90iElTFWJEh1Jji",
  "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
  "bg-black": "v5zugY8mFAzsnUPR2OpAj",
  "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
  "title": "_2us7i3q_OFQBUo3KaAHXST",
  "titleText": "_3yd9WKu36aookqwSC4zHbZ",
  "remaining": "_19lROJjDgJHKg2fDy4hXy5",
  "projectContent": "_3YoSe5JQbItfRMXY36xY18",
  "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
  "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
  "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
  "card-img": "c8T6BuUQgGyW-p7YSbMSb",
  "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
  "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
  "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
  "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
  "top-right": "QUvGwUGW6l2l4tcm08_1e",
  "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
  "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
  "card-body": "_8WCSVFs5mPnPhqthoEMXe",
  "card-text": "Go9AFidT1cviIexOlKAU3",
  "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
  "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
  "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
  "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
  "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
  "card-footer": "_238lbLW67oZgsdZauBlV8u",
  "btn-group": "_2enlR6nLLD6spYcyO16nNY",
  "active": "_2vi9GRrEPGBuz_XdY0hptk",
  "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
  "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
  "short-desc": "i-gy25lTO8GRIScYh5Goh",
  "email": "_1TB63twZ6YI-dVq4w_m3hz",
  "slider": "_182_wh07jDFAmV5SiUGLs8",
  "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
  "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
  "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
  "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
  "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
  "imgPreview": "zYBr_XDukO0cS237JE_1s",
  "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
  "table-root": "_43CNFFh3G9FkI_LLheoWN",
  "table-title": "PZrsg3QrA93IKIHkk6Qk8",
  "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
  "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
  "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
  "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
  "btn": "_3aMHk1ejFXCDAtixQMIePw",
  "btn-info": "_2GiBt9lD88S9_kS37bfD84",
  "disabled": "_3R6S8sMJqJj5fchoo_zHt",
  "show": "nc13Jmcx2no9HxnI8dnmM",
  "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
  "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
  "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
  "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
  "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
  "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
  "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
  "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
  "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
  "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
  "fs-11": "_281GRscc7yVaKAAkLduGkX",
  "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
  "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
  "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
  "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
  "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
  "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
  "text-left": "_36MPyhULcyg1hnTVZwIIf_",
  "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
  "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
  "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
  "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
  "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
  "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
  "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
  "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
  "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
  "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
  "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
  "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
  "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
  "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
  "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
  "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
  "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
  "number-filter": "_1S8FeuVZOouElU0MkYwREr",
  "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
  "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
  "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
  "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
  "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
  "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
  "form-control": "_1UV86qZVq_nAcy22dU556D",
  "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
  "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
  "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
  "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
  "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
  "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
  "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
  "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
  "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
  "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
  "animated": "_1tmG1OEsEI7rSba-kiD1-X",
  "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
  "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
  "shake": "_1sPzTruCO1uBNCyVmaYSg0",
  "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _reactHelmet = __webpack_require__(17);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _AppActions = __webpack_require__(5);

var _background = '/' + "4a845e5fc3c86528bd0cb29e66c68d7e.png";

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


// Import Components


// Import Actions

// import { switchLanguage } from '../../modules/Intl/IntlActions';


var DevTools = void 0;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(29).default;
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.toggleAddPostSection = function () {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
    };

    _this.state = { isMounted: false };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // let token = localStorage.getItem('smartproject');
      // if (token == null) {
      //   token = '';
      // }
      // this.props.dispatch(registerAuth(token));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx('div', {
        style: { backgroundColor: '#fff' }
      }, void 0, _jsx(_reactHelmet2.default, {
        title: 'SmartProject',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), _jsx('div', {}, void 0, this.props.children)));
    }
  }]);

  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("react-timeout");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _videoReact = __webpack_require__(18);

({
    "gallery-block": "_3OTASnFyiGX0HAyCWwvwjz",
    "heading": "_3O53eapAbVLnVSE9swKtAB",
    "cards-gallery": "_2IGOZFOr0LAOKcWtmvI_vS",
    "card": "_3vLWJbo1qbzLPaJDTTsUQh",
    "card-body": "_2K7c-ToTuXVgVJUmAwtLQQ",
    "transform-on-hover": "UPsmNVvtWwukvOi8ZiMuK"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('div', {
    className: 'text-right'
}, void 0, _jsx('small', {
    className: 'text-muted'
}));

var _ref2 = _jsx('i', {
    className: 'fa fa-map-marker fa-2x align-middle warning-color',
    'aria-hidden': 'true'
});

var _ref3 = _jsx('i', {
    className: 'fa fa-info-circle fa-2x align-middle',
    'aria-hidden': 'true'
});

var _ref4 = _jsx('i', {
    className: 'fa fa-file-video-o fa-2x align-middle',
    'aria-hidden': 'true'
});

var _ref5 = _jsx('i', {
    className: 'fa fa-picture-o fa-2x align-middle',
    'aria-hidden': 'true'
});

function ProjectView(props) {
    var project = props.project,
        remainingDays = props.remainingDays,
        activePane = props.activePane,
        toggleDetail = props.toggleDetail;


    var $imageGallery = null;
    if (project.images) {
        $imageGallery = project.images.map(function (image, key) {
            return _jsx('div', {
                className: 'col-sm-6 col-md-6 col-lg-6'
            }, key, _jsx('div', {
                className: 'card border-0 transform-on-hover'
            }, void 0, _jsx('div', {
                className: 'card-img-container'
            }, void 0, _jsx('a', {
                className: 'thumbnail fancybox',
                rel: 'ligthbox',
                href: 'http://' + window.location.host + '/' + image
            }, void 0, _jsx('img', {
                width: '100%',
                className: 'img-responsive',
                alt: '',
                src: 'http://' + window.location.host + '/' + image
            }), _ref))));
        }, this);
    }
    var detailInfo = null;
    if (project.keyfacts) {
        detailInfo = project.keyfacts.map(function (fact, key) {
            return _jsx('div', {
                className: 'col-sm-6 col-md-6 col-lg-6 black-color'
            }, key, _jsx('div', {
                className: 'card border-0 transform-on-hover transparent-card'
            }, void 0, _jsx('div', {
                className: 'card-body'
            }, void 0, fact.name)));
        }, this);
    }
    var topLeftClass = activePane == 'Thumb' ? 'btn btn-info btn-link top-left' : 'd-none';
    var shortDescClass = activePane == 'Thumb' ? 'fs-125 short-desc' : 'd-none';
    var fullDescClass = activePane == 'Info' ? 'fs-125 short-desc' : 'd-none';
    var normalButtonClass = 'btn btn-info btn-link p-2';
    var InfoButtonClass = activePane == 'Info' ? normalButtonClass + ' active' : normalButtonClass;
    var videoButtonClass = activePane == 'Video' ? normalButtonClass + ' active' : normalButtonClass;
    var GalleryButtonClass = activePane == 'Gallery' ? normalButtonClass + ' active' : normalButtonClass;
    return _jsx('div', {
        className: 'col-md-7 col-sm-12 col-12 mb-20'
    }, void 0, _jsx('div', {
        className: ''
    }, void 0, _jsx('div', {
        className: 'clearfix pb-4'
    }, void 0, _jsx('h2', {
        className: 'main-title'
    }, void 0, project.title), _jsx('div', {
        className: 'card-title text-uppercase'
    }, void 0, _jsx('div', {
        className: 'title-wraper'
    }, void 0, _jsx('div', {
        className: 'sub-title'
    }, void 0, ' ', project.subTitle), _jsx('strong', {
        className: '',
        style: { fontSize: '1.15em' }
    }, void 0, remainingDays, ' Days Left')))), _jsx('div', {
        className: 'card-img-container'
    }, void 0, activePane == 'Thumb' && _jsx('img', {
        className: 'card-img-top cursor-point',
        src: project.projectThumbnail,
        alt: 'Card image cap'
    }), activePane == 'Video' && _jsx(_videoReact.Player, {}, void 0, _jsx('source', {
        playsInline: true,
        src: 'http://' + window.location.host + '/' + project.video
    })), activePane == 'Gallery' && _jsx('div', {
        className: 'gallery-block cards-gallery'
    }, void 0, _jsx('div', {
        className: 'row'
    }, void 0, $imageGallery)), activePane == 'Info' && _jsx('div', {
        className: 'row'
    }, void 0, detailInfo), _jsx('a', {
        href: '#',
        className: topLeftClass,
        'data-toggle': 'tooltip',
        title: 'Location'
    }, void 0, _jsx('span', {
        className: 'align-middle'
    }, void 0, project.address && project.address.city), _ref2), _jsx('div', {
        className: 'top-right'
    }, void 0, _jsx('a', {
        href: '#',
        className: InfoButtonClass,
        onClick: function onClick() {
            return toggleDetail('Info');
        }
    }, void 0, _ref3), _jsx('a', {
        href: 'javascrip:void(0)',
        title: 'Video Teaser',
        onClick: function onClick() {
            return toggleDetail('Video');
        },
        className: videoButtonClass
    }, void 0, _ref4), _jsx('a', {
        href: 'javascript:void(0)',
        title: 'Images',
        onClick: function onClick() {
            return toggleDetail('Gallery');
        },
        className: GalleryButtonClass
    }, void 0, _ref5)), _jsx('div', {
        className: shortDescClass
    }, void 0, _jsx('p', {}, void 0, ' ', project.shortDescription)), _jsx('div', {
        className: fullDescClass
    }, void 0, _jsx('p', {}, void 0, ' ', project.fullDescription)))));
}

exports.default = ProjectView;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Slider");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _qrImage = __webpack_require__(97);

var qrImage = _interopRequireWildcard(_qrImage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactBTCQR = function ReactBTCQR(props) {
    var pngBuffer = qrImage.imageSync(props.text, { type: 'png', margin: 1 });
    var dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64');
    return _jsx('img', {
        className: 'react-qr',
        src: dataURI,
        alt: 'react qr'
    });
};

exports.default = ReactBTCQR;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("qr-image");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("ethereum-qr-code");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-clipboard.js");

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _payment_confirmed = '/' + "1b149d819c78564338647731c7a270af.png";

var _payment_confirmed2 = _interopRequireDefault(_payment_confirmed);

var _BTC_yellow = '/' + "ce4b36cd2f379e7b213717950d2bfa4b.png";

var _BTC_yellow2 = _interopRequireDefault(_BTC_yellow);

var _ETH_color = '/' + "3717b4697e78c2f583c3e26e1d8c806f.png";

var _ETH_color2 = _interopRequireDefault(_ETH_color);

var _LTC_yellow = '/' + "0cf6af4b7e3c990575a4fb3d98961837.png";

var _LTC_yellow2 = _interopRequireDefault(_LTC_yellow);

var _Ticket_Black_Clean = "data:image/png;base64,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";

var _Ticket_Black_Clean2 = _interopRequireDefault(_Ticket_Black_Clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('div', {
    className: 'd-flex flex-column align-items-center justify-content-center mt-3 px-1 fb'
}, void 0, _jsx('h5', {
    className: 'fb'
}, void 0, 'THANK YOU!'), _jsx('img', {
    src: _payment_confirmed2.default,
    width: '200',
    height: '200'
}));

var _ref3 = _jsx('div', {
    className: 'px-1 mb-1'
}, void 0, _jsx('h5', {
    className: 'fb text-left'
}, void 0, 'TRANSACTION COMPLETED'), _jsx('div', {}, void 0, 'An confirmation has sent to you'));

var _ref4 = _jsx('div', {
    className: 'card-footer d-flex justify-content-around card-bg btn-group p-0 ',
    role: 'group',
    'aria-label': 'Basic example'
}, void 0, _jsx('div', {
    className: 'btn-group btn-group-toggle mt-0 mb-0',
    'data-toggle': 'buttons'
}, void 0, _jsx('label', {
    className: 'btn active',
    'data-toggle': 'tooltip',
    title: 'Bitcoin'
}, void 0, _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option1'
}), _jsx('img', {
    src: _BTC_yellow2.default,
    alt: 'BTC',
    width: '50',
    height: '50'
})), _jsx('label', {
    className: 'btn',
    'data-toggle': 'tooltip',
    title: 'Ethereum'
}, void 0, _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option2'
}), _jsx('img', {
    src: _ETH_color2.default,
    alt: 'ETH',
    width: '50',
    height: '50'
})), _jsx('label', {
    className: 'btn',
    'data-toggle': 'tooltip',
    title: 'Litecoin'
}, void 0, _jsx('input', {
    type: 'radio',
    name: 'options',
    id: 'option3'
}), _jsx('img', {
    src: _LTC_yellow2.default,
    alt: 'LTC',
    width: '50',
    height: '50'
}))));

var Thankyou = function (_React$Component) {
    _inherits(Thankyou, _React$Component);

    function Thankyou() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Thankyou);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Thankyou.__proto__ || Object.getPrototypeOf(Thankyou)).call.apply(_ref, [this].concat(args))), _this), _this.gotoDashboard = function () {
            _reactRouter.browserHistory.push('/user/dashboard');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Thankyou, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                tickets = _props.tickets,
                coinTypeArray = _props.coinTypeArray,
                totalPrice = _props.totalPrice,
                ticketPrice = _props.ticketPrice,
                coinType = _props.coinType,
                project = _props.project;


            return _jsx('div', {
                className: 'col-xl-4 col-lg-5 col-md-5 col-sm-12 right-pane'
            }, void 0, _jsx('div', {
                className: 'card px-3 card-bg'
            }, void 0, _ref2, _ref3, _jsx('div', {
                className: 'justify-content-center mt-2 pt-1 pb-4 ticket-background',
                role: 'alert',
                style: { backgroundImage: 'url(' + _Ticket_Black_Clean2.default + ')', height: '70px' }
            }, void 0, _jsx('h5', {
                className: 'card-title text-center fw-500 text-white fs-125 mb-0 mt-1',
                style: { paddingTop: '0.1rem' }
            }, void 0, _jsx('strong', {
                className: 'fs-11 text-white'
            }, void 0, tickets), ' tickets'), _jsx('div', {
                className: 'text-center'
            }, void 0, _jsx('span', {
                className: 'card-text mr-1 fs-1 text-white'
            }, void 0, ' ', totalPrice), _jsx('img', {
                src: coinTypeArray[coinType],
                alt: 'BTC',
                width: '25',
                height: '25'
            }))), _jsx('div', {
                className: 'mt-2'
            }, void 0, _jsx('span', {
                className: 'fb fs-11 warning-color mb-1'
            }, void 0, 'Only ', project.maximumAvailableTickets - tickets, ' out of ', project.totalTickets, ' left'), _jsx('div', {
                className: 'float-right mt-sm-2'
            }, void 0, _jsx('button', {
                onClick: this.gotoDashboard,
                className: 'btn btn-lg bg-dark text-white'
            }, void 0, 'Goto Dashboard'))), _ref4));
        }
    }]);

    return Thankyou;
}(_react2.default.Component);

exports.default = Thankyou;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(19);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(20);

var _Button2 = _interopRequireDefault(_Button);

var _CheckCircle = __webpack_require__(102);

var _CheckCircle2 = _interopRequireDefault(_CheckCircle);

var _Error = __webpack_require__(103);

var _Error2 = _interopRequireDefault(_Error);

var _Info = __webpack_require__(104);

var _Info2 = _interopRequireDefault(_Info);

var _Close = __webpack_require__(105);

var _Close2 = _interopRequireDefault(_Close);

var _green = __webpack_require__(106);

var _green2 = _interopRequireDefault(_green);

var _amber = __webpack_require__(107);

var _amber2 = _interopRequireDefault(_amber);

var _IconButton = __webpack_require__(21);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Snackbar = __webpack_require__(108);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _SnackbarContent = __webpack_require__(109);

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _Warning = __webpack_require__(110);

var _Warning2 = _interopRequireDefault(_Warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var variantIcon = {
  success: _CheckCircle2.default,
  warning: _Warning2.default,
  error: _Error2.default,
  info: _Info2.default
};

var styles = function styles(theme) {
  return {
    success: {
      backgroundColor: _green2.default[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: _amber2.default[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

var MySnackbarContentWrapper = function MySnackbarContentWrapper(obj) {
  var className = obj.className,
      message = obj.message,
      onClose = obj.onClose,
      variant = obj.variant,
      other = _objectWithoutProperties(obj, ['className', 'message', 'onClose', 'variant']);

  var Icon = variantIcon[variant];

  return _react2.default.createElement(_SnackbarContent2.default, _extends({
    className: (0, _classnames2.default)(styles[variant], className),
    'aria-describedby': 'client-snackbar',
    message: _jsx('span', {
      id: 'client-snackbar',
      className: styles.message
    }, void 0, _jsx(Icon, {
      className: (0, _classnames2.default)(styles.icon, styles.iconVariant)
    }), message),
    action: [_jsx(_IconButton2.default, {
      'aria-label': 'Close',
      color: 'inherit',
      className: styles.close,
      onClick: onClose
    }, 'close', _jsx(_Close2.default, {
      className: styles.icon
    }))]
  }, other));
};

var _ref = _jsx(_Close2.default, {});

var CustomizedSnackbars = function (_React$Component) {
  _inherits(CustomizedSnackbars, _React$Component);

  function CustomizedSnackbars(props) {
    _classCallCheck(this, CustomizedSnackbars);

    var _this = _possibleConstructorReturn(this, (CustomizedSnackbars.__proto__ || Object.getPrototypeOf(CustomizedSnackbars)).call(this, props));

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(CustomizedSnackbars, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          handleClose = _props.handleClose,
          open = _props.open;


      return _jsx(_Snackbar2.default, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        open: open,
        autoHideDuration: 6000,
        onClose: handleClose,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: _jsx('span', {
          id: 'message-id'
        }, void 0, message),
        action: [_jsx(_IconButton2.default, {
          'aria-label': 'Close',
          color: 'inherit',
          className: 'p-2',
          onClick: handleClose
        }, 'close', _ref)]
      });
    }
  }]);

  return CustomizedSnackbars;
}(_react2.default.Component);

exports.default = CustomizedSnackbars;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(113);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(39);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Typography = __webpack_require__(22);

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = __webpack_require__(23);

var _Paper2 = _interopRequireDefault(_Paper);

var _TablePagination = __webpack_require__(114);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _TableRow = __webpack_require__(40);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _EnhancedTableToolbar = __webpack_require__(115);

var _EnhancedTableToolbar2 = _interopRequireDefault(_EnhancedTableToolbar);

var _EnhancedTableHead = __webpack_require__(43);

var _EnhancedTableHead2 = _interopRequireDefault(_EnhancedTableHead);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouter = __webpack_require__(2);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

({
  "container": "_15uqt7TaQcflNYjiD0-re1",
  "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
  "navbar": "r0tK_hN9XfaO2C-9Sh67c",
  "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
  "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
  "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
  "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
  "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
  "warning-color": "_1OympKK90iElTFWJEh1Jji",
  "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
  "bg-black": "v5zugY8mFAzsnUPR2OpAj",
  "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
  "title": "_2us7i3q_OFQBUo3KaAHXST",
  "titleText": "_3yd9WKu36aookqwSC4zHbZ",
  "remaining": "_19lROJjDgJHKg2fDy4hXy5",
  "projectContent": "_3YoSe5JQbItfRMXY36xY18",
  "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
  "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
  "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
  "card-img": "c8T6BuUQgGyW-p7YSbMSb",
  "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
  "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
  "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
  "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
  "top-right": "QUvGwUGW6l2l4tcm08_1e",
  "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
  "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
  "card-body": "_8WCSVFs5mPnPhqthoEMXe",
  "card-text": "Go9AFidT1cviIexOlKAU3",
  "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
  "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
  "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
  "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
  "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
  "card-footer": "_238lbLW67oZgsdZauBlV8u",
  "btn-group": "_2enlR6nLLD6spYcyO16nNY",
  "active": "_2vi9GRrEPGBuz_XdY0hptk",
  "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
  "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
  "short-desc": "i-gy25lTO8GRIScYh5Goh",
  "email": "_1TB63twZ6YI-dVq4w_m3hz",
  "slider": "_182_wh07jDFAmV5SiUGLs8",
  "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
  "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
  "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
  "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
  "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
  "imgPreview": "zYBr_XDukO0cS237JE_1s",
  "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
  "table-root": "_43CNFFh3G9FkI_LLheoWN",
  "table-title": "PZrsg3QrA93IKIHkk6Qk8",
  "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
  "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
  "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
  "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
  "btn": "_3aMHk1ejFXCDAtixQMIePw",
  "btn-info": "_2GiBt9lD88S9_kS37bfD84",
  "disabled": "_3R6S8sMJqJj5fchoo_zHt",
  "show": "nc13Jmcx2no9HxnI8dnmM",
  "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
  "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
  "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
  "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
  "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
  "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
  "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
  "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
  "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
  "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
  "fs-11": "_281GRscc7yVaKAAkLduGkX",
  "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
  "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
  "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
  "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
  "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
  "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
  "text-left": "_36MPyhULcyg1hnTVZwIIf_",
  "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
  "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
  "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
  "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
  "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
  "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
  "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
  "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
  "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
  "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
  "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
  "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
  "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
  "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
  "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
  "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
  "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
  "number-filter": "_1S8FeuVZOouElU0MkYwREr",
  "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
  "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
  "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
  "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
  "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
  "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
  "form-control": "_1UV86qZVq_nAcy22dU556D",
  "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
  "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
  "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
  "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
  "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
  "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
  "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
  "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
  "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
  "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
  "animated": "_1tmG1OEsEI7rSba-kiD1-X",
  "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
  "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
  "shake": "_1sPzTruCO1uBNCyVmaYSg0",
  "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var headerRows = [{ id: 'title', numeric: false, disablePadding: true, label: 'Title' }, { id: 'tickets', numeric: true, disablePadding: false, label: 'Max Available Tickets' }, { id: 'total', numeric: true, disablePadding: false, label: 'Total (BTC)' }, { id: 'cnt', numeric: true, disablePadding: false, label: '# of Donors' }, { id: 'duration', numeric: true, disablePadding: false, label: 'Duration' }, { id: 'startDate', numeric: true, disablePadding: false, label: 'Start Date' }];

var _ref = _jsx(_TableCell2.default, {
  colSpan: 6
});

var EnhancedTable = function (_React$Component) {
  _inherits(EnhancedTable, _React$Component);

  function EnhancedTable(props) {
    _classCallCheck(this, EnhancedTable);

    var _this = _possibleConstructorReturn(this, (EnhancedTable.__proto__ || Object.getPrototypeOf(EnhancedTable)).call(this, props));

    _this.searchProject = function (name) {
      return function (event) {
        _this.setState(_extends({}, _this.state, {
          search: event.target.value
        }));
      };
    };

    _this.handleRequestSort = function (event, property) {
      var orderBy = property;
      var order = 'desc';

      if (_this.state.orderBy === property && _this.state.order === 'desc') {
        order = 'asc';
      }

      _this.setState({ order: order, orderBy: orderBy });
    };

    _this.handleSelectAllClick = function (event) {
      if (event.target.checked) {
        _this.setState({ selected: _this.state.data.map(function (n) {
            return n.id;
          }) });
        return;
      }
      _this.setState({ selected: [] });
    };

    _this.handleClick = function (event, id) {
      // const { selected } = this.state;
      // const selectedIndex = selected.indexOf(id);
      // let newSelected = [];

      // if (selectedIndex === -1) {
      //   newSelected = newSelected.concat(selected, id);
      // } else if (selectedIndex === 0) {
      //   newSelected = newSelected.concat(selected.slice(1));
      // } else if (selectedIndex === selected.length - 1) {
      //   newSelected = newSelected.concat(selected.slice(0, -1));
      // } else if (selectedIndex > 0) {
      //   newSelected = newSelected.concat(
      //     selected.slice(0, selectedIndex),
      //     selected.slice(selectedIndex + 1),
      //   );
      // }

      _reactRouter.browserHistory.push('/admin/projectdetail/' + id);
      // this.setState({ selected: newSelected });
    };

    _this.handleChangePage = function (event, page) {
      _this.setState({ page: page });
    };

    _this.handleChangeRowsPerPage = function (event) {
      _this.setState({ rowsPerPage: event.target.value });
    };

    _this.isSelected = function (id) {
      return _this.state.selected.indexOf(id) !== -1;
    };

    _this.state = {
      search: '',
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5
    };

    _this.handleRequestSort = _this.handleRequestSort.bind(props);
    _this.searchProject = _this.searchProject.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    return _this;
  }

  _createClass(EnhancedTable, [{
    key: 'desc',
    value: function desc(a, b, orderBy) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }
  }, {
    key: 'stableSort',
    value: function stableSort(array, cmp) {
      var stabilizedThis = array.map(function (el, index) {
        return [el, index];
      });
      stabilizedThis.sort(function (a, b) {
        var order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
      });
      return stabilizedThis.map(function (el) {
        return el[0];
      });
    }
  }, {
    key: 'getSorting',
    value: function getSorting(order, orderBy) {
      var _this2 = this;

      return order === 'desc' ? function (a, b) {
        return _this2.desc(a, b, orderBy);
      } : function (a, b) {
        return -_this2.desc(a, b, orderBy);
      };
    }
  }, {
    key: 'filterData',
    value: function filterData(data) {
      var keyword = this.state.search;
      var newData = [];
      for (var i = 0; i < data.length; i++) {
        keyword = keyword.toLowerCase();
        var val = data[i];
        if (val.title.toLowerCase().includes(keyword) || val.subTitle.toLowerCase().includes(keyword) || val.address.country.includes(keyword) || val.address.city.includes(keyword)) {
          newData.push(val);
        }
      }

      return newData;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var data = this.props.data;
      var _state = this.state,
          order = _state.order,
          orderBy = _state.orderBy,
          rowsPerPage = _state.rowsPerPage,
          page = _state.page;

      var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      data = this.filterData(data);
      return _jsx(_Paper2.default, {
        className: 'table-root p-4'
      }, void 0, _jsx('div', {
        className: 'd-flex flex-row'
      }, void 0, _jsx('div', {
        className: 'fs-125 fb',
        style: { flex: '1 1 auto' }
      }, void 0, 'Browser Projects'), _jsx(_TextField2.default, {
        id: 'outlined-search',
        label: 'Search Project',
        type: 'search',
        value: this.state.search,
        onChange: this.searchProject(''),
        margin: 'normal'
      })), _jsx('div', {
        className: 'table-wrapper'
      }, void 0, _jsx(_Table2.default, {
        className: 'table',
        'aria-labelledby': 'tableTitle'
      }, void 0, _jsx(_EnhancedTableHead2.default, {
        rows: headerRows,
        order: order,
        orderBy: orderBy,
        onRequestSort: this.handleRequestSort,
        rowCount: data.length
      }), _jsx(_TableBody2.default, {}, void 0, this.stableSort(data, this.getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (n) {
        var isSelected = _this3.isSelected(n._id);
        var a = (0, _moment2.default)(n.fundingDuration, 'YYYY-MM-DD');
        var b = (0, _moment2.default)().format('YYYY-MM-DD');
        var days = a.diff(b, 'days');
        var startDate = (0, _moment2.default)(n.startDate).format('MMM DD, YYYY');
        var actualDonors = n.donors.map(function (donor) {
          return donor._id;
        });
        var donors = actualDonors.filter(function (item, index) {
          return actualDonors.indexOf(item) >= index;
        });
        return _jsx(_TableRow2.default, {
          hover: true,
          onClick: function onClick(event) {
            return _this3.handleClick(event, n._id);
          },
          'aria-checked': isSelected,
          tabIndex: -1,
          className: 'cursor-point',
          selected: isSelected
        }, n._id, _jsx(_TableCell2.default, {
          component: 'th',
          scope: 'row',
          padding: 'none'
        }, void 0, n.title), _jsx(_TableCell2.default, {
          numeric: true
        }, void 0, Math.round(n.maximumAvailableTickets)), _jsx(_TableCell2.default, {
          numeric: true
        }, void 0, n.totalMoneyInBTC), _jsx(_TableCell2.default, {
          numeric: true
        }, void 0, donors.length), _jsx(_TableCell2.default, {
          numeric: true
        }, void 0, days, ' days'), _jsx(_TableCell2.default, {
          numeric: true
        }, void 0, startDate));
      }), emptyRows > 0 && _jsx(_TableRow2.default, {
        style: { height: 49 * emptyRows }
      }, void 0, _ref)))), _jsx(_TablePagination2.default, {
        component: 'div',
        count: data.length,
        rowsPerPage: rowsPerPage,
        page: page,
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage
      }));
    }
  }]);

  return EnhancedTable;
}(_react2.default.Component);

exports.default = EnhancedTable;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(19);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(116);

var _Toolbar = __webpack_require__(41);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(22);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(21);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Tooltip = __webpack_require__(42);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Delete = __webpack_require__(117);

var _Delete2 = _interopRequireDefault(_Delete);

var _FilterList = __webpack_require__(118);

var _FilterList2 = _interopRequireDefault(_FilterList);

var _colorManipulator = __webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toolbarStyles = function toolbarStyles(theme) {
  return {
    root: {
      paddingRight: theme.spacing.unit
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 100%'
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: '0 0 auto'
    }
  };
};

var _ref = _jsx(_Typography2.default, {
  variant: 'title',
  id: 'tableTitle'
}, void 0, 'Nutrition');

var _ref2 = _jsx(_Tooltip2.default, {
  title: 'Delete'
}, void 0, _jsx(_IconButton2.default, {
  'aria-label': 'Delete'
}, void 0, _jsx(_Delete2.default, {})));

var _ref3 = _jsx(_Tooltip2.default, {
  title: 'Filter list'
}, void 0, _jsx(_IconButton2.default, {
  'aria-label': 'Filter list'
}, void 0, _jsx(_FilterList2.default, {})));

var EnhancedTableToolbar = function (_React$Component) {
  _inherits(EnhancedTableToolbar, _React$Component);

  function EnhancedTableToolbar() {
    _classCallCheck(this, EnhancedTableToolbar);

    return _possibleConstructorReturn(this, (EnhancedTableToolbar.__proto__ || Object.getPrototypeOf(EnhancedTableToolbar)).apply(this, arguments));
  }

  _createClass(EnhancedTableToolbar, [{
    key: 'render',
    value: function render() {
      var numSelected = this.props.numSelected;


      return _jsx(_Toolbar2.default, {
        className: (0, _classnames2.default)(toolbarStyles.root, _defineProperty({}, toolbarStyles.highlight, numSelected > 0))
      }, void 0, _jsx('div', {
        className: toolbarStyles.title
      }, void 0, numSelected > 0 ? _jsx(_Typography2.default, {
        color: 'inherit',
        variant: 'subheading'
      }, void 0, numSelected, ' selected') : _ref), _jsx('div', {
        className: toolbarStyles.spacer
      }), _jsx('div', {
        className: toolbarStyles.actions
      }, void 0, numSelected > 0 ? _ref2 : _ref3));
    }
  }]);

  return EnhancedTableToolbar;
}(_react2.default.Component);

exports.default = EnhancedTableToolbar;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableSortLabel");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _Ticket_Black_Clean = "data:image/png;base64,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";

var _Ticket_Black_Clean2 = _interopRequireDefault(_Ticket_Black_Clean);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});
({
    "gallery-block": "_3OTASnFyiGX0HAyCWwvwjz",
    "heading": "_3O53eapAbVLnVSE9swKtAB",
    "cards-gallery": "_2IGOZFOr0LAOKcWtmvI_vS",
    "card": "_3vLWJbo1qbzLPaJDTTsUQh",
    "card-body": "_2K7c-ToTuXVgVJUmAwtLQQ",
    "transform-on-hover": "UPsmNVvtWwukvOi8ZiMuK"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('i', {
    className: 'fa fa-map-marker fa-2x align-middle warning-color',
    'aria-hidden': 'true'
});

var _ref2 = _jsx('i', {
    className: 'fa fa-btc text-white',
    'aria-hidden': 'true'
});

var _ref3 = _jsx('div', {
    className: ''
}, void 0, 'BUY TICKETS');

function ProjectItem(props) {
    console.log(props);
    var project = props.project,
        gotoHome = props.gotoHome;

    var a = (0, _moment2.default)(project.fundingDuration, 'YYYY-MM-DD');
    var b = (0, _moment2.default)().format('YYYY-MM-DD');
    var daysLeft = a.diff(b, 'days');
    var thumbnail = 'http://' + window.location.host + '/' + project.projectThumbnail;
    return _jsx('div', {
        className: 'col-md-6 col-lg-4 black-color'
    }, void 0, _jsx('div', {
        className: 'card border-0 transform-on-hover'
    }, void 0, _jsx('div', {
        className: 'card-img-container'
    }, void 0, _jsx('a', {
        href: '#',
        onClick: function onClick() {
            return gotoHome(project._id);
        }
    }, void 0, _jsx('img', {
        className: 'card-img-top',
        src: thumbnail,
        alt: project.title
    })), _jsx('a', {
        href: '#',
        className: 'btn btn-info btn-link top-left bg-dard',
        'data-toggle': 'tooltip',
        title: 'Location'
    }, void 0, _jsx('span', {
        className: 'align-middle'
    }, void 0, project.address && project.address.city), _ref), _jsx('div', {
        className: 'bottom-left bg-dark px-1'
    }, void 0, _jsx('span', {}, void 0, '$\xA0', project.totalMoneyInUSD), '\xA0\xA0', _ref2, '\xA0', _jsx('span', {}, void 0, project.totalMoneyInBTC))), _jsx('div', {
        className: 'p-2'
    }, void 0, _jsx('div', {
        className: 'text-left'
    }, void 0, _jsx('span', {}, void 0, 'Tickets From $', project.ticketPriceInUSD), _jsx('span', {
        className: 'float-right'
    }, void 0, daysLeft, ' Days Left')), _jsx('h3', {
        className: 'fb text-center'
    }, void 0, project.title), _jsx('div', {
        className: 'd-flex',
        role: 'alert'
    }, void 0, _jsx('a', {
        className: 'btn btn-info btn-link text-white gallery-ticket-background px-3',
        onClick: function onClick() {
            return gotoHome(project._id);
        },
        style: { backgroundImage: 'url(' + _Ticket_Black_Clean2.default + ')', paddingTop: '19px' }
    }, void 0, _ref3)))));
}

exports.default = ProjectItem;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-table");

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AuthHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Referral Page');

var _ref3 = _jsx(_Footer2.default, {});

var Referral = function (_React$Component) {
    _inherits(Referral, _React$Component);

    function Referral(props) {
        _classCallCheck(this, Referral);

        var _this = _possibleConstructorReturn(this, (Referral.__proto__ || Object.getPrototypeOf(Referral)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Referral, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return Referral;
}(_react2.default.Component);

exports.default = Referral;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AuthHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Check Your Tickets Page');

var _ref3 = _jsx(_Footer2.default, {});

var CheckTickets = function (_React$Component) {
    _inherits(CheckTickets, _React$Component);

    function CheckTickets(props) {
        _classCallCheck(this, CheckTickets);

        var _this = _possibleConstructorReturn(this, (CheckTickets.__proto__ || Object.getPrototypeOf(CheckTickets)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(CheckTickets, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return CheckTickets;
}(_react2.default.Component);

exports.default = CheckTickets;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AuthHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Claim Your Benefits Page');

var _ref3 = _jsx(_Footer2.default, {});

var ClaimBenefits = function (_React$Component) {
    _inherits(ClaimBenefits, _React$Component);

    function ClaimBenefits(props) {
        _classCallCheck(this, ClaimBenefits);

        var _this = _possibleConstructorReturn(this, (ClaimBenefits.__proto__ || Object.getPrototypeOf(ClaimBenefits)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(ClaimBenefits, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return ClaimBenefits;
}(_react2.default.Component);

exports.default = ClaimBenefits;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AuthHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'TransferTicket Page');

var _ref3 = _jsx(_Footer2.default, {});

var TransferTicket = function (_React$Component) {
    _inherits(TransferTicket, _React$Component);

    function TransferTicket(props) {
        _classCallCheck(this, TransferTicket);

        var _this = _possibleConstructorReturn(this, (TransferTicket.__proto__ || Object.getPrototypeOf(TransferTicket)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(TransferTicket, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return TransferTicket;
}(_react2.default.Component);

exports.default = TransferTicket;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthHeader = __webpack_require__(9);

var _AuthHeader2 = _interopRequireDefault(_AuthHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AuthHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Account Page');

var _ref3 = _jsx(_Footer2.default, {});

var Account = function (_React$Component) {
    _inherits(Account, _React$Component);

    function Account(props) {
        _classCallCheck(this, Account);

        var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Account, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartproject');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return Account;
}(_react2.default.Component);

exports.default = Account;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AdminHeader = __webpack_require__(10);

var _AdminHeader2 = _interopRequireDefault(_AdminHeader);

var _Footer = __webpack_require__(3);

var _Footer2 = _interopRequireDefault(_Footer);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_AdminHeader2.default, {});

var _ref2 = _jsx('h1', {}, void 0, 'Statistics Page');

var _ref3 = _jsx(_Footer2.default, {});

var Statistics = function (_React$Component) {
    _inherits(Statistics, _React$Component);

    function Statistics(props) {
        _classCallCheck(this, Statistics);

        var _this = _possibleConstructorReturn(this, (Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call(this, props));

        _this.state = {
            loading: true
        };
        return _this;
    }

    _createClass(Statistics, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== "undefined") {
                var token = window.localStorage.getItem('smartprojectadmin');
                this.setState({ isUnAuth: !token, token: token });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _ref, _jsx('div', {
                className: 'container-fluid mt-5',
                style: { paddingTop: '70px' }
            }, void 0, _ref2), _ref3);
        }
    }]);

    return Statistics;
}(_react2.default.Component);

exports.default = Statistics;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(17);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style

// Import Components


// Import Actions
// import { switchLanguage } from '../../modules/Intl/IntlActions';

var Admin = function (_Component) {
  _inherits(Admin, _Component);

  function Admin(props) {
    _classCallCheck(this, Admin);

    var _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

    _this.state = { isMounted: false };
    return _this;
  }

  _createClass(Admin, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // let token = localStorage.getItem('smartproject');
      // if (token == null) {
      //   token = '';
      // }
      // this.props.dispatch(registerAuth(token));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx('div', {
        style: { backgroundColor: '#fff' }
      }, void 0, _jsx(_reactHelmet2.default, {
        title: 'SmartProject - Admin',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), _jsx('div', {}, void 0, this.props.children)));
    }
  }]);

  return Admin;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Admin);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouter = __webpack_require__(2);

({
    "container": "_15uqt7TaQcflNYjiD0-re1",
    "container-fluid": "_32t_2lWhzg9aZ3n6W2ffPQ",
    "navbar": "r0tK_hN9XfaO2C-9Sh67c",
    "scrolling-navbar": "_3cGUBK8K_ZoTjUp32mhj2N",
    "navbar-nav": "_35mhKsrTppLca4_4P7yPgU",
    "top-nav-collapse": "_27rOnrrdWUH_Dd9jsVuJaj",
    "right-pane": "_2LmM3kRgX7eBTwZ3n74H--",
    "cursor-point": "_2SMFV9SyPSzETgmkWVNCgS",
    "warning-color": "_1OympKK90iElTFWJEh1Jji",
    "black-color": "_2FWTNkTEHGtw5cTJCVpizf",
    "bg-black": "v5zugY8mFAzsnUPR2OpAj",
    "waves-circle": "_1UWnOve0ZoG2Bz72OsOBs_",
    "title": "_2us7i3q_OFQBUo3KaAHXST",
    "titleText": "_3yd9WKu36aookqwSC4zHbZ",
    "remaining": "_19lROJjDgJHKg2fDy4hXy5",
    "projectContent": "_3YoSe5JQbItfRMXY36xY18",
    "ticket-background": "_1rX7J6EQrnRNMGDvdwb5Ab",
    "gallery-ticket-background": "baWP_ASuDqZs2NgCVB-11",
    "card-bg": "OfrkhK5uJdBk9CDBn2PqB",
    "card-img": "c8T6BuUQgGyW-p7YSbMSb",
    "card-img-container": "_3xMzRj7051rn5UpQ_kjVVm",
    "top-left": "_1ISwXgS0qFKN0CbTCpL65M",
    "top-left-detail": "_1ScBpm6N5jCLSq8xEhHMAZ",
    "gallery-top-right": "_5_WYyWi2L3FSSp4ybkjs-",
    "top-right": "QUvGwUGW6l2l4tcm08_1e",
    "top-right-detail": "lJN-Rxfxa468Z3lLrXl87",
    "bottom-left": "_3Afkg2oETpp87MF93pYDFA",
    "card-body": "_8WCSVFs5mPnPhqthoEMXe",
    "card-text": "Go9AFidT1cviIexOlKAU3",
    "card-title": "_3T6DQ0WhdiN8a_uA_biITz",
    "title-wraper": "_22SZLsrnNTyS39PhErbgiS",
    "main-title": "_1KYYn4tO8QPl_-hySGfZnZ",
    "sub-title": "_3POsUvF0nTHaT3GKFc_6jl",
    "badge": "_2Hoef3GzOaARAp0p7ZEGS9",
    "card-footer": "_238lbLW67oZgsdZauBlV8u",
    "btn-group": "_2enlR6nLLD6spYcyO16nNY",
    "active": "_2vi9GRrEPGBuz_XdY0hptk",
    "transparent-card": "_3v0h4cIot8xBulKoVhLcLp",
    "transform-on-hover": "_3ITxE2DMvsryQS832Zhr0l",
    "short-desc": "i-gy25lTO8GRIScYh5Goh",
    "email": "_1TB63twZ6YI-dVq4w_m3hz",
    "slider": "_182_wh07jDFAmV5SiUGLs8",
    "slider-control": "_1-lrQ6se0A7AqXZEaRZecF",
    "slider-ticks": "_1U7_vmXNJE_2oaxu8Io-K2",
    "MuiButtonBase-root-15": "_3NzUEehc7JMZbmg-tNDE0V",
    "MuiSlider-thumb-6": "_2CZFp-MIvoYRaKn8tc4DBv",
    "MuiSlider-track-3": "_1MfvIRGbV8FO73pUIMOk7g",
    "imgPreview": "zYBr_XDukO0cS237JE_1s",
    "videoPreview": "_2SSfDmmyow47Pjy9HetY6-",
    "table-root": "_43CNFFh3G9FkI_LLheoWN",
    "table-title": "PZrsg3QrA93IKIHkk6Qk8",
    "table-wrapper": "_3l3tjAw2Uzk6DF00am8VNh",
    "table": "_3yU1TMZ4Ad6WmPKG_3JQCc",
    "btn-coin": "_1jfNA5496CkOEu88VyXWFP",
    "btn-rounded": "_33mD2J58aol45Qww3SgVGh",
    "btn": "_3aMHk1ejFXCDAtixQMIePw",
    "btn-info": "_2GiBt9lD88S9_kS37bfD84",
    "disabled": "_3R6S8sMJqJj5fchoo_zHt",
    "show": "nc13Jmcx2no9HxnI8dnmM",
    "dropdown-toggle": "_3I5NTnt2F3B8XEkUipo1sU",
    "textField": "_2i3LgR7qwSxtkfJBgWiEaS",
    "gallery": "_1aB9Yi1FPDmWUEMCvKjec8",
    "back-to-top": "_1gPlqH43j3tWVvUy3-vY-q",
    "login": "_2Ny7ajGxRZeu_xQ3aeL7Gx",
    "mb-20": "_1aamsgvSMVSzCQYriIMp3Y",
    "mt-70": "_9ERY6uurmlGvJOVfUfI6B",
    "mt-100": "_1SXfpbEcBpeOrA4-Bx9a2a",
    "plr-30": "_1R7jfsQE2UsVQtCwm1FbS2",
    "fs-125": "_22PbxwsDZpg67GgBlpnGbG",
    "fs-11": "_281GRscc7yVaKAAkLduGkX",
    "fs-1": "_2ST6Xe4C9usbiemb-eWYp8",
    "fb": "_2ki4RZTpbkFqxLfsnsiFRz",
    "fw-500": "_1YiTYabdfyRmhWMkdOqBD1",
    "w-15rem": "_1-gvqTZoOwM-7_m0KtKX7s",
    "w-20rem": "rHVQm3DOk8ooQ1Kt6mfd5",
    "w-40rem": "_2FupFqrhKgvb3-6Fg6fExz",
    "text-left": "_36MPyhULcyg1hnTVZwIIf_",
    "selectErr": "_1qIkeUpUkCpIqj0oDnwzEh",
    "react-bs-table-container": "_1ZbJRuZOzMspq6eLI0-s60",
    "react-bs-table-search-form": "kH4qOtctTavMOqnVQYjkA",
    "react-bs-table-bordered": "_3pIow6mbq37y7VWvtuWmUC",
    "react-bs-table": "_1Xa-s2Ys3N3yOHsZ5VOi1s",
    "react-bs-table-pagination": "_3S98ITAef3a6U94W3i0Smj",
    "react-bs-table-tool-bar": "_3oXQvDpkm2pAKS1kTVoAEJ",
    "react-bs-container-header": "_3W5-Pt_AQ42c0aAa_tKEkH",
    "react-bs-container-footer": "_3im012Yn0V5l4wGGQYoTzf",
    "react-bs-container-body": "_1ZUmoBXj3mYKado0sEQV19",
    "react-bootstrap-table-page-btns-ul": "_3hFH_6-vAofEoacr920n4C",
    "table-bordered": "_2XLQE4UaAufGAy2MhOqlVx",
    "default-focus-cell": "_1UEMrow9oY-kqlFXNXk8hq",
    "filter": "_2-5cIbpY1DgAPfL4K1ZfRw",
    "select-filter": "_2DaRZesuPKCgpm46vkChkQ",
    "placeholder-selected": "_2kkqHkI9A_r0JAp1d6dlCo",
    "number-filter-input": "_3rZaRykpAMyIkEKPDg0a9s",
    "number-filter": "_1S8FeuVZOouElU0MkYwREr",
    "date-filter": "_1saM8FkUr2h1tT4wnZx39Y",
    "date-filter-input": "_1Z77Ymn1pGWj1R6Ne5K6I8",
    "number-filter-comparator": "_2skI3TVbAxCLB7NyzTsBE8",
    "date-filter-comparator": "_2SqpQMVvJsTpDuCN759818",
    "sort-column": "_8I9VCDvaoMzaNtTEEBK7w",
    "react-bs-container": "_20TlLvtDkczsNK5zeYTZ49",
    "form-control": "_1UV86qZVq_nAcy22dU556D",
    "editor": "_1g-BP1qXkrcRhQ47Fvx9cB",
    "textarea-save-btn": "_2Cn45z4-Y0kSjy63vQqjRG",
    "react-bs-table-no-data": "_2hVCLvZZqMbuoMH2FZ9eXN",
    "ReactModal__Overlay": "_2_1ka8WTU_VELJvamJd6wS",
    "ReactModal__Overlay--after-open": "_3bPGCe19B77l9gprOAKSmI",
    "ReactModal__Content": "_1qaSpn0kun9GUdAY5mh1Pa",
    "ReactModal__Content--after-open": "_1jGK7L0jIg1XSPMiE0iFtQ",
    "ReactModal__Overlay--before-close": "_1WhZzm05RKTF_KLYygpMkO",
    "ReactModal__Content--before-close": "_3x3OJygbgZ_vdB8uhkkTBU",
    "modal-dialog": "_1II4az2z3XokMYxR1zw0D9",
    "animated": "_1tmG1OEsEI7rSba-kiD1-X",
    "bounceIn": "_3TMLeOtkYw04NtjrCyuzUN",
    "bounceOut": "_1fcrbXxutvcSGqZSGnXp4A",
    "shake": "_1sPzTruCO1uBNCyVmaYSg0",
    "react-bs-table-expand-cell": "_3eLPYcPXgNd-ASAKlA-eQ0"
});

var _core = __webpack_require__(25);

var _apiCaller = __webpack_require__(6);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h2', {
    className: 'text-center text-uppercase'
}, void 0, 'Sign Up');

var _ref2 = _jsx('i', {
    className: 'fa fa-spinner fa-spin fa-3x text-red'
});

var _ref3 = _jsx('span', {
    className: 'text-uppercase mt-2 mb-2'
}, void 0, 'Or');

var SignUp = function (_React$Component) {
    _inherits(SignUp, _React$Component);

    function SignUp(props) {
        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

        _this.handleChange = function (name) {
            return function (event) {
                _this.setState(_extends({}, _this.state, _defineProperty({}, name, event.target.value)));
            };
        };

        _this.navigate = function (url) {
            _reactRouter.browserHistory.push(url);
        };

        _this.signUp = function () {
            var self = _this;
            self.setState(_extends({}, self.state, { isCreate: true }));
            (0, _apiCaller2.default)('users/signup', 'POST', { user: _this.state }).then(function (res, err) {
                var message = 'Successfully created';
                if (res.errors) {
                    message = res.errors;
                } else {
                    localStorage.setItem('smartprojectadmin', res.user.token);
                    _reactRouter.browserHistory.push('/');
                }
                self.setState(_extends({}, self.state, { isCreate: false, errOnCreate: message }));
            });
        };

        _this.state = {
            email: '',
            password: '',
            password_repeat: '',
            isCreate: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SignUp, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'container mt-100'
            }, void 0, _jsx('div', {
                className: 'card',
                style: { width: '33%', margin: '0 auto', minWidth: '330px' }
            }, void 0, _jsx('div', {
                className: 'card-head mt-5 text-center'
            }, void 0, _ref, this.state.isCreate && _ref2, !this.state.isCreate && _jsx('div', {
                className: 'warning-color text-center'
            }, void 0, this.state.errOnCreate)), _jsx('div', {
                className: 'd-flex justify-content-center align-items-center flex-column card-body'
            }, void 0, _jsx(_TextField2.default, {
                id: 'outlined-email-input',
                label: 'Email',
                className: 'textField',
                type: 'email',
                name: 'email',
                autoComplete: 'email',
                value: this.state.email,
                onChange: this.handleChange('email'),
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                id: 'standard-password-input',
                label: 'Password',
                className: 'textField',
                type: 'password',
                value: this.state.password,
                onChange: this.handleChange('password'),
                autoComplete: 'current-password',
                margin: 'normal'
            }), _jsx(_TextField2.default, {
                id: 'standard-password-input_repeat',
                label: 'Password',
                className: 'textField',
                type: 'password',
                value: this.state.password_repeat,
                onChange: this.handleChange('password_repeat'),
                autoComplete: 'current-password',
                margin: 'normal'
            }), _jsx('button', {
                onClick: function onClick() {
                    return _this2.signUp();
                },
                className: 'btn btn-lg bg-warning text-white mt-2 mb-2'
            }, void 0, 'Sign Up'), _ref3, _jsx('p', {}, void 0, 'Do you already have an account? please ', _jsx('a', {
                href: 'javascript:void(0)',
                onClick: function onClick() {
                    return _this2.navigate('/signin');
                },
                className: 'warning-color'
            }, void 0, 'Sign In')))));
        }
    }]);

    return SignUp;
}(_react2.default.Component);

exports.default = SignUp;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(140);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(16);

var _main = __webpack_require__(58);

var MainController = _interopRequireWildcard(_main);

var _auth = __webpack_require__(164);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/posts').get(MainController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(MainController.getPost);

// Add a new Post
router.route('/posts').post(MainController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(MainController.deletePost);

// Get help content
router.route('/projects').post(MainController.createProject);

router.route('/updateProjects').post(MainController.updateProject);

router.route('/deleteProjects').post(MainController.deleteProject);

router.route('/projects').get(MainController.getProjects);

router.route('/project/:id').get(MainController.getProject);

router.route('/users').get(MainController.getUsers);

router.route('/users/signin').post(MainController.signin);

router.route('/users/signup').post(MainController.signup);

router.use('/users/authcheck', _auth.checkToken, MainController.authCheck);

router.use('/users/authcheckAdmin', _auth.checkTokenAdmin, MainController.authCheckAdmin);

router.route('/users/customersignin').post(MainController.customerSignin);

router.route('/users/customersignup').post(MainController.customerSignup);

router.use('/users/getNow', _auth.checkToken, MainController.getNow);

router.route('/users/userSignup').post(MainController.userSignup);

router.route('/users/getCryptoAddr/:email/:projectID').post(MainController.getCryptoAddr);

router.use('/users/checkBTCBalance', _auth.checkToken, MainController.checkBTCBalance);

router.use('/users/checkLTCBalance', _auth.checkToken, MainController.checkLTCBalance);

router.use('/users/checkETHBalance', _auth.checkToken, MainController.checkETHBalance);

router.use('/user', _auth.checkToken, MainController.getUser);

router.route('/user').put(MainController.updateUser);

router.route('/upload').post(MainController.uploadFile);

router.route('/uploadVideo').post(MainController.uploadVideoFile);

router.route('/fxrate').get(MainController.getFxRate);

exports.default = router;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _module = __webpack_require__(143);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('mongoose-double')(mongoose);
var Schema = _mongoose2.default.Schema;

var addressSchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: false },
  location: { type: String, required: false }
});

var coinSchema = new Schema({
  address: { type: String, required: true }
});

var walletSchema = new Schema({
  BTC: coinSchema,
  ETH: coinSchema,
  LTC: coinSchema
});

var projectSchema = new Schema({
  title: { type: String, required: true, max: 30 },
  subTitle: { type: String, default: '', required: true, max: 45 },
  ticketPriceInBTC: { type: Number, default: 0.0, required: true },
  ticketPriceInETH: { type: Number, default: 0.0, required: true },
  ticketPriceInLTC: { type: Number, default: 0.0, required: true },
  ticketPriceInUSD: { type: Number, default: 0.0, required: true },
  maximumAvailableTickets: { type: Number, default: 100, required: true },
  totalTickets: { type: Number, default: 1000, required: true },
  maximumAvailableTicketsPerPerson: { type: Number, default: 10, required: true },
  fundingDuration: { type: String, default: '2020-07-09', required: true },
  projectThumbnail: { type: String, default: '', required: true },
  images: { type: Array, required: true, max: 10 },
  address: addressSchema,
  video: { type: String, default: '', required: false },
  shortDescription: { type: String, default: '', required: true },
  fullDescription: { type: String, default: '', required: true },
  keyfacts: { type: Array, required: true, max: 8 },
  wallet: walletSchema,
  donatedBTC: { type: Number, default: 0.0, required: false },
  donatedLTC: { type: Number, default: 0.0, required: false },
  donatedETH: { type: Number, default: 0.0, required: false },
  totalMoneyInBTC: { type: Number, default: 0.0, required: false },
  totalMoneyInUSD: { type: Number, default: 0.0, required: false },
  donors: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Signuped up users
  startDate: { type: Date, default: Date.now, required: true },
  dateAdded: { type: Date, default: Date.now, required: true }
});

module.exports = {
  Project: _mongoose2.default.model('Project', projectSchema),
  Address: _mongoose2.default.model('Address', addressSchema),
  Wallet: _mongoose2.default.model('Wallet', walletSchema),
  Coin: _mongoose2.default.model('Coin', coinSchema)
};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("mongoose-beautiful-unique-validation");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("limax");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sensitive = {
  sendgrid: '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'
};

exports.default = sensitive;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _user = __webpack_require__(60);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// auth.js
var passport = __webpack_require__(151);
var passportJWT = __webpack_require__(152);
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;

var params = {
    secretOrKey: 'secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
};

module.exports = function () {
    var strategy = new Strategy(params, function (payload, done) {
        _user2.default.findById(payload._id).then(function (user) {
            return done(null, {
                id: user._id
            });
        }).catch(function (err) {
            return done(err);
        });
    });
    passport.use(strategy);
    return {
        initialize: function initialize() {
            return passport.initialize();
        },
        authenticate: function authenticate() {
            console.log('passport');
            return passport.authenticate("jwt", {
                session: false
            });
        }
    };
};

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("unique-filename");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("generate-password");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bitcoin = __webpack_require__(157);
var bitcore = __webpack_require__(35);
var request = __webpack_require__(63);

var BITCOIN_DIGITS = 8;
var BITCOIN_SAT_MULT = Math.pow(10, BITCOIN_DIGITS);

var providers = {
	/**
  * Input: Address to retrieve the balance from.
  * Output: The balance in Satoshis.
  */
	balance: {
		mainnet: {
			blockexplorer: function blockexplorer(addr) {
				return request.get('https://blockexplorer.com/api/addr/' + addr + '/balance').send().then(function (res) {
					return parseFloat(res.body);
				});
			},
			blockchain: function blockchain(addr) {
				return request.get('https://blockchain.info/q/addressbalance/' + addr + '?confirmations=3').send().then(function (res) {
					return parseFloat(res.body);
				});
			},
			chain: function chain(addr) {
				return request.get('https://chain.so/api/v2/get_address_balance/BTC/' + addr + '/3').send().then(function (res) {
					return parseFloat(res.body);
				});
			}
		},
		testnet: {
			blockexplorer: function blockexplorer(addr) {
				return request.get('https://testnet.blockexplorer.com/api/addr/' + addr + '/balance').send().then(function (res) {
					return parseFloat(res.body);
				});
			},
			chain: function chain(addr) {
				return request.get('https://chain.so/api/v2/get_address_balance/BTC/' + addr + '/3').send().then(function (res) {
					return parseFloat(res.body);
				});
			}
		}
	},
	/**
  * Input: Requested processing speed. "fastest", "halfHour" or "hour"
  * Output: Fee rate in Satoshi's per Byte.
  */
	fees: {
		mainnet: {
			earn: function earn(feeName) {
				return request.get('https://bitcoinfees.earn.com/api/v1/fees/recommended').send().then(function (res) {
					return res.body[feeName + "Fee"];
				});
			}
		},
		testnet: {
			earn: function earn(feeName) {
				return request.get('https://bitcoinfees.earn.com/api/v1/fees/recommended').send().then(function (res) {
					return res.body[feeName + "Fee"];
				});
			}
		}
	},
	/**
  * Input: Sending user's BitCoin wallet address.
  * Output: List of utxo's to use. Must be in standard format. { txid, vout, satoshis, confirmations }
  */
	utxo: {
		mainnet: {
			blockexplorer: function blockexplorer(addr) {
				return request.get('https://blockexplorer.com/api/addr/' + addr + '/utxo?noCache=1').send().then(function (res) {
					return res.body.map(function (e) {
						return {
							txid: e.txid,
							vout: e.vout,
							satoshis: e.satoshis,
							confirmations: e.confirmations
						};
					});
				});
			},
			blockchain: function blockchain(addr) {
				return request.get('https://blockchain.info/unspent?active=' + addr).send().then(function (res) {
					return res.body.unspent_outputs.map(function (e) {
						return {
							txid: e.tx_hash_big_endian,
							vout: e.tx_output_n,
							satoshis: e.value,
							confirmations: e.confirmations
						};
					});
				});
			}
		},
		testnet: {
			blockexplorer: function blockexplorer(addr) {
				return request.get('https://testnet.blockexplorer.com/api/addr/' + addr + '/utxo?noCache=1').send().then(function (res) {
					return res.body.map(function (e) {
						return {
							txid: e.txid,
							vout: e.vout,
							satoshis: e.satoshis,
							confirmations: e.confirmations
						};
					});
				});
			}
		}
	},
	/**
  * Input: A hex string transaction to be pushed to the blockchain.
  * Output: None
  */
	pushtx: {
		mainnet: {
			blockexplorer: function blockexplorer(hexTrans) {
				return request.post('https://blockexplorer.com/api/tx/send').send('rawtx: ' + hexTrans);
			},
			blockchain: function blockchain(hexTrans) {
				return request.post('https://blockchain.info/pushtx').send('tx=' + hexTrans);
			},
			omni: function omni(hexTrans) {
				return request.post('https://api.omniwallet.org/v1/transaction/pushtx/').send('signedTransaction=' + hexTrans);
			}
		},
		testnet: {
			blockexplorer: function blockexplorer(hexTrans) {
				return request.post('https://testnet.blockexplorer.com/api/tx/send').send('rawtx: ' + hexTrans);
			},
			blockcypher: function blockcypher(hexTrans) {
				return request.post('https://api.blockcypher.com/v1/btc/test3/txs/push').send('{"tx":"' + hexTrans + '"}');
			}
		}
	}

	//Set default providers
};providers.balance.mainnet.default = providers.balance.mainnet.blockexplorer;
providers.balance.testnet.default = providers.balance.testnet.blockexplorer;
providers.fees.mainnet.default = providers.fees.mainnet.earn;
providers.fees.testnet.default = providers.fees.testnet.earn;
providers.utxo.mainnet.default = providers.utxo.mainnet.blockexplorer;
providers.utxo.testnet.default = providers.utxo.testnet.blockexplorer;
providers.pushtx.mainnet.default = providers.pushtx.mainnet.blockchain;
providers.pushtx.testnet.default = providers.pushtx.testnet.blockcypher;

function getBalance(addr, options) {
	if (options == null) options = {};
	if (options.network == null) options.network = "mainnet";
	if (options.balanceProvider == null) options.balanceProvider = providers.balance[options.network].default;
	if (options.balanceProvider == 'chain') options.balanceProvider = providers.balance[options.network].chain;

	return options.balanceProvider(addr).then(function (balSat) {
		return balSat / BITCOIN_SAT_MULT;
	});
}

function getTransactionSize(numInputs, numOutputs) {
	return numInputs * 180 + numOutputs * 34 + 10 + numInputs;
}

function getFees(provider, feeName) {
	if (typeof feeName === 'number') {
		return Promise.resolve(feeName);
	} else {
		return provider(feeName);
	}
}

function createUserBitcoinAddress() {
	var address = null;
	var keyPair = null;
	try {
		// var value = Buffer.from('correct horse battery staple');
		// var hash = bitcore.crypto.Hash.sha256(value);
		//   var buffer = new bitcore.crypto.Random.getPseudoRandomBuffer(32);
		//   var bn = new bitcore.crypto.BN.fromBuffer(buffer);
		//   var privateKey = new bitcore.PrivateKey(bn, process.env.BTCNET); // testnet for test purpose'
		//   privateAddress = privateKey.toWIF().toString();
		//   address = new bitcore.PublicKey(privateKey);
		var network = bitcoin.networks.testnet;
		if (process.env.BTCNET == 'mainnet') {
			network = bitcoin.networks.mainnet;
		}
		keyPair = bitcoin.ECPair.makeRandom({ network: network });
		address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: network });
	} catch (err) {
		console.log(err);
	}

	return {
		publicKey: address.address.toString(),
		privateKey: keyPair.toWIF()
	};
};

function sendTransaction(options) {
	//Required
	if (options == null || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') throw "Options must be specified and must be an object.";
	if (options.from == null) throw "Must specify from address.";
	if (options.to == null) throw "Must specify to address.";
	if (options.btc == null) throw "Must specify amount of btc to send.";
	if (options.privKeyWIF == null) throw "Must specify the wallet's private key in WIF format.";

	//Optionals
	if (options.network == null) options.network = 'mainnet';
	if (options.fee == null) options.fee = 'fastest';
	if (options.feesProvider == null) options.feesProvider = providers.fees[options.network].default;
	if (options.utxoProvider == null) options.utxoProvider = providers.utxo[options.network].default;
	if (options.pushtxProvider == null) options.pushtxProvider = providers.pushtx[options.network].default;
	if (options.dryrun == null) options.dryrun = false;

	var from = options.from;
	var to = options.to;
	var amount = options.btc;
	var amtSatoshi = Math.floor(amount * BITCOIN_SAT_MULT);
	var bitcoinNetwork = options.network == "testnet" ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;

	return Promise.all([getFees(options.feesProvider, options.fee), options.utxoProvider(from)]).then(function (res) {
		var feePerByte = res[0];
		var utxos = res[1];

		//Setup inputs from utxos
		var tx = new bitcoin.TransactionBuilder(bitcoinNetwork);
		var ninputs = 0;
		var availableSat = 0;
		for (var i = 0; i < utxos.length; i++) {
			var utxo = utxos[i];
			if (utxo.confirmations >= 1) {
				tx.addInput(utxo.txid, utxo.vout);
				availableSat += utxo.satoshis;
				ninputs++;

				if (availableSat >= amtSatoshi) break;
			}
		}

		if (availableSat < amtSatoshi) throw "You do not have enough in your wallet to send that much.";

		var change = availableSat - amtSatoshi;
		var fee = getTransactionSize(ninputs, change > 0 ? 2 : 1) * feePerByte;
		console.log('availableSat ', availableSat, ' amtSatoshi ', amtSatoshi, ' fee ', fee);
		if (fee > amtSatoshi) throw "BitCoin amount must be larger than the fee. (Ideally it should be MUCH larger)";
		tx.addOutput(to, amtSatoshi - fee);
		if (change > 0) tx.addOutput(from, change);
		var keyPair = bitcoin.ECPair.fromWIF(options.privKeyWIF, bitcoinNetwork);
		for (var i = 0; i < ninputs; i++) {
			tx.sign(i, keyPair);
		}
		var msg = tx.build().toHex();
		if (options.dryrun) {
			return msg;
		} else {
			return options.pushtxProvider(msg);
		}
	});
}

module.exports = {
	providers: providers,
	getBalance: getBalance,
	sendTransaction: sendTransaction,
	getFees: getFees,
	BITCOIN_SAT_MULT: BITCOIN_SAT_MULT,
	createUserBitcoinAddress: createUserBitcoinAddress
};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("bitcoinjs-lib");

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.createUserLitecoinAddress = createUserLitecoinAddress;
exports.getBalance = getBalance;
exports.getUTXOs = getUTXOs;
exports.broadcastTX = broadcastTX;
exports.sendTransaction = sendTransaction;
var litecore = __webpack_require__(36);
var litecoinjs = __webpack_require__(159);
var request = __webpack_require__(160);
var superagent = __webpack_require__(63);

var BITCOIN_DIGITS = 8;
var BITCOIN_SAT_MULT = Math.pow(10, BITCOIN_DIGITS);

function createUserLitecoinAddress() {
		var address = null;
		var privateAddress = null;
		try {
				// var value = Buffer.from('correct horse battery staple');
				// var hash = bitcore.crypto.Hash.sha256(value);
				var buffer = new litecore.crypto.Random.getPseudoRandomBuffer(16);
				var bn = new litecore.crypto.BN.fromBuffer(buffer);
				var privateKey = new litecore.PrivateKey(bn, process.env.LTCNET); // testnet for test purpose'
				privateAddress = privateKey.toWIF().toString();
				address = new litecore.PublicKey(privateKey);
		} catch (err) {
				console.log(err);
		}

		return {
				publicKey: address.toAddress().toString(),
				privateKey: privateAddress
		};
};

function getBalance(addr, network) {
		return superagent.get('https://chain.so/api/v2/get_address_balance/' + network + '/' + addr + '/3').send().then(function (res) {
				return parseFloat(res.body.data.confirmed_balance);
		});
}

function getUTXOs(address, network) {
		var uri = 'https://insight.litecore.io/api/addr/' + address + '/utxo';
		if (network == 'testnet') {
				uri = 'https://testnet.litecore.io/api/addr/' + address + '/utxo';
		}
		return new Promise(function (resolve, reject) {
				request({
						uri: uri,
						json: true
				}, function (error, response, body) {
						if (error) reject(error);
						// if (response.statusCode != 200) reject({ message: 'something is wrong'});
						resolve(body);
				});
		});
}

//manually hit an insight api to broadcast your tx
function broadcastTX(rawtx, network) {
		var uri = 'https://insight.litecore.io/api/tx/send';
		if (network == 'testnet') {
				uri = 'https://testnet.litecore.io/api/tx/send';
		}
		return new Promise(function (resolve, reject) {
				request({
						uri: uri,
						method: 'POST',
						json: {
								rawtx: rawtx
						}
				}, function (error, response, body) {
						if (error) reject(error);
						// if (response.statusCode != 200) reject({ message: 'something is wrong'});
						resolve(body.txid);
				});
		});
}

function sendTransaction(utxos, to, amount, fee, privateKeyWIF) {
		var tx = new litecore.Transaction() //use litecore-lib to create a transaction
		.from(utxos).to(to, amount) //note: you are sending all your balance AKA sweeping
		.fee(fee).sign(privateKeyWIF).serialize();

		return broadcastTX(tx, process.env.LTCNET); //broadcast the serialized tx


		// return litecoinjs.newTransaction({
		// 		network: process.env.LTCNET,
		// 		address: privateKeyWIF,
		// 		utxo: utxos,
		// 		output: [{
		// 			 address: to,
		// 			 amount: amount 
		// 		}],
		// 		fee: fee, // transaction fee 
		// });
}

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("litecoinjs");

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUserEthereumAddress = createUserEthereumAddress;
exports.getBalance = getBalance;
exports.sendTransaction = sendTransaction;
var ethereumjs = __webpack_require__(162);
var Web3 = __webpack_require__(37);
var Tx = __webpack_require__(163);

var web3 = new Web3();
var providerUrl = 'https://ropsten.infura.io/v3/2e2c0cd2784f400e853eff507cbbb469';
if (process.env.ETHNET == 'mainnet') {
    providerUrl = 'https://mainnet.infura.io/v3/2e2c0cd2784f400e853eff507cbbb469';
}

web3.setProvider(new Web3.providers.HttpProvider(providerUrl));

function createUserEthereumAddress() {
    var wallet = ethereumjs.generate();
    return {
        publicKey: wallet.getAddressString(),
        privateKey: wallet.getPrivateKeyString()
    };
}

function getBalance(addr) {
    return web3.eth.getBalance(addr).then(function (balance) {
        return Number(web3.utils.fromWei(balance));
    });
}

function sendTransaction(from, privateKey, to, amount) {
    var parameter = {
        from: from,
        to: to,
        value: web3.utils.toWei(amount + '', 'ether')
    };

    return new Promise(function (resolve, reject) {
        var confirms = 0;
        var txHash = '';
        web3.eth.estimateGas(parameter).then(function (gasLimit) {
            parameter.gasLimit = web3.utils.toHex(gasLimit + 10000);
            return web3.eth.getGasPrice();
        }).then(function (gasPrice) {
            parameter.gasPrice = web3.utils.toHex(gasPrice * 1.5);
            return web3.eth.getTransactionCount(from);
        }).then(function (count) {
            parameter.nonce = count;
            var transaction = new Tx(parameter);
            transaction.sign(Buffer.from(privateKey.replace('0x', ''), 'hex'));
            web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex')).once('transactionHash', function (hash) {
                txHash = hash;
                console.log('transactionHash https://etherscan.io/tx/' + hash);
            }).once('receipt', function (receipt) {
                console.log('receipt' + JSON.stringify(receipt));
            }).on('confirmation', function (confirmationNumber, receipt) {
                confirms++;
                console.log(confirms);
                if (confirms > 10) return resolve(txHash);
            }).on('error', reject);
        }).catch(reject);
    });
}

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-wallet");

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-tx");

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var jwt = __webpack_require__(61);

var checkToken = function checkToken(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.secret, function (err, decoded) {
      if (!err) {
        req.decoded = decoded;
      }
    });
  }

  next();
};

var checkTokenAdmin = function checkTokenAdmin(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.secret, function (err, decoded) {
      if (!err) {
        req.decoded = decoded;
      }
    });
  }

  next();
};

exports.checkToken = checkToken;
exports.checkTokenAdmin = checkTokenAdmin;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _post2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }

    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    _post2.default.create([post1, post2], function (error) {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
};

var _post = __webpack_require__(59);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(64);
var cssnext = __webpack_require__(170);
var postcssFocus = __webpack_require__(171);
var postcssReporter = __webpack_require__(172);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: __dirname,
    filename: 'app.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader", options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      'NODE_ENV': JSON.stringify('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);