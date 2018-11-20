'use strict';


/**
 * A stack node that can take an type of data.
 */
class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

module.exports = StackNode;