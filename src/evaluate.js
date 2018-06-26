const {inspect} = require('util')

function evaluate (expr) {
  let v
  try {
    v = eval(expr)
    return [expr, typeof v, inspect(v), '']
  } catch (err) {
    return [expr, '', '', err.name]
  }
}

module.exports = {evaluate}
