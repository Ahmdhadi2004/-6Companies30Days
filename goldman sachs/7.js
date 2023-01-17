/* Count Good Triplets in Array */
var countGoodTriplets = function(arr, a, b, c) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        for (var k = j + 1; k < arr.length; k++) {
          if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
            count++;
          }
        }
      }
    }
    return count;
  };