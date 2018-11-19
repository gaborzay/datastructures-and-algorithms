'use strict';

const Node = require('./Node');

class TreeNode extends Node {
  constructor(...args) {
    super(...args);
    this.setChildren(args['children']);
  }

  setChildren(children = []) {
    this.left = children;
  }
}

module.exports = TreeNode;