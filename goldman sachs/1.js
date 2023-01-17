/* Max Points on a Line */
var maxPoints = function(points) {
  if (points.length <= 2) {
    return points.length;
  }
  var max = 0;
  for (var i = 0; i < points.length; i++) {
    var map = {};
    var same = 0;
    var localMax = 0;
    for (var j = i + 1; j < points.length; j++) {
      var x = points[i][0] - points[j][0];
      var y = points[i][1] - points[j][1];
      if (x === 0 && y === 0) {
        same++;
        continue;
      }
      var gcd = getGCD(x, y);
      if (gcd !== 0) {
        x /= gcd;
        y /= gcd;
      }
      if (map[x] === undefined) {
        map[x] = {};
      }
      if (map[x][y] === undefined) {
        map[x][y] = 1;
      } else {
        map[x][y]++;
      }
      localMax = Math.max(localMax, map[x][y]);
    }
    max = Math.max(max, localMax + same + 1);
  }
  return max;
};
var getGCD = function(a, b) {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};