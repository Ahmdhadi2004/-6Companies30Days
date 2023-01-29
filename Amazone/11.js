/* Number of ways to reach a position */
var numWays = function(steps, arrLen) {
    var dp = new Array(steps + 1).fill(0);
    dp[0] = 1;
    for (var i = 1; i <= steps; i++) {
      for (var j = 1; j <= Math.min(i, arrLen); j++) {
        dp[j] = (dp[j] + dp[j - 1]) % 1000000007;
      }
    }
    return dp[arrLen];
  };