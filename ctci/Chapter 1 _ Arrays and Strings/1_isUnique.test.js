/**
 * Is Unique
 *
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use an additional data structure?
 * */

const MyString = require('../Data Structures/String/String');

test('returns false on strings do not have unique characters', () => {
  const str = new MyString("Burger");
  const isUnique = str.isUnique();
  expect(isUnique).toBeFalsy();
});

test('returns true on strings that are unique (ignores whitespace)', () => {
  const str = new MyString("   World!   ");
  const isUnique = str.isUnique();
  expect(isUnique).toBeTruthy();
});

test('returns false on strings do not have unique characters', () => {
  const str = new MyString("Burger");
  const isUnique = str.isUniqueHash();
  expect(isUnique).toBeFalsy();
});

test('returns true on strings that are unique (ignores whitespace)', () => {
  const str = new MyString("   World!   ");
  const isUnique = str.isUniqueHash();
  expect(isUnique).toBeTruthy();
});