/* Matrix Block Sum */
var matrixBlockSum = function(matrix, K) {
    var sums = [];
    for (var i = 0; i < matrix.length; i++) {
      sums[i] = [];
      for (var j = 0; j < matrix[0].length; j++) {
        sums[i][j] = 0;
        for (var row = Math.max(0, i - K); row <= Math.min(matrix.length - 1, i + K); row++) {
          for (var column = Math.max(0, j - K); column <= Math.min(matrix[0].length - 1, j + K); column++) {
            sums[i][j] += matrix[row][column];
          }
        }
      }
    }
    return sums;
  };