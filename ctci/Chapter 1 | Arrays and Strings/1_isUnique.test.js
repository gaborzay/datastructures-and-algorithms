/**
 * Is Unique: Implement an algorithm to determine if a string has all unique
 * characters. What if you cannot use an additional data structure?
 * */

const strFuncs = require('./String/String');

test('rejects strings that are not unique', () => {
  const str = "Hello";
  expect(strFuncs.isUnique(str)).toBeFalsy();
});

test('accepts strings that are unique (ignore whitespace)', () => {
  const str = "   World!   ";
  expect(strFuncs.isUnique(str)).toBeTruthy();
});

test('rejects strings that are not unique', () => {
  const str = "Hello";
  expect(strFuncs.isUniqueHash(str)).toBeFalsy();
});

test('accepts strings that are unique (ignore whitespace)', () => {
  const str = "   World!   ";
  expect(strFuncs.isUniqueHash(str)).toBeTruthy();
});