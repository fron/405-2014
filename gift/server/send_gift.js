// program message 
// updates gift receover and sender
// it sends a message 

var extractData           = require('./request').extractData;
var getTargetData         = require('./request').getTargetData;
var checkStringParameters = require('./request').checkStringParameters;
var reply                 = require('./response').reply;
var updateDoc             = require('./db').updateDoc;
var checkPassword         = require('./request').checkPassword;
var checkRevision         = require('./request').checkRevision;
var replyError            = require('./response').replyError;

exports.handle = function(req, res) {
  processHandle(req, res); 
};


//gift giver
function processHandle (req, res) {
  // Pass request through appropriate filters before performing end goal processing.
  extractData(req, 256, function(data) {
    checkStringParameters(data, ['_id', '_rev', 'pw', '_idt'], req, function() {
      checkPassword(data._id, data.pw, res, function(userDocG) {
        checkRevision(userDocG, data._rev, res, function() {
          if (userDocG.gems <= 0) {
            return reply(res, { 'insufficientGems': true });
          }
          if (data._id === data._idt) {
            return reply(res, { 'selfGift': true });
          }
          getTargetData(data._idt, res, function(userDocR) {
            processRequestReceiver(userDocR, res); { 
              processRequestGiver(userDocG, res);
            }
          });
        });
      });
    });
  });
};

function processRequestGiver(userDocG, res) {
  --userDocG.gems;
  updateDoc(userDocG, function(err, result) {
    if (err) {
      console.log(err.message);
      replyError(res);
    } else if (result.error) {
      if (result.error === 'conflict') {
        console.log("conflict on giver");  
        processConflict(userDoc, res);
      } else {
        console.log(result.err);
        replyError(res);
      }
    } else if (result.rev) {
      userDocG._rev = result.rev;
      reply(res, { doc: userDocG });
      console.log("Giver updated");
    } else {
      console.log('unexpected error');
      replyError(res);
    }
  });
};


function processRequestReceiver(userDocR, res) {
// one more gem for giftee
  ++userDocR.gems;
  updateDoc(userDocR, function(err, result) {
    if (err) {
      console.log(err.message);
      replyError(res);
    } else if (result.error) {
      if (result.error === 'conflict') {
        console.log("conflict on receiver");  
        processConflict(userDoc, res);
      } else {
        console.log(result.err);
        replyError(res);
      }
    } else if (result.rev) {
      console.log("Receiver updated");
    } else {
      console.log('unexpected error');
      replyError(res);
    }
  });
}



function processConflict(oldDoc, res) {
  // Get a fresh version of the doc and return it to the client.
  checkPassword(oldDoc._id, oldDoc.pw, res, function(newDoc) {
  reply(res, { old: true, doc: newDoc });
  });
}



