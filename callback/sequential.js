// program sequential.

function f(cb) {
    console.log("f's activity starts.");
    var t = Math.random() * 5000; // random between 0 and 5000

    function activityFinished() {
        console.log("f's activity ends.");
        if (cb) cb();
    }
    setTimeout(activityFinished, t);
}  




f(function() {
    f(function() {
        f(function() {
            console.log(' ');
            console.log('Done.');
        });
    });
});
