/**
 * Rotate Matrix
 * Give an image represented by an NxN matrix, where each pixel in the image is
 * 4 bytes, write a method to rotate the image by 90 degrees. Can you do this
 * in place?
 * */

const MyArray = require('../Data Structures/Array/Array');

const checkHelper = (input, expectedOutput) => {
  const n = input.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      expect(input[i][j]).toBe(expectedOutput[i][j]);
    }
  }
};

test('check if empty matrix is rejected', () => {
  const input = new MyArray(0);
  const output = input.rotateMatrix();
  expect(output).toBeFalsy();
});

test('check if empty 1x1 matrix is rejected', () => {
  const input = new MyArray(
    []
  );
  const output = input.rotateMatrix();
  expect(output).toBeFalsy();
});

test('check if 1x2 matrix is rejected', () => {
  const input = new MyArray(
    [1, 2])
  ;
  const output = input.rotateMatrix();
  expect(output).toBeFalsy();
});

test('check if 1x1 matrix is rotated correctly', () => {
  const input = new MyArray(
    [1]
  );
  const expectedOutput = [
    [1]
  ];
  const output = input.rotateMatrix();
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});

test('check if 2x2 matrix is rotated correctly', () => {
  const input = new MyArray(
    [1, 2],
    [3, 4],
  );
  const expectedOutput = [
    [3, 1],
    [4, 2]
  ];
  const output = input.rotateMatrix();
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});

test('check if 3x3 matrix is rotated correctly', () => {
  const input = new MyArray(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  );
  const expectedOutput = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ];
  const output = input.rotateMatrix();
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});

test('check if 4x4 matrix is rotated correctly', () => {
  const input = new MyArray(
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  );
  const expectedOutput = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ];
  const output = input.rotateMatrix();
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});

test('check if 5x5 matrix is rotated correctly', () => {
  const input = new MyArray(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  );
  const expectedOutput = [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ];
  const output = input.rotateMatrix();
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});