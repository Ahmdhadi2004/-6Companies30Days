/* Dota2 Senate */
var predictPartyVictory = function(senate) {
    var queue = [];
    var r = 0;
    var d = 0;
    for (var i = 0; i < senate.length; i++) {
      if (senate[i] === 'R') {
        r++;
      } else {
        d++;
      }
      queue.push(senate[i]);
    }
    while (r > 0 && d > 0) {
      var person = queue.shift();
      if (person === 'R') {
        if (d > 0) {
          d--;
        } else {
          r--;
          queue.push(person);
        }
      } else {
        if (r > 0) {
          r--;
        } else {
          d--;
          queue.push(person);
        }
      }
    }
    return r > 0 ? 'Radiant' : 'Dire';
  };