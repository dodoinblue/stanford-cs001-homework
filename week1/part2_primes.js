#!/usr/bin/env node

// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

var sieve = new Array();
var maxcount = 100;
var range = 1000; // A guess of range that contains #maxcount number of primes
var count = 0;
var result ="";
var fs = require('fs');
var outfile = "primes.txt";

// Init sieve.
for (var i = 2; i <= range; i++)
{
    sieve[i] = 1;
}

// 1. 2 is the first prime.
// 2. when a prime is found, loop through all numbers in range, starting from prime^2, mark every number that is "prime" step away as non prime.
for (var prime = 2; prime <= range && count < maxcount; prime++)
{
    if (sieve[prime] == 1)
    {
        count++;
		if (count == 1)
		{
			result = result + prime;
		} else {
			result = result + "," + prime;
		}
        for (var i = prime * prime; i <= range; i += prime)
        {
            sieve[i] = 0;
        }
    }
}
console.log("number of primes: " + count);
console.log(result);
fs.writeFileSync(outfile, result);
