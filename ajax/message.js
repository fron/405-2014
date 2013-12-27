// program root for ajax assignment

var http = require('http');

var body = new Buffer("Hello Ajax.", 11);

exports.handle = function(req, res) {
    res.writeHead(200, {
		
        'Content-Type': 'text/plain; whatever:whatever', 
		'Content-Length': 11
    }
	
	
	
	);
    res.end(body);
};