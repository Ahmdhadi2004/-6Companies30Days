/* Nice Pairs in Array (OTT Platforms and John) */
var nicePairs = function(nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
      if (map[nums[i]] === undefined) {
        map[nums[i]] = 1;
      } else {
        map[nums[i]]++;
      }
    }
    var count = 0;
    for (var key in map) {
      count += map[key] * (map[key] - 1) / 2;
    }
    return count;
  };