/* Combination Sum with a twist. */
/* Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T. */
/* The same repeated number may be chosen from C unlimited number of times. */
/* Note: */
/* All numbers (including target) will be positive integers. */
/* Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak). */
/* The solution set must not contain duplicate combinations. */
/* For example, given candidate set 2,3,6,7 and target 7, */
/* A solution set is: */
/* [7] */
/* [2, 2, 3] */
function combinationSum(candidates, target) {
    var result = [];
    var current = [];
    candidates.sort(function(a, b) {
      return a - b;
    });
    combinationSumHelper(candidates, target, 0, current, result);
    return result;
  }
  function combinationSumHelper(candidates, target, index, current, result) {
    if (target === 0) {
      result.push(current.slice());
      return;
    }
    for (var i = index; i < candidates.length; i++) {
      if (candidates[i] > target) {
        return;
      }
      current.push(candidates[i]);
      combinationSumHelper(candidates, target - candidates[i], i, current, result);
      current.pop();
    }
  }