const {evaluate} = require('./src/evaluate')
const {row} = require('./src/log')

// print table of js expressions and their evaluation
row('EXPRESSION', 'TYPE', 'VALUE', 'ERROR')
;[
  'x',
  '1',
  '1 + 1',
  '{} + []',
  '[] + {}'
].forEach(evaluate)
