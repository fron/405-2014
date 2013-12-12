// program parallel.

function callback1() {
  console.log('f1 activity starts.');
  var t = Math.random() * 5000; // random between 0 and 5000
  function activityFinished() {
     console.log('f1 activity ends.');
	 ok1 = true;
	 if(ok1 && ok2 && ok3){
	     console.log('Done');
	 }
	     
  }
  setTimeout(activityFinished, t);
}

function callback2() {
 console.log('f2 activity starts.');
 var t = Math.random() * 5000; // random between 0 and 5000
 function activityFinished() {
     console.log('f2 activity ends.');
	 ok2 = true;
	  if(ok1 && ok2 && ok3){
	     console.log('Done');
	 }
 }
 setTimeout(activityFinished, t);
}

function callback3() {
  console.log('f3 activity starts.');
  var t = Math.random() * 5000; // random between 0 and 5000
  function activityFinished() {
      console.log('f3 activity ends.');
	  ok3 = true;
	  if(ok1 && ok2 && ok3){
	     console.log('Done');
	 }
  }
  setTimeout(activityFinished, t);
}

var ok1 = false;
var ok2 = false;
var ok3 = false;

callback1();
callback2();
callback3();
 