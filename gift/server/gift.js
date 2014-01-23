// program message 
// updates gift receover and sender
// it sends a message 

var extractData           = require('./request').extractData;
var checkStringParameters = require('./request').checkStringParameters;
var reply                 = require('./response').reply;
var updateDoc             = require('./db').updateDoc;
var checkPassword         = require('./request').checkPassword;
var checkRevision         = require('./request').checkRevision;
var replyError            = require('./response').replyError;

var num = {semaphore:0};   // 0 = ok; 1 = conflict
var ob  = num;
 
function f(cb) {
  //console.log("f's activity starts.");
  var t = Math.random() * 500; // random between 0 and 5000
  function activityFinished() {
    console.log("Processing...");
    if (cb) cb();
  }
  setTimeout(activityFinished, t);
}  


exports.handle = function(req, res) {
  f(processHandleGiver(req, res)); {
    f(processHandleReceiver(req, res)); {
   }
  }
};


// gift receiver
function processHandleReceiver(req, res) {    
 
  extractData(req, 256, function(data) {
    checkStringParameters(data, ['_id', '_rev', 'pw'], req, function() {
      checkPassword(data._idt, data.pwt, res, function(userDoc) {
        checkRevision(userDoc, data._revt, res, function() {
          processRequestReceiver(userDoc, res);
        });
      });
    });
  });
};


function processRequestReceiver(userDoc, res) {
  
  if(num.semaphore !== 1) {  // no conflicts
  
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
        userDoc._revt = result.rev;
        reply(res, { doc: userDoc });
      } else {
      console.log('unexpected error');
      replyError(res);
    }
  });
  }
}


//gift giver
function processHandleGiver(req, res) {
  
  // Pass request through appropriate filters before performing end goal processing.
  extractData(req, 256, function(data) {
    checkStringParameters(data, ['_id', '_rev', 'pw'], req, function() {
      checkPassword(data._id, data.pw, res, function(userDoc) {
        initialRev = data._rev;
        ob.semaphore = 0;
        if(initialRev !== userDoc._rev){  // conflict
          ob.semaphore = 1;
        }
        checkRevision(userDoc, data._rev, res, function() {
          processRequestGiver(userDoc, initialRev, res);
        });
      });
    });
  });
};


function processRequestGiver(userDoc, initialRev, res) {
  if (userDoc.gems <= 0) {
    return reply(res, { 'insufficientGems': true });
  }
  
  if(num.semaphore !== 1){      
   
    --userDoc.gems;
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
        console.log("AFTER UPDATE GIVER " + result.rev);
        userDoc._rev = result.rev;
        reply(res, { doc: userDoc });
      } else {
        console.log('unexpected error');
        replyError(res);
      }
  });
  reply(res, { doc: userDoc });
  }  
};

function processConflict(oldDoc, res) {
  // Get a fresh version of the doc and return it to the client.
  checkPassword(oldDoc._id, oldDoc.pw, res, function(newDoc) {
    reply(res, { old: true, doc: newDoc });
  });
}



