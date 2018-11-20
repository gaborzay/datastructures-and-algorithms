/**
 * Palindrome
 *
 * Implement a function to check if a linked list is palindrome.
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const linkedList = new LinkedList();

beforeEach(() => {
	linkedList.reset();
});

test('should return true if it is a palindrome', () => {
	const a = new LinkedList();
	const input = 'racecar'.split('');

	a.generateSinglyLinkedListFromArray(input);

	const output = a._palindrome();

	expect(output).toBeTruthy();
});

test('should return false if it is not a palindrome', () => {
	const a = new LinkedList();
	const input = 'race'.split('');

	a.generateSinglyLinkedListFromArray(input);

	const output = a._palindrome();

	expect(output).toBeFalsy();
});