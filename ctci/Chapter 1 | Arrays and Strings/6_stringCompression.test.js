/**
 * String Compression
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become
 * a2b1c5a3. If the "compressed" string would not become smaller than the
 * original string, your method should return the original string. You can
 * assume the string has only uppercase and lowercase letters (a-z);
 * */

const strFuncs = require('./String/String');

test('correctly compresses string with repeated characters', () => {
  const input = 'aabcccccaaa';
  const expectedOutput = 'a2b1c5a3';
  const output = strFuncs.stringCompression(input);
  expect(output).toBe(expectedOutput);
});

test('correctly compresses string with no repeated characters', () => {
  const input = 'abc';
  const expectedOutput = 'abc';
  const output = strFuncs.stringCompression(input);
  expect(output).toBe(expectedOutput);
});