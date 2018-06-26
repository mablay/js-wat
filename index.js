const data = require('./src/main')
const {row} = require('./src/log')

// print table of js expressions and their evaluation
row(['EXPRESSION', 'TYPE', 'VALUE', 'ERROR'])
data.forEach(row)
