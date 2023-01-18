/* Number of Pairs satisfying Inequality */
var numPairs = 0;
for (var i = 0; i < 100; i++) {
  for (var j = 0; j < 100; j++) {
    if (i + j == 50) {
      numPairs++;
    }
  }
}
console.log(numPairs);