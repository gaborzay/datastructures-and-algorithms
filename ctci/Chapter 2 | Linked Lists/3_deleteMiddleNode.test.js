/**
 * Delete Middle Node
 * Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and the last node, not necessarily the exact middle) of a singly
 * linked list, given only access to that node.
 * EXAMPLE
 * Input: the node c from the linked list a->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const linkedList = new LinkedList();

beforeEach(() => {
  linkedList.reset();
});

test('should delete node in middle of list', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  const input = 'c';
  const expectedOutput = ['a', 'b', 'd', 'e', 'f'];
  linkedList.generateSinglyLinkedListFromArray(arr);
  linkedList.deleteMiddleNode(input);
  const output = linkedList.listArray;
  expect(output).toEqual(expectedOutput);
});

test('should not delete anything if node does not exist', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  const input = 'g';
  const expectedOutput = [...arr];
  linkedList.generateSinglyLinkedListFromArray(arr);
  linkedList.deleteMiddleNode(input);
  const output = linkedList.listArray;
  expect(output).toEqual(expectedOutput);
});

test('should not delete anything if node does not exist in empty array', () => {
  const arr = [];
  const input = '';
  const expectedOutput = [...arr];
  linkedList.generateSinglyLinkedListFromArray(arr);
  linkedList.deleteMiddleNode(input);
  const output = linkedList.listArray;
  expect(output).toEqual(expectedOutput);
});