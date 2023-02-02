import each from '../each'
import { isArray, isString, isUndefined } from '../type'

const attr = (el, attrOrPairs, value) => {
  if (isUndefined(value)) {
    // 获取多个属性的值
    if (isArray(attrOrPairs)) {
      const values = []

      each(attrOrPairs, attr => {
        values.push(el.getAttribute(attr))
      })

      return values
    } 

    // 获取单个属性的值
    if (isString(attrOrPairs)) {
      return el.getAttribute(attrOrPairs)
    }
    
    // 设置多个属性的值
    each(attrOrPairs, (value, attr) => {
      console.log(attr, value)
      el.setAttribute(attr, value)
    })

    return
  }

  if (isString(attrOrPairs)) {
    // 设置单个属性的值
    el.setAttribute(attrOrPairs, value)
  } else {
    // 多个属性设置相同的值
    each(attrOrPairs, attr => {
      el.setAttribute(attr, value)
    })
  }
}

export default attr
