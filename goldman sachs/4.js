/* Number of Boomerangs */
var numberOfBoomerangs = function(points) {
    var count = 0;
    for (var i = 0; i < points.length; i++) {
      var map = {};
      for (var j = 0; j < points.length; j++) {
        if (i === j) {
          continue;
        }
        var d = getDistance(points[i], points[j]);
        if (map[d] === undefined) {
          map[d] = 1;
        } else {
          map[d]++;
        }
      }
      for (var key in map) {
        count += map[key] * (map[key] - 1);
      }
    }
    return count;
  };
  var getDistance = function(p1, p2) {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
  };