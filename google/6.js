/* Distinct Echo Substrings */
var distinctEchoSubstrings = function(text) {
    var distinct = {};
    for (var i = 0; i < text.length; i++) {
      for (var j = i + 1; j < text.length; j++) {
        var substring = text.substring(i, j);
        var echo = substring + substring;
        if (text.indexOf(echo) !== -1) {
          distinct[echo] = true;
        }
      }
    }
    return Object.keys(distinct).length;
  };