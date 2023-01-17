/* Game of Dungeon */
var calculateMinimumHP = function(dungeon) {
    var m = dungeon.length;
    var n = dungeon[0].length;
    var dp = [];
    for (var i = 0; i < m; i++) {
      dp[i] = [];
    }
    dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
    for (var i = m - 2; i >= 0; i--) {
      dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
    }
    for (var j = n - 2; j >= 0; j--) {
      dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
    }
    for (var i = m - 2; i >= 0; i--) {
      for (var j = n - 2; j >= 0; j--) {
        dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
      }
    }
    return dp[0][0];
  };
