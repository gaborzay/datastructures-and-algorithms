'use strict';

const GraphNode = require('../Node/GraphNode');

class Graph {
  constructor() {
    this.setNodes();
  }

  setNodes(nodes = []) {
    this.nodes = nodes;
  }

  getNodes() {
    return this.nodes;
  }

  getNumberOfNodes() {
    return this.nodes.length;
  }

  addNode(node) {
    this.nodes.push(node);
  }

  populateGraphFromAdjacencyList(adjacencyList) {
    const _this = this;
    adjacencyList.forEach(function (adjacent, key) {
      _this.nodes.push(new GraphNode({key: key, adjacent: adjacent}));
    });
  }

  search(root, dest) {
    const _this = this;
    const queue = [];
    queue.push(root);
    while (queue.length) {
      let node = queue.pop();
      node.visited = true;
      if (node === dest) return true;
      node.adjacent.forEach(function (index) {
        if (!_this.nodes[index].visited) {
          queue.unshift(_this.nodes[index]);
        }
      })
    }
    return false;
  };
}

module.exports = Graph;