// program prototypes

var myObject = {};

//Fails in Opera or IE<=8
Object.getPrototypeOf(myObject); //[object Object]
 
//Fails in IE
myObject.__proto__; //[object Object]
 
//all browsers
//(but only if constructor.prototype has not been replaced and fails with Object.create)
myObject.constructor.prototype; //[object Object]

//(works in IE<=8 too, due to double-negative)
false.__proto__ === Boolean(false).__proto__; //true

//fails in IE<=8
myObject.__proto__ = Array.prototype;
myObject.length; //0
console.log('Length of myObject: ' + myObject.length);

//function will never be a constructor but it has a prototype property anyway
(new Function()).prototype; //[object Object]

//function intended to be a constructor has a prototype too
var A = function(name) {
    this.name = name;
}
A.prototype; //[object Object]

//Math is not a function so no prototype property
Math.prototype; //null

//Constructor. <em>this</em> is returned as new object and its internal [[prototype]] property will be set to the constructor's default prototype property
var Circle = function(radius) {
    this.radius = radius;
    //next line is implicit, added for illustration only
    //this.__proto__ = Circle.prototype;
}
 
//augment Circle's default prototype property thereby augmenting the prototype of each generated instance
Circle.prototype.area = function() {
   return Math.PI*this.radius*this.radius;
}
 
//create two instances of a circle and make each leverage the common prototype
var a = new Circle(3), b = new Circle(4);
a.area().toFixed(2); //28.27
b.area().toFixed(2); //50.27

// Instances will have access to the latest version if we modify the existing prototype's property
var A = function(name) {
    this.name = name;
}
 
var a = new A('alpha');
a.name; //'alpha'
 
A.prototype.x = 23;
 
a.x; //23

// But if We replace the prototype property with a new object, a.__proto__ still references the original object.

var A = function(name) {
    this.name = name;
}
 
var a = new A('alpha');
a.name; //'alpha'
 
A.prototype = {x:23};
 
a.x; //null.

// What does a default prototype look like?
// The expression a instanceof A will answer true if A’s prototype property occurs in a’s prototype chain. This means we can trick instanceof into failing

var A = function() {}
 
var a = new A();
a.__proto__ == A.prototype; //true - so instanceof A will return true
a instanceof A; //true;
 
//mess around with a's prototype
a.__proto__ = Function.prototype;
 
//a's prototype no longer in same prototype chain as A's prototype property
a instanceof A; //false

// Extending (not replacing!) the "prototype" property to update the prototype of every instance of //the given type.

String.prototype.times = function(count) {
    return count < 1 ? '' : new Array(count + 1).join(this);
}
 
"hello!".times(3); //"hello!hello!hello!";
"please...".times(6); //"please...please...please...please...please...please..."

// Since every object and every prototype (bar one) has a prototype, we can think of a succession of objects linked together to form a prototype chain. 
// The end of the chain is always the default object’s prototype.

a.__proto__ = b;
//b.__proto__ = c; THIS ONE FAILS: b is not defined (the next ones fails as well)
//c.__proto__ = {}; //default object
//{}.__proto__.__proto__; //null

console.log('All tests passed.');
 