/**
 * Check Permutation
 * Given two strings, write a method to decide if one is a permutation of the other.
 * */

const MyString = require('../Data Structures/String/String');

test('returns true on strings that are permutations', () => {
  const str1 = new MyString(" STOP");
  const str2 = "POTS  ";
  const isPermutation = str1.isPermutation(str2);
  expect(isPermutation).toBeTruthy();
});

test('returns false on strings that are not same length', () => {
  const str1 = new MyString("Burger");
  const str2 = "Sausage";
  const isPermutation = str1.isPermutation(str2);
  expect(isPermutation).toBeFalsy();
});

test('returns false on strings that are not permutations', () => {
  const str1 = new MyString("Burger");
  const str2 = "Hotdog";
  const isPermutation = str1.isPermutation(str2);
  expect(isPermutation).toBeFalsy();
});