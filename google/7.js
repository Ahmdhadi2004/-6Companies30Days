/* K divisible Array Substrings */
var kDivisibleArraySubstrings = function(array, k) {
    var count = 0;
    var sum = 0;
    var sums = {};
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
      if (sum % k === 0) {
        count++;
      }
      var remainder = sum % k;
      if (sums[remainder] !== undefined) {
        count += sums[remainder];
      }
      if (sums[remainder] === undefined) {
        sums[remainder] = 1;
      } else {
        sums[remainder]++;
      }
    }
    return count;
  };