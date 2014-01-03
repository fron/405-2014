// program root.js for cache assignment

var http = require('http');
var body;
var etag;
var response = require('./response');

exports.handle = function(req, res) {
    if (req.headers['if-none-match'] === etag) {
        console.log('returning 304');
        return response.replyNotModified(res);
    }
    res.writeHead(200, {
        'Content-Type':'text/html; charset=UTF-8', 
        'Content-Length': body.length,
        'ETag' : etag
    });
    res.end(body);
};

exports.init = function(cb) {
    require('fs').readFile('app.html', function(err, data) {
        if (err) throw err;
        body = data;
        etag = response.generateETag(body); 
        cb();
    });
}