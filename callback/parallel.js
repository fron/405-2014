// program parallel.

function f(cb) {
    console.log("f's activity starts.");
    var t = Math.random() * 5000; // random between 0 and 5000

    function activityFinished() {
        console.log("f's activity ends.");
        if (cb) cb();
    }
    setTimeout(activityFinished, t);
}  



function callback1() {
	 ok1 = true;
	 if(ok1 && ok2 && ok3){
	     console.log('Done');
	 }
}

function callback2() {
	 ok2 = true;
	  if(ok1 && ok2 && ok3){
	     console.log('Done');
	 }
}

function callback3() {
	  ok3 = true;
	  if(ok1 && ok2 && ok3){
	     console.log('Done');
	 }
}

var ok1 = false;
var ok2 = false;
var ok3 = false;

f(callback1);
f(callback2);
f(callback3);