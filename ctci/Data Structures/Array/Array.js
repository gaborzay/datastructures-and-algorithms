'use strict';

class MyArray extends Array {
  constructor(...props) {
    super(...props);
  }

  /**
   * Time complexity: O(n*log(n))
   * Space complexity: O(1)
   * @returns {boolean}
   */
  rotateMatrix() {
    if (this.length < 1 || this[0].length < 1 || this.length !== this[0].length) return false;
    const n = this.length;
    const swap = (mat, n, i, j) => {
      const temp = mat[j][n - i - 1];
      mat[j][n - i - 1] = mat[i][j];
      mat[i][j] = mat[n - j - 1][i];
      mat[n - j - 1][i] = mat[n - i - 1][n - j - 1];
      mat[n - i - 1][n - j - 1] = temp;
    };
    for (let i = 0; i < n - 1; i++) {
      for (let j = i; j < n - i - 1; j++) {
        swap(this, n, i, j);
      }
    }
    return true;
  }

  /**
   * Time complexity: O(mn)
   * Space complexity: O(m+n)
   * @returns {boolean}
   */
  zeroMatrix() {
    if (this.length < 1 || this[0].length < 1) return false;
    const m = this.length;
    const n = this[0].length;
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
        if (this[i][j] === 0) {
          rowsToSet.push(i);
          columnsToSet.push(j);
        }
      }
    }
    rowsToSet.forEach((row) => setRowZero(this, row, n));
    columnsToSet.forEach((column) => setColumnZero(this, column, m));
    return true;
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @param low
   * @param high
   * @param num
   * @param start
   */
  fillArray(num = 10, low = 0, high = 100, start = 0) {
    for (let i = start; i < num; i++) {
      this[i] = (Math.floor(Math.random() * high) + low);
    }
  }
}

module.exports = MyArray;