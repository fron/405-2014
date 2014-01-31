function f(cb) {
    console.log("f's activity starts.");
    var t = Math.random() * 5000; // random between 0 and 5000

    function activityFinished() {
        
console.log("f's activity ends.");
counter = counter -1;
        if (cb) cb();
    }
    setTimeout(activityFinished, t);
}  




function callback1()
{
 
  if(counter = -1)
  {
    counter = -99
    console.log('Done 1');
  }
}

function callback2()
{
 
 
  if(counter = -1)
  {
counter = -99    
console.log('Done 2');
  }
}

function callback3()
{
 

  if(counter = -1)
  {
counter = -99
    console.log('Done 3');
  }
}

var counter = 2

f(callback1);
f(callback2);
f(callback3);