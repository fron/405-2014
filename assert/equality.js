// program equality.

var assert = require('assert').ok;

// comparing 0 with false
assert(0 == false);
assert(0 !== false);

// comparing 1 with true
assert(1 == true);
assert(1 !== true);

// comparing 3 with true
assert(3 !== true);
assert(3 != true);

// comparing 0 with null
assert(0 !== null);
assert(0 !=  null);

// comparing 0 with undefined
assert(0 !== undefined);
assert(0 != undefined);

// comparing 0 with ""
assert(0 == "");
assert(0 !== "");

// comparing 0 with '0'
assert(0 == '0');
assert(0 !== '0');

// comparing 0 with 'false'
assert(0 !== 'false');
assert(0 != 'false');

// comparing 3 with '3'
assert(3 !== '3');
assert(3 == '3');

// comparing true with 'true'
assert(true !== 'true');
assert(true != 'true');

// comparing false with 'false'
assert(false !== 'false');
assert(false != 'false');

// comparing null with false
assert(null !== false);
assert(null != false);

// comparing null with undefined
assert(null !== undefined);
assert(null == undefined);

// comparing null with 0
assert(null !== 0);
assert(null != 0);

// comparing undefined with global.x1234
assert(undefined === global.x1234);
assert(undefined == global.x1234);

// comparing { x: 0 } with { x: 0 }
assert({ x: 0 } !== { x: 0 });
assert({ x: 0 } != { x: 0 });

// comparing 'a' with 'a'
assert('a' === 'a');
assert('a' == 'a');

// variables definition
var a = 0;
var b = 0;
var c = { x: 0 };
var d = { x: 0 };
var e = c;

// comparing a with b
assert(a === b);
assert(a == b);

// comparing c with d
assert(c !== d);
assert(c != d);

// comparing c with e
assert(c === e);
assert(c == e);

console.log('All test passed.');