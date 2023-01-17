/* Valid Square */
var validSquare = function(p1, p2, p3, p4) {
    var d1 = getDistance(p1, p2);
    var d2 = getDistance(p1, p3);
    var d3 = getDistance(p1, p4);
    var d4 = getDistance(p2, p3);
    var d5 = getDistance(p2, p4);
    var d6 = getDistance(p3, p4);
    var arr = [d1, d2, d3, d4, d5, d6];
    arr.sort(function(a, b) {
      return a - b;
    });
    if (arr[0] === 0 || arr[0] !== arr[1] || arr[1] !== arr[2] || arr[2] !== arr[3] || arr[4] !== arr[5]) {
      return false;
    }
    return true;
  };
  var getDistance = function(p1, p2) {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
  };