import css from '../css'
import wait from "../wait"
import each from "../each"
import last from "../last"
import keys from "../keys"
import alias from "../alias"
import { 
  isNull,
  getType,
  isArray,
  isObject,
  isNumber,
  isString,
  isBigInt,
  isSymbol,
  isBoolean,
  isFunction,
  isUndefined,
  isArrayLike,
  isPlainObject
} from "../type"

const methods = {
  css,
  wait,
  last,
  keys,
  each,
  isNull,
  isArray,
  getType,
  isObject,
  isNumber,
  isString,
  isBigInt,
  isSymbol,
  isBoolean,
  isFunction,
  isArrayLike,
  isUndefined,
  isPlainObject
}

const mount = x => {
  each(methods, (value, key) => {
    x[key] = value
  })

  alias(x)
}

export default mount
