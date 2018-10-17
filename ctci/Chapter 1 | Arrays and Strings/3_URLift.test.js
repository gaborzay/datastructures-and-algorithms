/**
 * URLify
 * Write a method to replace all the spaces in a string with '%20'. You may
 * assume that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true"
 */

const strFuncs = require('./String/String');

test('returns the correct encoded url', () => {
  const input = "Mr John Smith   ";
  const expectedOutput = "Mr%20John%20Smith";
  const urlify = strFuncs.urlify(input, 13);
  expect(urlify).toBe(expectedOutput);
});

test('returns the correct encoded url', () => {
  const input = "Mr John Smith   ";
  const expectedOutput = "Mr%20John%20Smith";
  const urlify = strFuncs.urlifyJS(input);
  expect(urlify).toBe(expectedOutput);
});