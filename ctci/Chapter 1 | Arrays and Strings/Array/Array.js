'use strict';

module.exports = {
  // Time complexity:
  // Space complexity:
  rotateMatrix: (mat, n) => {
    if (!(n < 2)) {
      const swap = (mat, n, i, j) => {
        const temp = mat[j][n-i-1];
        mat[j][n-i-1] = mat[i][j];
        mat[i][j] = mat[n-j-1][i];
        mat[n-j-1][i] = mat[n-i-1][n-j-1];
        mat[n-i-1][n-j-1] = temp;
      };
      for (let i = 0; i < n-1; i++) {
        for (let j = i; j < n-i-1; j++) {
          swap(mat, n, i, j);
        }
      }
    }
    return mat;
  }
};