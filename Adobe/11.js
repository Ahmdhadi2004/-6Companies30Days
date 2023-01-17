/* Stock Price Fluctuation */
var stockPrice = function(arr) {
    var min = arr[0];
    var result = 0;
    for (var i = 1; i < arr.length; i++) {
      result = Math.max(result, arr[i] - min);
      min = Math.min(min, arr[i]);
    }
    return result;
  };