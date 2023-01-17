/* Fraction to a recurring Decimal */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
      return '0';
    }
    var result = '';
    if ((numerator < 0) ^ (denominator < 0)) {
      result += '-';
    }
    var num = Math.abs(numerator);
    var den = Math.abs(denominator);
    result += Math.floor(num / den);
    num %= den;
    if (num === 0) {
      return result;
    }
    result += '.';
    var map = {};
    while (num !== 0) {
      map[num] = result.length;
      num *= 10;
      result += Math.floor(num / den);
      num %= den;
      var index = map[num];
      if (index !== undefined) {
        result = result.substring(0, index) + '(' + result.substring(index) + ')';
        break;
      }
    }
    return result;
  };