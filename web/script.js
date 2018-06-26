const {evaluateEscaped} = require('../src/evaluate')

const app = angular.module('jsWat', [])

app.controller('WatCtrl', [function() {

  this.data = require('../src/expressions.js').map(evaluateEscaped)

  this.handleAddExpression = function handleAddExpression (expr) {
    const record = evaluate(expr)
    console.log('handleAddExpression ', record)
    this.data.push(record)
  }

}])
