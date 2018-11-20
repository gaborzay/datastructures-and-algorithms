/**
 * Remove Dups
 *
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 * */

const LinkedList = require('../Data Structures/LinkedList/LinkedList');
const linkedList = new LinkedList();

beforeEach(() => {
  linkedList.reset();
});

test('removeDups should correctly remove duplicates from string', () => {
  const input  = "FOLLOW UP".split('');
  const expected = "FOLW UP";
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDups();
  const output = linkedList.listArray.join("");
  expect(output).toEqual(expected);
});

test('removeDups should correctly remove duplicates from empty string', () => {
  const input  = "".split('');
  const expected = "";
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDups();
  const output = linkedList.listArray.join("");
  expect(output).toEqual(expected);
});

test('removeDups should correctly remove duplicates from string with same duplicates', () => {
  const input  = "LLLL LLL LLLL LL LLL LLL LL".split('');
  const expected = "L ";
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDups();
  const output = linkedList.listArray.join("");
  expect(output).toEqual(expected);
});

test('removeDups should correctly remove duplicates from array of duplicates', () => {
  const input  = [9,9,9,9,9,9,9,10,5,9,3,4,8,9,9,9,9,9,9,9];
  const expected = [9,10,5,3,4,8];
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDups();
  const output = linkedList.listArray;
  expect(output).toEqual(expected);
});

test('removeDupsHash should correctly remove duplicates from string', () => {
  const input  = "FOLLOW UP".split('');
  const expected = "FOLW UP";
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDupsHash();
  const output = linkedList.listArray.join("");
  expect(output).toEqual(expected);
});

test('removeDupsHash should correctly remove duplicates from empty string', () => {
  const input  = "".split('');
  const expected = "";
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDupsHash();
  const output = linkedList.listArray.join("");
  expect(output).toEqual(expected);
});

test('removeDupsHash should correctly remove duplicates from string with same duplicates', () => {
  const input  = "LLLL LLL LLLL LL LLL LLL LL".split('');
  const expected = "L ";
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDupsHash();
  const output = linkedList.listArray.join("");
  expect(output).toEqual(expected);
});

test('removeDupsHash should correctly remove duplicates from array of duplicates', () => {
  const input  = [9,10,5,9,3,4,8,9,9,9,9,9,9,9];
  const expected = [9,10,5,3,4,8];
  linkedList.generateSinglyLinkedListFromArray(input);
  linkedList.removeDupsHash();
  const output = linkedList.listArray;
  expect(output).toEqual(expected);
});