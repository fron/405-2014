// program message for ajax assignment
// it sends a message 

var http = require('http');
var body = new Buffer("Hello Ajax.", 11);

exports.handle = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8', 'Content-Length': 11});
  res.end(body);
};