const {evaluate} = require('./evaluate')

module.exports = [
  'x',
  '1',
  '1 + 1',
  '{} + []',
  '[] + {}'
].map(evaluate)
