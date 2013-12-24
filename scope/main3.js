// program main3.js in conjuction with mod3.js modifies and 
// prints the value of x accordingly

var assert = require('assert').ok;

var mod3 = require('./mod3');
assert(mod3.x === 3); // true
mod3.x = 10;
assert(mod3.getX() === 10); // true

console.log('All tests passed');