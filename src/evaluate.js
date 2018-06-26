const {inspect} = require('util')
const {row} = require('./log')

function evaluate (expr) {
  let v
  try {
    v = eval(expr)
    row(expr, typeof v, inspect(v), '')
  } catch (err) {
    row(expr, '', '', err.name)
  }
}

module.exports = {evaluate}
