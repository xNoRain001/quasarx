import each from '../each'
import { isArray, isString, isUndefined } from '../type'

const css = (el, propOrPairs, value) => {
  if (isUndefined(value)) {
    // 获取多个样式的值
    if (isArray(propOrPairs)) {
      const values = []

      each(propOrPairs, prop => {
        values.push(el.style[prop])
      })

      return values
    } 

    // 获取单个样式的值
    if (isString(propOrPairs)) {
      return el.style[propOrPairs]
    }
    
    // 设置多个样式的值
    each(propOrPairs, (value, prop) => {
      el.style[prop] = value
    })

    return
  }

  if (isString(propOrPairs)) {
    // 设置单个样式的值
    el.style[propOrPairs] = value
  } else {
    // 多个样式设置相同的值
    each(propOrPairs, prop => {
      el.style[prop] = value
    })
  }
}

export default css
