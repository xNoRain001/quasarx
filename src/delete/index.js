import each from "../each"
import { isString } from "../type"

const _delete = (target, keys) => {
  if (isString(keys)) {
    delete target[keys]
  } else {
    each(keys, key => delete target[key])
  }
}

export default _delete
