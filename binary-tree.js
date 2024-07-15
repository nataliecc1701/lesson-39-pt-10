/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const queue = [{node: this.root, depth: 0}]
    if (queue[0].node === null) return 0
    
    while (queue.length > 0) {
      const {node, depth} = queue.shift();
      if (!node.left && !node.right) return depth;
      
      for (d of [left, right]) {
        if (node[d]) queue.push({node:node[d], depth:depth+1})
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const stack = [{node: this.root, depth: 0}]
    let maxSeen = 0;
    if (stack[0].node === null) return 0;
    
    while(queue.length > 0) {
      const {node, depth} = stack.pop();
      if (!node.left && !node.right && depth > maxSeen) maxSeen=depth;
      
      for (d of [left, right]) {
        if (node[d]) stack.push({node:node[d], depth:depth+1})
      }
    }
    return maxSeen;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
