'use strict';

const Tree = require('../Tree/Tree');
const BinaryTreeNode = require('../Node/BinaryTreeNode');

class BinaryTree extends Tree {
  constructor() {
    super();
  }

  /**
   * A binary search tree is a binary tree in which every node fits a specific
   * ordering property (eg. all left descendants <= n < all right descendants).
   */
  isBinarySearchTree() {
    //
  }

  /**
   * 1. The left and right subtrees' heights differ by at most one, AND
   * 2. The left subtree is balanced, AND
   * 3. The right subtree is balanced
   */
  isBalancedBinaryTree() {
    //
  }

  /**
   * A complete binary tree is a binary tree in which every level of the tree
   * is fully filled, except for perhaps the last level. Should be filled left
   * to right.
   */
  isCompleteBinaryTree() {
    //
  }

  /**
   * A full binary tree is a binary tree in which every node has either zero or
   * two children. That is, no nodes have only one child.
   */
  isFullBinaryTree() {
    //
  }

  /**
   * A perfect binary tree is one that is both full and complete. All leaf nodes
   * will be at the same leve, and this level has the maximum number of nodes;
   */
  isPerfectBinaryTree() {
    //
  }

  /**
   * In-Order traversal visits the left branch, then the current node, then
   * right branch.
   */
  inOrderTraversal() {
    //
  }

  /**
   * Pre-Order traversal visits the current node before its child nodes.
   */
  preOrderTraversal() {
    //
  }

  /**
   * Post-order traversal visits the current node after its child nodes.
   */
  postOrderTraversal() {
    //
  }

  /**
   * Creates a binary tree from an array.
   * */
  binaryTree(arr, state, end) {
    //
  }

  /**
   * Creates a binary search tree with minimal height.
   * @param arr
   * @param start
   * @param end
   * @returns {*}
   */
  minimalTree(arr, start, end) {
    if (end < start) return null;
    const middle = Math.floor((start + end) / 2);
    const node = new BinaryTreeNode({key: arr[middle]});
    if (start === 0) this.setTreeRoot(node);
    node.left = this.minimalTree(arr, start, middle - 1);
    node.right = this.minimalTree(arr, middle + 1, end);
    this.addNode(node);
    return node;
  };
}

module.exports = BinaryTree;