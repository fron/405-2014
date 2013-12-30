var http = require('http');
var domain = require('domain');
var root = require('./root');
var image = require('./image');

function replyError(res) {
    try {
        res.writeHead(500);
        res.end('Server error.');
    } 
   
    catch (err) {
        console.error('Error sending response with code 500.');
    }
};


function replyNotFound(res) {
    res.writeHead(404);
    res.end('not found');
}

function handleRequest(req, res) {
    console.log('Handling request for ' + req.url);
    switch (true) {
        case (req.url === '/image.png'):
            image.handle(req, res);
		    break;
	    case (req.url === '/'):
	        root.handle(req, res);
		    break; 
        default:
            replyNotFound(res);
		    break
    }
}

var server = http.createServer();

server.on('request', function(req, res) {
    var d = domain.create(); 
	d.on('error', function(err) {
        console.error(req.url, err.message);
        replyError(res);
    });
    d.run(function() { handleRequest(req, res); });
});

var ok1 = false;
var ok2 = false;

function f(cb) {
    if(ok1 && ok2){
	    server.listen(5000);
    }
	cb();
}  

function callback2() {
    image.init(function(){
        ok2 = true;
		f(callback2);
    });
}


function callback1() {
    root.init(function(){
        ok1 = true;
		f(callback1);
    });
}

f(callback1);
f(callback2);

