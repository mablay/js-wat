const {inspect} = require('util')

function evaluateEscaped (expr) {
  const res = evaluate(expr)
  res.value = inspect(res.value)
  return res
}

function evaluate (expr) {
  let v
  try {
    v = eval(expr)
    return {expression: expr, type: typeof v, value: v}
  } catch (err) {
    return {expression: expr, error: err.name}
  }
}

module.exports = {evaluate, evaluateEscaped}
