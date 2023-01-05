/* Profitable Path in a Tree. */
/*
  Given a tree, find the path from the root to a leaf such that the sum of the nodes on the path is maximal.
  Return the sum of the nodes on the path.
  Example:
  Input:
    1
   / \
  2   3
  Output: 6
  Explanation: The path from the root to the leaf with the maximum sum is [1, 2, 3]
*/
/*
  Solution:
  We can use a recursive function to traverse the tree.
  At each node, we can calculate the maximum sum of the path that ends at that node.
  The maximum sum of the path that ends at the current node is the maximum of:
  1. The maximum sum of the path that ends at the current node's left child, plus the value of the current node.
  2. The maximum sum of the path that ends at the current node's right child, plus the value of the current node.
  3. The value of the current node.
  We can use a global variable to keep track of the maximum sum of the path that ends at any node in the tree.
  We can update this variable at each node.
  Time complexity: O(n)
  Space complexity: O(n)
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  function maxPathSum(root) {
    let maxSum = -Infinity;
    function maxPathSumHelper(node) {
      if (!node) {
        return 0;
      }
      const leftSum = maxPathSumHelper(node.left);
      const rightSum = maxPathSumHelper(node.right);
      const maxSumAtNode = Math.max(node.val, node.val + leftSum, node.val + rightSum);
      maxSum = Math.max(maxSum, maxSumAtNode, node.val + leftSum + rightSum);
      return maxSumAtNode;
    }
    maxPathSumHelper(root);
    return maxSum;
  }
  /*
    Command: Add a tree to the page.
  */
  function addTree(root) {
    const tree = document.createElement('div');
    tree.className = 'tree';
    function addTreeHelper(node, parent) {
      if (!node) {
        return;
      }
      const nodeElement = document.createElement('div');
      nodeElement.className = 'node';
      nodeElement.innerHTML = node.val;
      parent.appendChild(nodeElement);
      if (node.left || node.right) {
        const childrenElement = document.createElement('div');
        childrenElement.className = 'children';
        nodeElement.appendChild(childrenElement);
        addTreeHelper(node.left, childrenElement);
        addTreeHelper(node.right, childrenElement);
      }
    }
    addTreeHelper(root, tree);
    document.body.appendChild(tree);
  }
  /*
    Command: Add a tree and its maximum path sum to the page.
  */
  function addTreeWithMaxPathSum(root) {
    addTree(root);
    const maxPathSumElement = document.createElement('div');
    maxPathSumElement.className = 'max-path-sum';
    maxPathSumElement.innerHTML = maxPathSum(root);
    document.body.appendChild(maxPathSumElement);
  }
  /*
    Command: Add a tree with a maximum path sum of 6 to the page.
  */
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  addTreeWithMaxPathSum(root);
  /*
    Command: Add a tree with a maximum path sum of 42 to the page.
  */
  const root2 = new TreeNode(-10);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(20);
  root2.right.left = new TreeNode(15);
  root2.right.right = new TreeNode(7);
  addTreeWithMaxPathSum(root2);
  /*
    Command: Add a tree with a maximum path sum of 3 to the page.
  */
  const root3 = new TreeNode(2);
  root3.left = new Tree