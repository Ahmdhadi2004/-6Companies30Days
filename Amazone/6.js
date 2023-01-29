/* Maximum Subarray Min Product (Amazon Fresh and the team) */
var maxProduct = function(nums) {
    var result = -Infinity;
    var max = 1;
    var min = 1;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        var temp = max;
        max = min;
        min = temp;
      }
      max = Math.max(max * nums[i], nums[i]);
      min = Math.min(min * nums[i], nums[i]);
      result = Math.max(result, max);
    }
    return result;
  };