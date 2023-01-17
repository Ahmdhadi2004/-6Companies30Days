/* Matching Subsequences */
var numMatchingSubseq = function(S, words) {
    var map = {};
    for (var i = 0; i < words.length; i++) {
      if (map[words[i][0]] === undefined) {
        map[words[i][0]] = [];
      }
      map[words[i][0]].push(words[i]);
    }
    var count = 0;
    for (var i = 0; i < S.length; i++) {
      if (map[S[i]] === undefined) {
        continue;
      }
      var arr = map[S[i]];
      map[S[i]] = [];
      for (var j = 0; j < arr.length; j++) {
        if (arr[j].length === 1) {
          count++;
        } else {
          if (map[arr[j][1]] === undefined) {
            map[arr[j][1]] = [];
          }
          map[arr[j][1]].push(arr[j].substring(1));
        }
      }
    }
    return count;
  };