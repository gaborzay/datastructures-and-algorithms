/**
 * Sum Lists
 * You have two numbers represented by a linked list, where each node contains a
 * single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers returns
 * the sum as linked list.
 * EXAMPLE
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
 * Output: 2 -> 1 -> 9. That is, 912.
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * EXAMPLE
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
 * Output: 9 -> 1 -> 2. That is, 912.
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const linkedList = new LinkedList();

beforeEach(() => {
	linkedList.reset();
});

test('should correctly return sum when linked lists are same length', () => {
	const a = new LinkedList();
	const b = new LinkedList();
	const aValue = 617;
	const bValue = 295;
	const expectedOutput = aValue + bValue;

	a.generateSinglyLinkedListFromArray(String(aValue).split('').reverse().map(a => Number(a)));
	b.generateSinglyLinkedListFromArray(String(bValue).split('').reverse().map(a => Number(a)));

	linkedList._sumListsReverse(a.head, b.head);

	const outputArr = linkedList.generateArrayFromList();
	const output = Number(outputArr.reverse().join(''));

	expect(output).toEqual(expectedOutput);
});

test('should correctly return sum when first linked list is longer', () => {
	const a = new LinkedList();
	const b = new LinkedList();
	const aValue = 5617;
	const bValue = 298;
	const expectedOutput = aValue + bValue;

	a.generateSinglyLinkedListFromArray(String(aValue).split('').reverse().map(a => Number(a)));
	b.generateSinglyLinkedListFromArray(String(bValue).split('').reverse().map(a => Number(a)));

	linkedList._sumListsReverse(a.head, b.head);

	const outputArr = linkedList.generateArrayFromList();
	const output = Number(outputArr.reverse().join(''));

	expect(output).toEqual(expectedOutput);
});

test('should correctly return sum when first linked list is shorter', () => {
	const a = new LinkedList();
	const b = new LinkedList();
	const aValue = 17;
	const bValue = 295;
	const expectedOutput = aValue + bValue;

	a.generateSinglyLinkedListFromArray(String(aValue).split('').reverse().map(a => Number(a)));
	b.generateSinglyLinkedListFromArray(String(bValue).split('').reverse().map(a => Number(a)));

	linkedList._sumListsReverse(a.head, b.head);

	const outputArr = linkedList.generateArrayFromList();
	const output = Number(outputArr.reverse().join(''));

	expect(output).toEqual(expectedOutput);
});

test('should correctly return sum when first linked list is empty', () => {
	const a = new LinkedList();
	const b = new LinkedList();
	const aValue = 0;
	const bValue = 295;
	const expectedOutput = aValue + bValue;

	b.generateSinglyLinkedListFromArray(String(bValue).split('').reverse().map(a => Number(a)));

	linkedList._sumListsReverse(a.head, b.head);

	const outputArr = linkedList.generateArrayFromList();
	const output = Number(outputArr.reverse().join(''));

	expect(output).toEqual(expectedOutput);
});

test('should correctly return sum when second linked list is empty', () => {
	const a = new LinkedList();
	const b = new LinkedList();
	const aValue = 0;
	const bValue = 295;
	const expectedOutput = aValue + bValue;

	b.generateSinglyLinkedListFromArray(String(bValue).split('').reverse().map(a => Number(a)));

	linkedList._sumListsReverse(b.head, a.head);

	const outputArr = linkedList.generateArrayFromList();
	const output = Number(outputArr.reverse().join(''));

	expect(output).toEqual(expectedOutput);
});