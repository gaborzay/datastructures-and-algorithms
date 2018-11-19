/**
 * Palindrome Permutation
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that is the same forwards and
 * backwards. A permutation is a rearrangement of letters. The palindrome does
 * not need to be limited to just dictionary words.
 * */

const MyString = require('../Data Structures/String/String');

test('returns true if a palindrome permutation', () => {
  const input = new MyString("Tact Coa");
  const isPalindrome = input.palindromePermutation();
  expect(isPalindrome).toBeTruthy();
});

test('returns false if not a palindrome permutation', () => {
  const input = new MyString("Hello World");
  const isPalindrome = input.palindromePermutation();
  expect(isPalindrome).toBeFalsy();
});