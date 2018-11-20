/**
 * URLify
 *
 * Write a method to replace all the spaces in a string with '%20'. You may
 * assume that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true"
 */

const MyString = require('../Data Structures/String/String');

test('urlify returns the correct encoded url', () => {
  const input = new MyString("Mr John Smith   ");
  const expectedOutput = "Mr%20John%20Smith";
  const urlify = input.urlify();
  expect(urlify).toBe(expectedOutput);
});

test('urlifyJS returns the correct encoded url', () => {
  const input = new MyString("Mr John Smith   ");
  const expectedOutput = "Mr%20John%20Smith";
  const urlify = input.urlifyJS();
  expect(urlify).toBe(expectedOutput);
});