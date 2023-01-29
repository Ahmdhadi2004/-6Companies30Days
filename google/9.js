/* Maximum Numbers of Coins you can get */
var maximumNumbersOfCoinsYouCanGet = function(piles) {
    piles.sort(function(a, b) {
      return b - a;
    });
    var max = 0;
    for (var i = 0; i < piles.length; i += 2) {
      max += piles[i];
    }
    return max;
  };