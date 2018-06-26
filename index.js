const {evaluate} = require('./src/evaluate')
const expressions = require('./src/expressions')
const data = expressions.map(evaluate)

const columns = ['expression', 'type', 'value', 'error']
console.table(data, columns)
