// function scope.js

var assert = require('assert').ok;

var x = 1;
var y = 2;

assert(x === 1);
assert(y === 2);

function test() {
  x = 10;
  y = 20;
  var y;    // y is defined inside the scope of function 
}           // therefore its value inside the function 
            // is local. x on the other hand is global.
test();

assert(x === 10);
assert(y === 2);

console.log('All tests passed');