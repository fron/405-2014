// program mod2.js  example of unexpected results
// variable x is modified in main2.js, that modification
// is not reflected on mod2.js

var assert = require('assert').ok;

var mod2 = require('./mod2');
assert(mod2.x === 3); // true
mod2.x = 10; // var x modified won't be reflected  
assert(mod2.getX() === 3); // true

console.log('All tests passed');