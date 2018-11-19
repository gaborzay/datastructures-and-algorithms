'use strict';

const Node = require('./Node');

class GraphNode extends Node {
  constructor(...args) {
    super(...args);
    this.setVisited();
  }

  setVisited(visited = false) {
    this.visited = visited;
  }
}

module.exports = GraphNode;