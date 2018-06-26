const {inspect} = require('util')

// print table of js expressions and their evaluation
row('EXPRESSION', 'TYPE', 'VALUE', 'ERROR')
;[
  'x',
  '1',
  '1 + 1',
  '{} + []',
  '[] + {}'
].forEach(evaluate)

// helper functions --->

function evaluate (expr) {
  let v
  try {
    v = eval(expr)
    row(expr, typeof v, inspect(v), '')
  } catch (err) {
    row(expr, '', '', err.name)
  }
}

function row (...args) {
  const COL_SIZE = 24
  console.log(
    args.map(s => s
      .padStart(COL_SIZE)
      .substring(0, COL_SIZE))
      .join('')
  )
}
