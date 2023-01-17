/* People and Secret */
var peopleAndSecret = function(people, secret) {
    var map = {};
    for (var i = 0; i < people.length; i++) {
      if (map[people[i]] === undefined) {
        map[people[i]] = 1;
      } else {
        map[people[i]]++;
      }
    }
    var count = 0;
    for (var key in map) {
      if (key === secret) {
        count += map[key];
      }
    }
    return count;
  };