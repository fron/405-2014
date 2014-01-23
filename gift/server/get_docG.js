var extractData           = require('./request').extractData;
var getTargetData         = require('./request').getTargetData;
var checkStringParameters = require('./request').checkStringParameters;
var checkPassword         = require('./request').checkPassword;
var reply                 = require('./response').reply;

exports.handle = function(req, res) {
  // Pass request through appropriate filters before performing end goal processing.
  extractData(req, 256, function(data) {
    getTargetData(data._idt, res, function(userDoc) {
     checkStringParameters(data, ['_idt'], req, function() {
      processRequest(userDoc, res);
     });
    });
  });
};
      


function processRequest(userDoc, res) {
  reply(res, { doc: userDoc });
}

