//  a module scope that sits between function scope and global scope => main1.js and mod1.js

var assert = require('assert').ok;

var mod1 = require('./mod1');
assert(mod1.x === 3);
assert(mod1.y === undefined);

console.log('All tests passed');