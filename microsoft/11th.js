/* Number of ways to arrive at a Destination */
var uniquePaths = function(m, n) {
    var dp = [];
    for (var i = 0; i < m; i++) {
        dp[i] = [];
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};
