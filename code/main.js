// Code assignment, this program prints the first 100 prime numbers.

var numberOfPrimesPrinted = 0;
var candidatePrime = 2;

// Return true if n is prime.
function isPrime(n){
    for (var i=2;i<=n/2;++i){
        if (n%i==0) 
            return false;   
    }
    return true;
}

function printPrime(n){
    console.log(n);
}

while (numberOfPrimesPrinted<100){
    if (isPrime(candidatePrime)){
        printPrime(candidatePrime); 
        ++numberOfPrimesPrinted;
    }
    ++candidatePrime;
}