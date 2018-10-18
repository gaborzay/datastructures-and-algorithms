/**
 * Zero Matrix
 * Write an algorithm such that if an element in an MxN matrix is 0, it's entire
 * row and column are set to 0.
 * */

const arrFuncs = require('../Data Structures/Array/Array');

const checkHelper = (input, expectedOutput) => {
  const m = input.length;
  const n = input[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      expect(input[i][j]).toBe(expectedOutput[i][j]);
    }
  }
};

test('check if empty matrix is rejected', () => {
  const input = [];
  const output = arrFuncs.zeroMatrix(input);
  expect(output).toBeFalsy();
});

test('check if empty 1x1 matrix is rejected', () => {
  const input = [[]];
  const output = arrFuncs.zeroMatrix(input);
  expect(output).toBeFalsy();
});

test('check if 1x2 matrix with a 0 is set correctly', () => {
  const input = [[0, 1]];
  const expectedOutput = [[0, 0]];
  const output = arrFuncs.zeroMatrix(input);
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});

test('check if 1x2 matrix without a 0 is set correctly', () => {
  const input = [[1, 1]];
  const expectedOutput = [[1, 1]];
  const output = arrFuncs.zeroMatrix(input);
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});


test('check if 3x5 matrix with a 0 is set correctly', () => {
  const input = [[1,1,1,1,0],[0,1,1,1,1],[1,1,1,1,1]];
  const expectedOutput = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0]];
  const output = arrFuncs.zeroMatrix(input);
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});

test('check if 3x5 matrix without a 0 is set correctly', () => {
  const input = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
  const expectedOutput = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
  const output = arrFuncs.zeroMatrix(input);
  expect(output).toBeTruthy();
  checkHelper(input, expectedOutput);
});