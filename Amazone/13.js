/* Top K frequent words */
var topKFrequent = function(words, k) {
    var map = {};
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (!map[word]) {
        map[word] = 0;
      }
      map[word]++;
    }
    var arr = [];
    for (var word in map) {
      arr.push([word, map[word]]);
    }
    arr.sort(function(a, b) {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    });
    var result = [];
    for (var i = 0; i < k; i++) {
      result.push(arr[i][0]);
    }
    return result;
  };