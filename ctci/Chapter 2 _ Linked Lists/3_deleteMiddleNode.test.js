/**
 * Delete Middle Node
 *
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
  const expectedOutput = ['a', 'b', 'd', 'e', 'f'];
  linkedList.generateSinglyLinkedListFromArray(arr);
  const input = linkedList.returnKthToLast(3);
  linkedList.deleteMiddleNode(input);
  const output = linkedList.listArray;
  expect(output).toEqual(expectedOutput);
});