/* Max Area of Island */
var maxAreaOfIsland = function(grid) {
    var maxArea = 0;
    var area = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                area = dfs(grid, i, j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};
var dfs = function(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
        return 0;
    }
    grid[i][j] = 0;
    var area = 1;
    area += dfs(grid, i + 1, j);
    area += dfs(grid, i - 1, j);
    area += dfs(grid, i, j + 1);
    area += dfs(grid, i, j - 1);
    return area;
};