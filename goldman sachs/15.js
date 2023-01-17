/* Good People based on Statements */
var goodPeople = function(statements) {
    var map = {};
    for (var i = 0; i < statements.length; i++) {
      var strs = statements[i].split(' ');
      if (map[strs[0]] === undefined) {
        map[strs[0]] = {};
      }
      if (map[strs[0]][strs[1]] === undefined) {
        map[strs[0]][strs[1]] = 1;
      } else {
        map[strs[0]][strs[1]]++;
      }
    }
    var result = [];
    for (var key in map) {
      var count = 0;
      for (var key2 in map[key]) {
        count += map[key][key2];
      }
      if (count >= 3) {
        result.push(key);
      }
    }
    return result;
  };