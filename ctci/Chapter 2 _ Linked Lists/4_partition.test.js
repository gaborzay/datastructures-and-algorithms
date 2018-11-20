/**
 * Partition
 *
 * Write code to _partition a linked list around a value x, such that all nodes
 * less than x come before all nodes greater than or equal to x. If x is
 * contained within the list, the values of x only need to be after the elements
 * less than x (see below). The _partition element x can appear anywhere in the
 * "right _partition"; it does not need to appear between the left and right
 * partitions.
 * EXAMPLE
 * Input:   3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [_partition = 5]
 * Output:  3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const MyArray = require('../Data Structures/Array/Array');
const linkedList = new LinkedList();

beforeEach(() => {
	linkedList.reset();
});

test('should correctly _partition with value existing in the middle', () => {
	const partition = 5;
	const input = [3, 5, 8, 5, 10, 2, 1];
	const expectedOutput = new MyArray(3, 2, 1, 5, 8, 5, 10);

	linkedList.generateSinglyLinkedListFromArray(input);
	linkedList._partition(this.head, partition);

	const output = linkedList.generateArrayFromList();

	expect(expectedOutput._equals(output)).toBeTruthy();
});

test('should correctly _partition with value not existing on the left', () => {
	const partition = 0;
	const input = [3, 5, 8, 5, 10, 2, 1];
	const expectedOutput = new MyArray(3, 5, 8, 5, 10, 2, 1);

	linkedList.generateSinglyLinkedListFromArray(input);
	linkedList._partition(this.head, partition);

	const output = linkedList.generateArrayFromList();

	expect(expectedOutput._equals(output)).toBeTruthy();
});

test('should correctly _partition with value not existing on the right', () => {
	const partition = 20;
	const input = [3, 5, 8, 5, 10, 2, 1];
	const expectedOutput = new MyArray(3, 5, 8, 5, 10, 2, 1);

	linkedList.generateSinglyLinkedListFromArray(input);
	linkedList._partition(this.head, partition);

	const output = linkedList.generateArrayFromList();

	expect(expectedOutput._equals(output)).toBeTruthy();
});