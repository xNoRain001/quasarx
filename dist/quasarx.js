(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.x = factory());
})(this, (function () { 'use strict';

  var keys = function keys(target) {
    var stringKeys = Object.keys(target);
    var symbolKeys = Object.getOwnPropertySymbols(target);
    return stringKeys.concat(symbolKeys);
  };

  var isNull = function isNull(v) {
    return v === null;
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var getType = function getType(v) {
    if (v == null) {
      return "".concat(v);
    }
    var type = _typeof(v);
    return !/^(object|function)$/.test(type) ? type : Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
  };

  var isArray = function isArray(v) {
    return Array.isArray(v);
  };

  var isObject = function isObject(v) {
    return v !== null && _typeof(v) === 'object';
  };

  var isBigInt = function isBigInt(v) {
    return typeof v === 'bigint';
  };

  var isSymbol = function isSymbol(v) {
    return _typeof(v) === 'symbol';
  };

  var isNumber = function isNumber(v) {
    return typeof v === 'number';
  };

  var isString = function isString(v) {
    return typeof v === 'string';
  };

  var isBoolean = function isBoolean(v) {
    return v === true || v === false;
  };

  var isFunction = function isFunction(v) {
    return typeof v === 'function';
  };

  var isUndefined = function isUndefined(v) {
    return v === undefined;
  };

  var isArrayLike = function isArrayLike(v) {
    return v != null && isLength(v.length) && !/^function$/.test(_typeof(v));
  };
  var isLength = function isLength(n) {
    return typeof n === 'number' && n > -1 && n % 1 === 0 && n <= Number.MAX_SAFE_INTEGER;
  };

  var isPlainObject = function isPlainObject(v) {
    return Object.prototype.toString.call(v).slice(8, -1) === 'Object';
  };

  var each = function each(target, cb) {
    if (isArray(target) || isArrayLike(target)) {
      for (var i = 0, l = target.length; i < l; i++) {
        if (cb.call(target, target[i], i) === false) {
          break;
        }
      }
    } else if (isObject(target)) {
      var _keys = keys(target);
      for (var _i = 0, _l = _keys.length; _i < _l; _i++) {
        var key = _keys[_i];
        if (cb.call(target, target[key], key) === false) {
          break;
        }
      }
    }
    return target;
  };

  var css = function css(el, propOrPairs, value) {
    if (isUndefined(value)) {
      // 获取多个样式的值
      if (isArray(propOrPairs)) {
        var values = [];
        each(propOrPairs, function (prop) {
          values.push(el.style[prop]);
        });
        return values;
      }

      // 获取单个样式的值
      if (isString(propOrPairs)) {
        return el.style[propOrPairs];
      }

      // 设置多个样式的值
      each(propOrPairs, function (value, prop) {
        el.style[prop] = value;
      });
      return;
    }
    if (isString(propOrPairs)) {
      // 设置单个样式的值
      el.style[propOrPairs] = value;
    } else {
      // 多个样式设置相同的值
      each(propOrPairs, function (prop) {
        el.style[prop] = value;
      });
    }
  };

  var wait = function wait(time) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, time);
    });
  };

  var last = function last(ary) {
    return ary[ary.length - 1];
  };

  var attr = function attr(el, attrOrPairs, value) {
    if (isUndefined(value)) {
      // 获取多个属性的值
      if (isArray(attrOrPairs)) {
        var values = [];
        each(attrOrPairs, function (attr) {
          values.push(el.getAttribute(attr));
        });
        return values;
      }

      // 获取单个属性的值
      if (isString(attrOrPairs)) {
        return el.getAttribute(attrOrPairs);
      }

      // 设置多个属性的值
      each(attrOrPairs, function (value, attr) {
        console.log(attr, value);
        el.setAttribute(attr, value);
      });
      return;
    }
    if (isString(attrOrPairs)) {
      // 设置单个属性的值
      el.setAttribute(attrOrPairs, value);
    } else {
      // 多个属性设置相同的值
      each(attrOrPairs, function (attr) {
        el.setAttribute(attr, value);
      });
    }
  };

  var alias = function alias(x) {
    x.stringify = x.json = JSON.stringify;
    x.parse = JSON.parse;
    x.el = document.querySelector.bind(document);
    x.createEl = document.createElement.bind(document);
    x.now = Date.now;
    x.type = x.getType;
    x["delete"] = x._delete;
  };

  var _delete = function _delete(target, keys) {
    if (isString(keys)) {
      delete target[keys];
    } else {
      each(keys, function (key) {
        return delete target[key];
      });
    }
  };

  var urlParams = function urlParams(url) {
    var params = {};
    url.replace(/([^?=&#]+)=([^?=&#]+)/g, function () {
      for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
        _ref[_key] = arguments[_key];
      }
      var $1 = _ref[1],
        $2 = _ref[2];
      params[$1] = $2;
    });
    url.replace(/#([^?=&#]+)/g, function () {
      for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        _ref2[_key2] = arguments[_key2];
      }
      var $1 = _ref2[1];
      params.hash = $1;
    });
    return params;
  };

  var methods = {
    css: css,
    wait: wait,
    last: last,
    keys: keys,
    attr: attr,
    each: each,
    isNull: isNull,
    isArray: isArray,
    _delete: _delete,
    getType: getType,
    isObject: isObject,
    isNumber: isNumber,
    isString: isString,
    isBigInt: isBigInt,
    isSymbol: isSymbol,
    isBoolean: isBoolean,
    urlParams: urlParams,
    isFunction: isFunction,
    isArrayLike: isArrayLike,
    isUndefined: isUndefined,
    isPlainObject: isPlainObject
  };
  var mount = function mount(x) {
    each(methods, function (value, key) {
      x[key] = value;
    });
    alias(x);
  };

  var x = Object.create(null);
  mount(x);

  return x;

}));
