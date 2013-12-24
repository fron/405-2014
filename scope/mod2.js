// program mod2.js  example of unexpected results
// variable x is modified in main2.js, that modification
// is not reflected on mod2.js

var x = 3;
exports.x = x;
exports.getX = function() {
  return x;
};