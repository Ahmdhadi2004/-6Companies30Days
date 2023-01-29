/* Strictly Palindromic Number */
var strictlyPalindromicNumber = function(n) {
    var digits = [];
    while (n > 0) {
      digits.push(n % 10);
      n = Math.floor(n / 10);
    }
    var i = 0;
    var j = digits.length - 1;
    while (i < j) {
      if (digits[i] !== digits[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };