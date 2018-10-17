/**
 * Check Permutation
 * Given two strings, write a method to decide if one is a permutation of the other.
 * */

const strFuncs = require('./String/String');

test('returns true on strings that are permutations', () => {
  const str1 = " STOP";
  const str2 = "POTS  ";
  const isPermutation = strFuncs.isPermutation(str1, str2);
  expect(isPermutation).toBeTruthy();
});

test('returns false on strings that are not same length', () => {
  const str1 = "Burger";
  const str2 = "Sausage";
  const isPermutation = strFuncs.isPermutation(str1, str2);
  expect(isPermutation).toBeFalsy();
});

test('returns false on strings that are not permutations', () => {
  const str1 = "Burger";
  const str2 = "Hotdog";
  const isPermutation = strFuncs.isPermutation(str1, str2);
  expect(isPermutation).toBeFalsy();
});