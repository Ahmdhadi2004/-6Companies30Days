/* Non Negative Integers without consecutive ones */
var findIntegers = function(num) {
    var arr = [];
    for (var i = 0; i < 32; i++) {
      arr.push(0);
    }
    arr[0] = 1;
    arr[1] = 2;
    for (var i = 2; i < 32; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    var result = 0;
    var prevBit = 0;
    for (var i = 31; i >= 0; i--) {
      if ((num & (1 << i)) !== 0) {
        result += arr[i];
        if (prevBit === 1) {
          result--;
          break;
        }
        prevBit = 1;
      } else {
        prevBit = 0;
      }
    }
    return result + 1;
  };