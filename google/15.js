/* Max Compatibility Score */
var maxCompatibilityScore = function(numbers) {
    var max = 0;
    var count = 0;
    var counts = {};
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      var score = 0;
      for (var j = 0; j < number.length; j++) {
        var digit = number.charAt(j);
        if (digit === '1') {
          score++;
        }
      }
      if (score > max) {
        max = score;
        count = 1;
      } else if (score === max) {
        count++;
      }
      if (counts[score] === undefined) {
        counts[score] = 1;
      } else {
        counts[score]++;
      }
    }
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      var score = 0;
      for (var j = 0; j < number.length; j++) {
        var digit = number.charAt(j);
        if (digit === '1') {
          score++;
        }
      }
      if (score === max) {
        total += counts[score - 1];
      }
    }
    return total;
  };