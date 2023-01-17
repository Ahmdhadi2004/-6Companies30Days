/* Minimum Consecutive Cards to pick up */
var minCards = function(cards) {
    var map = {};
    for (var i = 0; i < cards.length; i++) {
      if (map[cards[i]] === undefined) {
        map[cards[i]] = 1;
      } else {
        map[cards[i]]++;
      }
    }
    var count = 0;
    for (var key in map) {
      count += Math.floor(map[key] / 4);
    }
    return count;
  };