// program root for buffers assignment

var http = require('http');

var body = new Buffer("I'm a codfish.", 14);

exports.handle = function(req, res) {
    res.writeHead(200, {
		
        'Content-Type': 'text/plain', 
		'Content-Length': 14
    }
	
	
	
	);
    res.end(body);
};