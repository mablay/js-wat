// main html script
// after modification run: npm build
// this will translate script.js into bundle.js which allows
// the broser to use methods like "util.inspect"
const {evaluateEscaped} = require('../src/evaluate')

angular.module('jsWat', []).controller('WatCtrl', [function() {

  this.data = require('../src/expressions.js').map(evaluateEscaped)

  this.handleAddExpression = function handleAddExpression (expr) {
    const record = evaluateEscaped(expr)
    console.log('handleAddExpression ', record)
    this.data.push(record)
  }

  this.handleModification = function handleModification (expr) {
    const record = evaluateEscaped(expr)
    this.live = record
  }

}])
