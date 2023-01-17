/* Maximum Points in Archery Competition */
var maxPoints = function(points) {
    var map = {};
    for (var i = 0; i < points.length; i++) {
      if (map[points[i]] === undefined) {
        map[points[i]] = 1;
      } else {
        map[points[i]]++;
      }
    }
    var count = 0;
    for (var key in map) {
      count = Math.max(count, map[key]);
    }
    return count;
  };