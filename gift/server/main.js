var http             = require('http');
var domain           = require('domain');
var client           = require('./client');
var get_doc          = require('./get_doc');
var buy_gem          = require('./buy_gem');
var consume_gem      = require('./consume_gem');
var send_gift        = require('./send_gift');
var replyNotFound    = require('./response').replyNotFound;
var replyError       = require('./response').replyError;

function handleRequest(req, res) {
  console.log('Handling request for ' + req.url);
  if (req.url === '/') {
    client.handle(req, res);
  } else if (req.url === '/get-doc') {
    get_doc.handle(req, res);
  } else if (req.url === '/buy-gem') {
    buy_gem.handle(req, res);
  } else if (req.url === '/consume-gem') {
    consume_gem.handle(req, res);
  } else if (req.url === '/send-gift') {
    send_gift.handle(req, res);
  } else {
    replyNotFound(res);
  }
}

var server = http.createServer();

server.on('request', function(req, res) {
  var d = domain.create();
  d.on('error', function(err) {
    console.error(req.url, err.message);
    console.log(req);
    console.log(res);
    replyError(res);
  });
  d.run(function() { handleRequest(req, res); });
});

client.init(function() {
  server.listen(5000);
  console.log('Server started.');
});

