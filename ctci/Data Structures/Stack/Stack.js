'use strict';


/**
 * Abstract Stack
 */
class Stack {
	constructor() {
		if (new.target === Stack) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}
	}

	push() {
		throw new TypeError("Method push() in Abstract class Stack has not been defined!");
	}

	pop() {
		throw new TypeError("Method pop() in Abstract class Stack has not been defined!");
	}
}

module.exports = Stack;