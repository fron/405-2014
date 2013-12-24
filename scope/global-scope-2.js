// in Node.js, top-level declarations do not create references in global scope. To place a reference into global scope, you need to explicitly make the reference a property of the global object.

var assert = require('assert').ok;

var x = 3;
console.log(global.x);  // undefined
global.x = x;
assert(x); // 3

console.log('All tests passed');