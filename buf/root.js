// program root for buffers assignment

var http = require('http');
var body = new Buffer("XXXXXXXXXXXI'm a codfish.話", 'utf-8');

exports.handle = function(req, res) {
//console.log(req);
//console.log(res);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8', 'Content-Length': body.length});
    res.end(body);
console.log(req);
//console.log(res);
};