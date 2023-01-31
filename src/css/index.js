import each from '../each'
import { isString } from '../type'

const css = (el, attrOrPairs, value) => {
  if (isString(attrOrPairs)) {
    el.style[attrOrPairs] = value
  } else {
    each(attrOrPairs, (value, attr) => {
      el.style[attr] = value
    })
  }
}

export default css
