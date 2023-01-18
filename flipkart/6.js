/* Number of ways to separate Numbers */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ways = 0;
for (var i = 0; i < nums.length; i++) {
  for (var j = i + 1; j < nums.length; j++) {
    ways++;
  }
}
console.log(ways);