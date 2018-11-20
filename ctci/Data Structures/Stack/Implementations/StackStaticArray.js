'use strict';


const Stack = require('../Stack');

/**
 * Implementation of a Stack using an Array
 */
class StackStaticArray extends Stack {
	constructor() {
		super();
		this.maxsize = null; // integer
		this.top = 0; // object
		this.items = null; // array of items
	}

	initialize(stk, size) {
		this.items = new Array(size);
		this.maxsize = size;
		this.top = 0;
	}

	push(stk, item) {
		if (stk.top === stk.maxsize) {
			throw new Error('FullStackException')
		} else {
			stk.items[stk.top] = item;
			stk.top++;
		}
	}

	pop(stk) {
		if (stk.top === 0) {
			throw new Error('EmptyStackException');
		} else {
			stk.top--;
			return stk.items[stk.top];
		}
	}
}

module.exports = StackStaticArray;