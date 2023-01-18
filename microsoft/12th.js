/* Longest Happy Prefix */
var longestHappyPrefix = function(s) {
    var prefix = '';
    var suffix = '';
    for (var i = 0; i < s.length; i++) {
      prefix += s[i];
      suffix = s[s.length - 1 - i] + suffix;
      if (prefix === suffix) {
        return prefix;
      }
    }
    return '';
  };