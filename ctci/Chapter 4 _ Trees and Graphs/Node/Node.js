'use strict';

class Node {
  constructor(args) {
    this.setKey(args['key']);
    this.setKey(args['name']);
    this.setAdjacent(args['adjacent']);
  }

  setKey(key) {
    this.key = key;
  }

  setName(name = '') {
    this.name = name;
  }

  setAdjacent(adjacent = []) {
    this.adjacent = adjacent;
  }
}

module.exports = Node;