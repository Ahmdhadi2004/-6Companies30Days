/* Split String into maximum number of Unique Substrings */
var maxUniqueSplit = function(s) {
    var set = new Set();
    var result = [];
    var dfs = function(s, index) {
      if (index === s.length) {
        result.push(set.size);
        return;
      }
      for (var i = index; i < s.length; i++) {
        var sub = s.substring(index, i + 1);
        if (!set.has(sub)) {
          set.add(sub);
          dfs(s, i + 1);
          set.delete(sub);
        }
      }
    };
    dfs(s, 0);
    return Math.max(...result);
  };