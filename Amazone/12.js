/* Maximum Length of Repeated Subarray */
var findLength = function(A, B) {
    var dp = new Array(A.length + 1);
    for (var i = 0; i < dp.length; i++) {
      dp[i] = new Array(B.length + 1).fill(0);
    }
    var result = 0;
    for (var i = 1; i <= A.length; i++) {
      for (var j = 1; j <= B.length; j++) {
        if (A[i - 1] === B[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          result = Math.max(result, dp[i][j]);
        }
      }
    }
    return result;
  };