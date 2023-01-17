/* Factorial with Trailing Zeroes */
var trailingZeroes = function(n) {
    var count = 0;
    while (n > 0) {
      count += Math.floor(n / 5);
      n = Math.floor(n / 5);
    }
    return count;
  };