/* Partition to K Equal Sum Subsets */
var nums = [4, 3, 2, 3, 5, 2, 1];
var k = 4;
var canPartitionKSubsets = function(nums, k) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % k !== 0) {
    return false;
  }
  var target = sum / k;
  var visited = new Array(nums.length);
  visited.fill(false);
  return canPartition(nums, visited, 0, k, 0, target);
};
var canPartition = function(nums, visited, startIndex, k, curSum, target) {
  if (k === 1) {
    return true;
  }
  if (curSum === target) {
    return canPartition(nums, visited, 0, k - 1, 0, target);
  }
  for (var i = startIndex; i < nums.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      if (canPartition(nums, visited, i + 1, k, curSum + nums[i], target)) {
        return true;
      }
      visited[i] = false;
    }
  }
  return false;
};
console.log(canPartitionKSubsets(nums, k));