/* Maximum Consecutive Floors Without Special Floors */
var maxConsecutiveFloorsWithoutSpecialFloors = function(floors) {
    var max = 0;
    var current = 0;
    for (var i = 0; i < floors.length; i++) {
      if (floors[i] === 0) {
        current++;
      } else {
        if (current > max) {
          max = current;
        }
        current = 0;
      }
    }
    return max;
  };