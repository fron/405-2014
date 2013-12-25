// program test_domain.js to artificially create an error to test main.js

var http = require('http');
var domain = require('domain');

function replyError(res) {
  try {
    res.writeHead(500);
    res.end('Server error.');
  } catch (err) {
    console.error('Error sending response with code 500.');
  }
};

function handleRequest(req, res) {
  console.log('Handling request for ' + req.url);
  if (req.url === '/') {
    res.end('hello');
  } else {
        throw new Error("I'm bad");
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

server.listen(5000);