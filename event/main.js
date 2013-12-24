// program main.js events assignment

var http = require('http');
var domain = require('domain');

function replyError(res) {
  try {
    res.writeHead(200);
    res.end('An error has occurred, please try again later.');
  } catch (err) {
    console.error('Error sending response with code 200.');
  }
};

function handleRequest(req, res) {
  console.log('Handling request for ' + req.url);
  if ( Math.random() > .25) throw new Error("An error has occurred, please try again later");
  res.end('hello');
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