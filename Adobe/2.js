 /* Increasing Triplet Sequence */
  var increasingTriplet = function(nums) {
    var min = Number.MAX_VALUE;
    var secondMin = Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] <= min) {
        min = nums[i];
      } else if (nums[i] <= secondMin) {
        secondMin = nums[i];
      } else {
        return true;
      }
    }
    return false;
  };