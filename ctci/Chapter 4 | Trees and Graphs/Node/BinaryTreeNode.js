'use strict';

const TreeNode = require('./TreeNode');

class BinaryTreeNode extends TreeNode {
  constructor(...args) {
    super(...args);
    this.setLeftChild(args['left']);
    this.setRightChild(args['right']);
  }

  setLeftChild(child = null) {
    this.left = child;
  }

  setRightChild(child = null) {
    this.right = child;
  }
}

module.exports = BinaryTreeNode;