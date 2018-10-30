'use strict';

const Node = require('../Node/Node');

class LinkedList {
  constructor(head) {
    this.head = head || null;
    this.tail = head || null;
    this.length = head ? 1 : 0;
  }

  /**
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   */
  removeDups() {
    let p = null, n = null;
    let c = this.head;
    while (c !== null) {
      p = c;
      n = c.next;
      while (n !== null) {
        c.data === n.data ? this.deleteNode(p, n) : p = n;
        n = n.next;
      }
      c = c.next;
    }
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  removeDupsHash() {
    const set = new Set();
    let n = this.head;
    let prev = null;
    while (n !== null) {
      if (set.has(n.data)) {
        prev.next = n.next;
      } else {
        set.add(n.data);
        prev = n;
      }
      n = n.next;
    }
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  returnKthToLast(k) {
    let count = this.length - k;
    if (count > 0) {
      let n = this.head;
      while (n !== null) {
        if (1 > --count) return n;
        n = n.next;
      }
    }
    return false;
  }

  /**
   * Time complexity:
   * Space complexity:
   */
  deleteMiddleNode(k) {
    let n = this.head;
    let p = null;
    while (n !== null) {
      if (n.data === k) {
        this.deleteNode(p, n);
        return;
      }
      p = n;
      n = n.next;
    }
    return false;
  }

  // Helper Functions
  get pr() {
    this.traverse();
  }

  get listArray() {
    return this.generateArrayFromList();
  }

  reset(head = null) {
    this.head = head;
    this.tail = head;
    this.length = head ? 1 : 0;
  }

  generateSinglyLinkedListFromArray(arr) {
    arr.forEach(data => {
      const n = new Node(data);
      if (this.head !== null) {
        this.appendToTail(data);
      } else {
        this.head = n;
        this.length++;
      }
    })
  }

  generateDoublyLinkedListFromArray(arr) {
    //
  }

  generateArrayFromList() {
    return this.traverse([]['push'], []);
  }

  appendToTail(d) {
    const end = new Node(d);
    let n = this.head;
    while (n.next != null) {
      n = n.next;
    }
    n.next = end;
    this.length++;
  }

  deleteNode(prev, node) {
    if (node) {
      this.length--;
    }
    prev.next = node.next;
  }

  traverse(cb = console.log, obj = this) {
    let n = this.head;
    while (n !== null) {
      cb.apply(obj, [n.data]);
      n = n.next;
    }
    return obj;
  }
}

module.exports = LinkedList;