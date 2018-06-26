const {evaluate} = require('./evaluate')
const expressions = require('./expressions')
module.exports = expressions.map(evaluate)
