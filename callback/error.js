// program error.

var assert = require('assert').ok;

function dividedby(x,y,cb) {
    // If y is zero, return an instance or Error in the first argument of cb.
    // Otherwise, divide x by y and return the result in the second argument of cb
    // and set the first argument to null to indicate no error.
	if (y == 0) {
	    cb(new Error('Division by zero is undefined.'));
		return;
	}
	else {
	    result = x/y; 
		err = null; 
		return;
    }
}

dividedby(6, 3, function(err, result) {
    assert(err == null);                    // Assert operation finished ok 
	assert(result == 2);                    // Assert result is correct
});

dividedby(6, 0, function(err, result) {
    assert(err !== null);                        // Assert that err is not null.
	assert(isNaN(result) !== false);             // Assert that result is undefined.
	assert(err == 'Error: Division by zero is undefined.');  // Assert that type of err.message is a string.
});

console.log('All tests passed');


