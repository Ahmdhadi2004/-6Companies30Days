/* Number of Closed Islands */
var numberOfClosedIslands = function(grid) {
    var closedIslands = 0;
    var visited = {};
    var isClosedIsland = function(row, column) {
      if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length) {
        return false;
      }
      if (grid[row][column] === 1) {
        return true;
      }
      if (visited[row + ',' + column]) {
        return true;
      }
      visited[row + ',' + column] = true;
      return isClosedIsland(row - 1, column) && isClosedIsland(row + 1, column) && isClosedIsland(row, column - 1) && isClosedIsland(row, column + 1);
    };
    for (var row = 0; row < grid.length; row++) {
      for (var column = 0; column < grid[0].length; column++) {
        if (grid[row][column] === 0 && !visited[row + ',' + column]) {
          if (isClosedIsland(row, column)) {
            closedIslands++;
          }
        }
      }
    }
    return closedIslands;
  };