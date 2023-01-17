/* Magical String */
var magicalString = function(n) {
    if (n === 0) {
      return 0;
    }
    if (n <= 3) {
      return 1;
    }
    var arr = [1, 2, 2];
    var index = 2;
    var num = 1;
    var count = 1;
    while (arr.length < n) {
      var size = arr[index];
      for (var i = 0; i < size; i++) {
        arr.push(num);
        if (num === 1 && arr.length <= n) {
          count++;
        }
      }
      num = num ^ 3;
      index++;
    }
    return count;
  };