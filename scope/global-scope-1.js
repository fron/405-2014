// a reference to global namespace object is global in Node.js

var assert = require('assert').ok;

global.x = 3;
assert(x); // 3

console.log('All tests passed');