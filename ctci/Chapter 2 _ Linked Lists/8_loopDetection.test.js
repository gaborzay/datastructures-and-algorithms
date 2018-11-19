/**
 * Loop Detection
 * Given a circular linked list, implement an algorithm that returns the node at
 * the beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer
 * points to an earlier node, so as to make a loop in the linked list.
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output: C
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const linkedList = new LinkedList();

beforeEach(() => {
  linkedList.reset();
});

test('', () => {
  expect(true).toEqual(true);
});