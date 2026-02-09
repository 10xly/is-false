const falseValue = require("false-value")()

module.exports = function isFalsePrimitive(x) {
  return require("@10xly/strict-equals")(x, falseValue)
}