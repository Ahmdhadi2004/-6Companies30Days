/* Top K frequent Words */
var topKFrequent = function(words, k) {
    var map = {};
    for (var i = 0; i < words.length; i++) {
      if (map[words[i]]) {
        map[words[i]]++;
      } else {
        map[words[i]] = 1;
      }
    }
    var arr = [];
    for (var key in map) {
      arr.push([key, map[key]]);
    }
    arr.sort(function(a, b) {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      } else {
        return b[1] - a[1];
      }
    });
    var result = [];
    for (var i = 0; i < k; i++) {
      result.push(arr[i][0]);
    }
    return result;
  };