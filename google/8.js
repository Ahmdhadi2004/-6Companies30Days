/* Random Pick with Weight (New Project at Google Play Services) */
var randomPickWithWeight = function(weights) {
    var total = 0;
    for (var i = 0; i < weights.length; i++) {
      total += weights[i];
    }
    var random = Math.floor(Math.random() * total);
    var sum = 0;
    for (var i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (sum > random) {
        return i;
      }
    }
    return weights.length - 1;
  };