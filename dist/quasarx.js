(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.x = factory());
})(this, (function () { 'use strict';

  var wait = function wait(time) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, time);
    });
  };

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

  var last = function last(ary) {
    return ary[ary.length - 1];
  };

  var alias = function alias(x) {
    x.stringify = JSON.stringify;
    x.parse = JSON.parse;
    x.el = document.querySelector.bind(document);
    x.now = Date.now;
  };

  var methods = {
    wait: wait,
    last: last,
    keys: keys,
    each: each,
    isNull: isNull,
    isArray: isArray,
    getType: getType,
    isObject: isObject,
    isNumber: isNumber,
    isString: isString,
    isBigInt: isBigInt,
    isSymbol: isSymbol,
    isBoolean: isBoolean,
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