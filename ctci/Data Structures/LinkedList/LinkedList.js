'use strict';

const Node = require('../Node/Node');

class LinkedList {
	constructor(head) {
		this.head = head || null;
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
	 * Time complexity: O(1)
	 * Space complexity: O(1)
	 */
	deleteMiddleNode(n) {
		if (n === null || n.next === null) return false;
		let next = n.next;
		n.data = next.data;
		n.next = next.next;
		return true;
	}

	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	_partition(node = this.head, x) {
		let beforeStart = null;
		let beforeEnd = null;
		let afterStart = null;
		let afterEnd = null;

		/* Partition list */
		while (node !== null) {
			let next = node.next;
			node.next = null;
			if (node.data < x) {
				/* Insert node into end of before list */
				if (beforeStart === null) {
					beforeStart = node;
					beforeEnd = beforeStart;
				} else {
					beforeEnd.next = node;
					beforeEnd = node;
				}
			} else {
				/* Insert node into end of after list */
				if (afterStart === null) {
					afterStart = node;
					afterEnd = afterStart;
				} else {
					afterEnd.next = node;
					afterEnd = node;
				}
			}
			node = next;
		}

		if (beforeStart === null) {
			return afterStart;
		}

		/* Merge before list and after list */
		beforeEnd.next = afterStart;
		return beforeStart;
	}

	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	_sumListsReverse(a, b) {
		const base = 10;
		let carry = 0;

		while (a !== null || b !== null) {
			const aValue = a ? a.data : 0;
			const bValue = b ? b.data : 0;
			const sum = aValue + bValue + carry;
			const value = sum % base;

			carry = Math.floor(sum / base);

			if (this.head !== null) {
				this.appendToTail(value);
			} else {
				this.head = new Node(value);
				this.length++;
			}

			a = a ? a.next : null;
			b = b ? b.next : null;
		}

		return this.head;
	}

	/**
	 * Time complexity:
	 * Space complexity:
	 */
	sumListForward(a, b) {
		//
	}

	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	_palindrome() {
		const _this = this.clone();
		_this.reverse();

		let a = _this.head;
		let b = this.head;

		while (a !== null) {
			if (a.data !== b.data) {
				return false;
			}
			a = a.next;
			b = b.next;
		}

		return true;
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
			if (this.head !== null) {
				this.appendToTail(data);
			} else {
				const n = new Node(data);
				this.head = n;
				this.length++;
			}
		})
	}

	generateArrayFromList() {
		return this.traverse([]['push'], []);
	}

	appendToTail(d) {
		const end = new Node(d);
		const head = this.head;

		if (head) {
			let n = head;
			while (n.next != null) {
				n = n.next;
			}
			n.next = end;
			this.length++;
		} else {
			this.head = end;
			this.length++;
		}
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

	reverse() {
		let prev = this.head;
		let curr = prev.next;
		let next = null;

		prev.next = null;

		while (curr !== null) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		this.head = prev;
	}

	clone() {
		let node = this.head;
		let list = new LinkedList();


		while (node !== null) {
			list.appendToTail(node.data);
			node = node.next;
		}

		return list;
	}
}

module.exports = LinkedList;