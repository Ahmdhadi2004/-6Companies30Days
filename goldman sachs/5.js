/* Split Array into Sequences */
var splitIntoFibonacci = function(S) {
    var arr = [];
    var result = [];
    helper(S, 0, arr, result);
    return result;
  };
  var helper = function(S, index, arr, result) {
    if (index === S.length && arr.length >= 3) {
      result.push(arr.slice());
      return;
    }
    var num = 0;
    for (var i = index; i < S.length; i++) {
      num = num * 10 + parseInt(S[i]);
      if (num > 2147483647) {
        return;
      }
      if (arr.length >= 2) {
        if (num > arr[arr.length - 1] + arr[arr.length - 2]) {
          return;
        } else if (num < arr[arr.length - 1] + arr[arr.length - 2]) {
          continue;
        }
      }
      arr.push(num);
      helper(S, i + 1, arr, result);
      arr.pop();
      if (num === 0) {
        break;
      }
    }
  };