// program mod3.js taking out definition of var x 

exports.x = 3;
exports.getX = function() {
  return exports.x;
};