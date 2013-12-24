// In Node.js, the process object has global scope.

console.log(process !== undefined); // true

//  The process object is useful for accessing environmental variables. 

console.log(process.env.LOGNAME);

