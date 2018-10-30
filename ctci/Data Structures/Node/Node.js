'use strict';

class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
    this.prev = null;
  }
}

module.exports = Node;