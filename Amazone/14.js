/* Last Moment before all ants Fall out */
var getLastMoment = function(n, left, right) {
    var result = 0;
    for (var i = 0; i < left.length; i++) {
      result = Math.max(result, left[i]);
    }
    for (var i = 0; i < right.length; i++) {
      result = Math.max(result, n - right[i]);
    }
    return result;
  };