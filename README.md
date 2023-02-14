## Introduction

JavaScript utils.

## Start

```
npm install quasarx
```

```js
x[method]()
```

## APIs

### alias

- x.stringify or x.json -> JSON.stringify

- x.parse -> JSON.parse

- x.el -> document.querySelector.bind(document)

- x.createEl -> document.createElement.bind(document)

- x.now -> Date.now

- x.type -> x.getType
```

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

### urlParams

```js
/**
 * parse url
 * 
 * @param {string} url - url
 * @returns {Object} - result
 */

x.urlParams('http://example.com?foo=bar#baz') // output: { foo: bar, hash: baz }
```

### css

```js
/**
 * set or get style
 * 
 * @param {HTMLElement} el - element
 * @param {string|Object} propOrPairs - options
 * @param {string} [value=undefined] - style value
 */

const { body } = document

// set
x.css(body, 'width', '100vw')
x.css(body, {
  width: '100vw',
  height: '100vh'
})
x.css(body, ['color', 'backgroundColor'], 'red')

// get
x.css(body, 'width') // output: 100vw
x.css(body, ['width', 'height']) // output: ['100vw', '100vh']
```

### attr

like css
