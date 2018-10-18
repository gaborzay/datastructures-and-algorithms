/**
 * Is Unique
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use an additional data structure?
 * */

const strFuncs = require('../Data Structures/String/String');

test('returns false on strings do not have unique characters', () => {
  const str = "Burger";
  const isUnique = strFuncs.isUnique(str);
  expect(isUnique).toBeFalsy();
});

test('returns true on strings that are unique (ignores whitespace)', () => {
  const str = "   World!   ";
  const isUnique = strFuncs.isUnique(str);
  expect(isUnique).toBeTruthy();
});

test('returns false on strings do not have unique characters', () => {
  const str = "Burger";
  const isUnique = strFuncs.isUniqueHash(str);
  expect(isUnique).toBeFalsy();
});

test('returns true on strings that are unique (ignores whitespace)', () => {
  const str = "   World!   ";
  const isUnique = strFuncs.isUniqueHash(str);
  expect(isUnique).toBeTruthy();
});