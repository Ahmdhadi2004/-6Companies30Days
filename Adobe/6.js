/* Knight in a Chessboard */
var knight = function(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
      var arr = [];
      for (var j = 0; j < n; j++) {
        arr.push(0);
      }
      result.push(arr);
    }
    var dx = [2, 2, -2, -2, 1, 1, -1, -1];
    var dy = [1, -1, 1, -1, 2, -2, 2, -2];
    var queue = [];
    queue.push({
      x: 0,
      y: 0
    });
    result[0][0] = 1;
    while (queue.length !== 0) {
      var curr = queue.shift();
      for (var i = 0; i < 8; i++) {
        var x = curr.x + dx[i];
        var y = curr.y + dy[i];
        if (x >= 0 && x < n && y >= 0 && y < n && result[x][y] === 0) {
          result[x][y] = result[curr.x][curr.y] + 1;
          queue.push({
            x: x,
            y: y
          });
        }
      }
    }
    return result[n - 1][n - 1];
  };