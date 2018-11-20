'use strict';


const Stack = require('../Stack');
const StackNode = require('../StackNode');

/**
 * Implementation of a Stack using a Linked List
 */
class StackLinkedList extends Stack {
	constructor() {
		super();
		this.top = null;
	}

	pop() {
		if (this.top === null) throw new Error('EmptyStackException');
		const item = top.data;
		this.top = this.top.next;
		return item;
	}

	push(item) {
		const t = new StackNode(item);
		t.next = this.top;
		this.top = t;
	}

	peek() {
		if (top === null) throw new Error('EmptyStackException');
		return top.data;
	};

	isEmpty() {
		return top === null;
	};
}

module.exports = StackLinkedList;