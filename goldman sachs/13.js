/* Rhombus Sums in a GRID */
var rhombusSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var result = [];
    for (var i = 0; i < m; i++) {
      var arr = [];
      for (var j = 0; j < n; j++) {
        arr.push(0);
      }
      result.push(arr);
    }
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        if (i === 0 && j === 0) {
          result[i][j] = grid[i][j];
        } else if (i === 0) {
          result[i][j] = result[i][j - 1] + grid[i][j];
        } else if (j === 0) {
          result[i][j] = result[i - 1][j] + grid[i][j];
        } else {
          result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]) + grid[i][j];
        }
      }
    }
    return result[m - 1][n - 1];
  };