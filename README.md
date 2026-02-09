# is-false
Checks if a value is false.

## Installation
```bash
$ npm install @is-(unknown)/is-false
```

## Usage
```js
var isFalse = require('@is-(unknown)/is-false');

console.log(isFalse(false)) // true
console.log(isFalse(Object(false))) // false
console.log(isFalse('anything else')) // false
```