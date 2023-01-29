/* Swim in rising Water (Jeff and the rising hat) */
var swimInRisingWater = function(grid) {
    var N = grid.length;
    var visited = {};
    var queue = [];
    queue.push(0);
    visited[0] = true;
    var max = 0;
    while (queue.length > 0) {
      var node = queue.shift();
      var row = Math.floor(node / N);
      var column = node % N;
      if (grid[row][column] > max) {
        max = grid[row][column];
      }
      if (row === N - 1 && column === N - 1) {
        return max;
      }
      var neighbors = [[row - 1, column], [row + 1, column], [row, column - 1], [row, column + 1]];
      for (var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];
        var neighborRow = neighbor[0];
        var neighborColumn = neighbor[1];
        if (neighborRow >= 0 && neighborRow < N && neighborColumn >= 0 && neighborColumn < N) {
          var neighborNode = neighborRow * N + neighborColumn;
          if (!visited[neighborNode] && grid[neighborRow][neighborColumn] <= max) {
            visited[neighborNode] = true;
            queue.push(neighborNode);
          }
        }
      }
    }
  };