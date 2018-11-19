/**
 * Return Kth to Last
 * Implement an algorithm to find the kth to last element of a singly linked list.
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const linkedList = new LinkedList();

beforeEach(() => {
  linkedList.reset();
});

test('should return the last element of the array if the input is zero', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  const k = 0;
  const expectedOutput = arr[arr.length-k-1];
  linkedList.generateSinglyLinkedListFromArray(arr);
  const output = linkedList.returnKthToLast(k);
  expect(output.data).toEqual(expectedOutput);
});

test('should return the first element of the array if the input is the length of arr-1', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  const k = arr.length-1;
  const expectedOutput = arr[arr.length-k-1];
  linkedList.generateSinglyLinkedListFromArray(arr);
  const output = linkedList.returnKthToLast(k);
  expect(output.data).toEqual(expectedOutput);
});

test('should return the correct element of the array is not the last or first element', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  const k = 3;
  const expectedOutput = arr[arr.length-k-1];
  linkedList.generateSinglyLinkedListFromArray(arr);
  const output = linkedList.returnKthToLast(k);
  expect(output.data).toEqual(expectedOutput);
});

test('should return undefined if empty array passed', () => {
  const arr = [];
  const k = 0;
  linkedList.generateSinglyLinkedListFromArray(arr);
  const output = linkedList.returnKthToLast(k);
  expect(output).toBeFalsy();
});

test('should return false if kth element does not exist', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  const k = 10;
  linkedList.generateSinglyLinkedListFromArray(arr);
  const output = linkedList.returnKthToLast(k);
  expect(output).toBeFalsy();
});