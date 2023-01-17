/* Genetic Mutation */
var minMutation = function(start, end, bank) {
    var map = {};
    for (var i = 0; i < bank.length; i++) {
      map[bank[i]] = true;
    }
    if (map[end] === undefined) {
      return -1;
    }
    var queue = [];
    queue.push(start);
    var level = 0;
    var visited = {};
    visited[start] = true;
    while (queue.length !== 0) {
      var size = queue.length;
      while (size > 0) {
        var curr = queue.shift();
        if (curr === end) {
          return level;
        }
        var arr = getNeighbors(curr);
        for (var i = 0; i < arr.length; i++) {
          if (map[arr[i]] !== undefined && visited[arr[i]] === undefined) {
            visited[arr[i]] = true;
            queue.push(arr[i]);
          }
        }
        size--;
      }
      level++;
    }
    return -1;
  };
  var getNeighbors = function(str) {
    var arr = [];
    var gene = ['A', 'C', 'G', 'T'];
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < gene.length; j++) {
        if (gene[j] !== str[i]) {
          arr.push(str.substring(0, i) + gene[j] + str.substring(i + 1));
        }
      }
    }
    return arr;
  };