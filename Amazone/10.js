/* Number of Matching Subsequences (The stewart and the puppy) */
var numMatchingSubseq = function(S, words) {
    var map = {};
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (!map[word[0]]) {
        map[word[0]] = [];
      }
      map[word[0]].push(word);
    }
    var result = 0;
    for (var i = 0; i < S.length; i++) {
      var c = S[i];
      if (map[c]) {
        var temp = map[c];
        map[c] = [];
        for (var j = 0; j < temp.length; j++) {
          var word = temp[j];
          if (word.length === 1) {
            result++;
          } else {
            if (!map[word[1]]) {
              map[word[1]] = [];
            }
            map[word[1]].push(word.substring(1));
          }
        }
      }
    }
    return result;
  };