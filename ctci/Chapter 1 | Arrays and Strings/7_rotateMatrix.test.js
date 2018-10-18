/**
 * Rotate Matrix
 * Give an image represented by an NxN matrix, where each pixel in the image is
 * 4 bytes, write a method to rotate the image by 90 degrees. Can you do this
 * in place?
 * */

const arrFuncs = require('./Array/Array');

const checkHelper = (output, expectedOutput, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      expect(output[i][j]).toBe(expectedOutput[i][j]);
    }
  }
};

test('check if 1x1 matrix is rotated correctly', () => {
  const input = [
    [1],
  ];
  const expectedOutput = [
    [1],
  ];
  const n = input.length;
  const output = arrFuncs.rotateMatrix(input, n);
  checkHelper(output, expectedOutput, n);
});

test('check if 2x2 matrix is rotated correctly', () => {
  const input = [
    [1, 2],
    [3, 4]
  ];
  const expectedOutput = [
    [3, 1],
    [4, 2]
  ];
  const n = input.length;
  const output = arrFuncs.rotateMatrix(input, n);
  checkHelper(output, expectedOutput, n);
});

test('check if 3x3 matrix is rotated correctly', () => {
  const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const expectedOutput = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
  const n = input.length;
  const output = arrFuncs.rotateMatrix(input, n);
  checkHelper(output, expectedOutput, n);
});

test('check if 4x4 matrix is rotated correctly', () => {
  const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  const expectedOutput = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ];
  const n = input.length;
  const output = arrFuncs.rotateMatrix(input, n);
  checkHelper(output, expectedOutput, n);
});