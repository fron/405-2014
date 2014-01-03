// module response, used by image.js and root.js

exports.generateETag = function(buffer) {
    var shasum = require('crypto').createHash('sha1');
    shasum.update(buffer, 'binary');
    return shasum.digest('hex');
}

exports.replyNotModified = function(res) {
    res.writeHead(304);
    res.end();
};