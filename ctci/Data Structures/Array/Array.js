'use strict';

module.exports = {
  // Time complexity: O(n*log(n))
  // Space complexity: O(0)
  rotateMatrix: (mat) => {
    if (mat.length < 1 || mat[0].length < 1 || mat.length !== mat[0].length) return false;
    const n = mat.length;
    const swap = (mat, n, i, j) => {
      const temp = mat[j][n - i - 1];
      mat[j][n - i - 1] = mat[i][j];
      mat[i][j] = mat[n - j - 1][i];
      mat[n - j - 1][i] = mat[n - i - 1][n - j - 1];
      mat[n - i - 1][n - j - 1] = temp;
    };
    for (let i = 0; i < n - 1; i++) {
      for (let j = i; j < n - i - 1; j++) {
        swap(mat, n, i, j);
      }
    }
    return true;
  },
  // Time complexity: O(mn)
  // Space complexity: O(m+n)
  zeroMatrix: (mat) => {
    if (mat.length < 1 || mat[0].length < 1) return false;
    const m = mat.length;
    const n = mat[0].length;
    const rowsToSet = [];
    const columnsToSet = [];
    const setRowZero = (mat, row, n) => {
      for (let j = 0; j < n; j++) {
        mat[row][j] = 0;
      }
    };
    const setColumnZero = (mat, column, m) => {
      for (let i = 0; i < m; i++) {
        mat[i][column] = 0;
      }
    };
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 0) {
          rowsToSet.push(i);
          columnsToSet.push(j);
        }
      }
    }
    rowsToSet.forEach((row) => setRowZero(mat, row, n));
    columnsToSet.forEach((column) => setColumnZero(mat, column, m));
    return true;
  }
};