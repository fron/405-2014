// program closure-scope-2
// more common way of closure-scoping

var getX = (function() {
  var x = 3;
  return function() { return x; }
})();

var assert = require('assert').ok;

assert(typeof(x) === 'undefined');

assert(getX() === 3);

console.log('All tests passed');