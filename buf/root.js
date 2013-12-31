// program root for buffers assignment

var http = require('http');
var body = new Buffer("I'm a codfish.話", 'utf-8');

exports.handle = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8', 'Content-Length': body.length});
    res.end(body);
};