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

var num = {semaphore:0};   // 0 = initial; 1 = giver/giftee ok; 2 = giver and giftee ok
var ob  = num;
ob.semaphore = 0;
 
 
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
  f(processHandle(req, res)); 
};


//gift giver
function processHandle (req, res) {
  ob.semaphore = 0;
  // Pass request through appropriate filters before performing end goal processing.
  extractData(req, 256, function(data) {
   checkStringParameters(data, ['_id', '_rev', 'pw'], req, function() {
     checkPassword(data._id, data.pw, res, function(userDocG) {
       initialRev = data._rev;
         checkRevision(userDocG, data._rev, res, function() {
           ++ob.semaphore;
           if (userDocG.gems <= 0) {
             ob.semaphore = 0;
             return reply(res, { 'insufficientGems': true });
           }
           getTargetData(data._idt, res, function(userDocR) {
             checkStringParameters(data, ['_idt'], req, function() {
               ++ob.semaphore;
               if(num.semaphore == 2){
                 processRequestReceiver(userDocR, res);
                 processRequestGiver(userDocG, res);
               } 
             });
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
  });
}


function processConflict(oldDoc, res) {
  // Get a fresh version of the doc and return it to the client.
  checkPassword(oldDoc._id, oldDoc.pw, res, function(newDoc) {
  reply(res, { old: true, doc: newDoc });
  });
}



