// code assignment
// This program prints the first 100 prime numbers.


// I use 1 unit of identation (4 tab spaces) 

// Return true if n is prime.
function isPrime(n) {
  //for (var i = 2; i < n; ++i) { unnecesary n/2 iterations for each n 
    for (var i = 2; i <= n/2; ++i) {
        if (n % i == 0) return false;   // not a prime number
    }
    console.log(n);
    return true;
}

//var numberOfPrimesDeleted = 0;  primes are found and printed (not deleted)
var numberOfPrimesPrinted = 0;
var candidatePrime = 2;
//var k = 0; unnecesary variable

while (numberOfPrimesPrinted<100) {
	if (isPrime(candidatePrime)) {
		++numberOfPrimesPrinted;
	}
	// Increment candidatePrime.
	++candidatePrime;
}