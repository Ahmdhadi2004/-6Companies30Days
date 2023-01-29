/* Maximum sum of hourglass */
var hourglassSum = function(arr) {
    var result = -Infinity;
    for (var i = 0; i < arr.length - 2; i++) {
      for (var j = 0; j < arr[0].length - 2; j++) {
        var sum =
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2];
        result = Math.max(result, sum);
      }
    }
    return result;
  };