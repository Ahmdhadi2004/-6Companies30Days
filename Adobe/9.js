/* Count  nodes equal to average of Subtree */
var countNodes = function(root) {
    var result = 0;
    helper(root, result);
    return result;
  };
  var helper = function(root, result) {
    if (root === null) {
      return 0;
    }
    var left = helper(root.left, result);
    var right = helper(root.right, result);
    var sum = left + right + root.val;
    var count = left + right + 1;
    if (sum * 1.0 / count === root.val) {
      result++;
    }
    return sum;
  };