/* Substrings containing all three Characters */
var str = 'abcdefghijklmnopqrstuvwxyz';
var arr = [];
for (var i = 0; i < str.length; i++) {
  for (var j = i + 1; j < str.length; j++) {
    for (var k = j + 1; k < str.length; k++) {
      arr.push(str[i] + str[j] + str[k]);
    }
  }
}
console.log(arr);