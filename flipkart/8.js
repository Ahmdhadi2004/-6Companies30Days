/* Closest Primes in Range */
var closestPrimesInRange = function(start, end) {
    var primes = [];
    for (var i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    var closest = [primes[0], primes[1]];
    for (var i = 0; i < primes.length - 1; i++) {
      if (primes[i + 1] - primes[i] < closest[1] - closest[0]) {
        closest = [primes[i], primes[i + 1]];
      }
    }
    return closest;
  };
  var isPrime = function(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };