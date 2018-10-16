'use strict';

const Graph = require('../Graph/Graph');

class Tree extends Graph {
  constructor() {
    super();
    this.setTreeRoot();
    this.setNodesByDepth();
  }

  setTreeRoot(root = null) {
    this.root = root;
  }

  getTreeRoot() {
    return this.root;
  }

  /**
   * A binary tree is a tree in which each node has up to two children.
   */
  isBinaryTree() {
    //
  }

  setNodesByDepth(nodesByDepth = []) {
    this.nodesByDepth = nodesByDepth;
  }

  getNodesByDepth() {
    return this.nodesByDepth;
  }

  listDepths(node, level) {
    if (!node) return;
    if (level = 0) this.setTreeRoot(node);
    if (!this.nodesByDepth[level]) this.nodesByDepth[level] = [];
    this.nodesByDepth[level].push(node);
    this.listDepths(node.left, level + 1);
    this.listDepths(node.right, level + 1);
  };
}

module.exports = Tree;