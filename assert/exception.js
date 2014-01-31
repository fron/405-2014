// program exceptions.

var assert = require('assert');

function imgood() {
  if (0 != false) {  
    throw new Error('Something\'s wrong.');
  }
}

function imbad() {
  throw new Error('I\'m bad.');
}

imgood();
assert.throws(imbad);
console.log('function imbad has an exception.');
console.log('All tests passed.');
