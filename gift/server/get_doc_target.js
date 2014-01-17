//
// This program adds a gem to the target user
//

var extractData           = require('./request').extractData;
var checkStringParameters = require('./request').checkStringParameters;
var getTargetData         = require('./request').getTargetData;   
var reply                 = require('./response').reply;
var updateDoc             = require('./db').updateDoc;

exports.handle = function(req, res) {
// Pass request through appropriate filters before performing end goal processing.
extractData(req, 256, function(data) {
    checkStringParameters(data, ['_id'], req, function() {
      getTargetData(data._id, res, function(userDoc) {
        processRequest(userDoc, res);
      });
    });
  });
};

function processRequest(userDoc, res) {
  ++userDoc.gems;
  updateDoc(userDoc, function(err, result) {
    if (err) {
      console.log(err.message);
      replyError(res);
    } else if (result.error) {
      if (result.error === 'conflict') {
        processConflict(userDoc, res);
      } else {
        console.log(result.err);
        replyError(res);
      }
    } else if (result.rev) {
      userDoc._rev = result.rev;
      reply(res, { doc: userDoc });
    } else {
      console.log('unexpected error');
      replyError(res);
    }
  });
  reply(res, { doc: userDoc });
}

