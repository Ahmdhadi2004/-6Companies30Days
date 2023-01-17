/* All elements of a binary Search Tree */
var getAllElements = function(root1, root2) {
    var arr1 = [];
    var arr2 = [];
    inorder(root1, arr1);
    inorder(root2, arr2);
    var result = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  };
  var inorder = function(root, arr) {
    if (root === null) {
      return;
    }
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
  };