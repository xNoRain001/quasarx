import each from "../each"
import { isPlainObject } from "../type"

const addEventListener = (el, type, cb, options = {}) => {
  el.addEventListener(type, cb, options)

  return () => {
    el.removeEventListener(type, cb, options)
  }
}

export default addEventListener
