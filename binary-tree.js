/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  // used in the maxSum function
  // calculates the highest single-directional sum coming off of a child node
  // argument dir can be "left" or "right"
  leg(dir) {
    if (!(dir in this)) throw new Error("leg requires valid direction")
      
    if (this[dir]) {
      const leftSubLeg = this[dir].leg("left") + this[dir].val;
      const rightSubLeg = this[dir].leg("right") + this[dir].val;
      const maxSubLeg = Math.max(leftSubLeg, rightSubLeg, 0)
      
      return maxSubLeg;
    }
    return 0;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const queue = [{node: this.root, depth: 1}]
    if (queue[0].node === null) return 0
    
    while (queue.length > 0) {
      const {node, depth} = queue.shift();
      if (!node.left && !node.right) return depth;
      
      for (const d of ["left", "right"]) {
        if (node[d]) queue.push({node:node[d], depth:depth+1})
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const stack = [{node: this.root, depth: 1}]
    let maxSeen = 0;
    if (stack[0].node === null) return 0;
    
    while(stack.length > 0) {
      const {node, depth} = stack.pop();
      if (!node.left && !node.right && depth > maxSeen) maxSeen=depth;
      
      for (const d of ["left", "right"]) {
        if (node[d]) stack.push({node:node[d], depth:depth+1})
      }
    }
    return maxSeen;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const queue = [this.root];
    let maxSeen = 0;
    if (queue[0] === null) return 0;
    
    while(queue.length > 0) {
      const currNode = queue.shift();
      
      const currSeen = currNode.leg("left") + currNode.leg("right") + currNode.val;
      if (currSeen > maxSeen) maxSeen = currSeen;
      
      for (const d of ["left", "right"]) {
        if (currNode[d]) queue.push(currNode[d]);
      }
    }
    return maxSeen
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const queue = [this.root];
    let bestSeen = null;
    
    if (queue[0] === null) return null;
    
    while (queue.length > 0) {
      const currNode = queue.shift()
      
      if (currNode.val > lowerBound &&
        (bestSeen === null || currNode.val < bestSeen)) {
          bestSeen = currNode.val;
        }
      
      for (const d of ["left", "right"]) {
        if (currNode[d]) queue.push(currNode[d]);
      }
    }
    
    return bestSeen

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
