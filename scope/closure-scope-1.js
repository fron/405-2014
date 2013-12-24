// program closure-scope-1.js
// The code demonstrates that variable x is only visible to getX. 
// The variable x has closure scope

function getGetXFunction() {
  var x = 3;
  function getX() { return x; }
  return getX;
}

var assert = require('assert').ok;

assert(typeof(x) === 'undefined');

var getX = getGetXFunction();

assert(getX() === 3);

console.log('All tests passed');