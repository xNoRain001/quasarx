## Introduction

JavaScript utils。

## Start

```
npm install quasarx
```

```js
x[method]()
```

## APIs

### getType

```js
/**
* type detection.
* 
* @param {*} v - value
* @returns {string} result(lowercase)
*/

x.getType({}) // output: 'object'
x.isString()
x.isNumber()
x.isBoolean()
x.isNull()
x.isUndefined()
x.isSymbol()
x.isBigInt()
x.isArray()
x.isArrayLike()
x.isPlainObject()
x.isObject()
```

### each

```js
/**
 * traverse object, array, array-like.
 * 
 * @param {(Array|Object)} target - target
 * @param {Function} cb - stop loop when cb returns false
 */

const o = { foo: 'foo', bar: 'bar', baz: 'baz' }

x.each(o, (value, key) => {
  // ...

  if (key === 'bar') {
    return false 
  }
})
```

### keys

```javascript
/**
 * get object's keys.
 * 
 * @param {Object} target - target
 * @returns {Array} - an array of key
 */

const o = {
  foo: 'foo',
  bar: 'bar'
}

x.keys(o) // output: ['foo', 'bar']
```

### last

```javascript
/**
 * get last item of array
 * 
 * @param {Array} ary - array
 * @returns {*} - last item
 */

const ary = [1, 2, 3]

x.last(ary) // output: 3
```

### wait

```javascript
/**
 * wait function
 * 
 * @param {number} time - wait time
 */

async function foo () {
  await x.wait(1000)
  // after 1s
  console.log('foo')
}

foo()
```
