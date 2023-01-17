/* Shortest Unsorted Continuous Subarray */
var findUnsortedSubarray = function(nums) {
    var sorted = nums.slice().sort((a, b) => a - b);
    var start = 0;
    var end = nums.length - 1;
    while (start < nums.length && nums[start] === sorted[start]) {
      start++;
    }
    while (end > start && nums[end] === sorted[end]) {
      end--;
    }
    return end - start + 1;
  };