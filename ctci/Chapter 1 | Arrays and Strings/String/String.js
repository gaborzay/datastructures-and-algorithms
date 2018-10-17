'use strict';

module.exports = {
  // Time complexity: O(n^2)
  // Space complexity: 0
  isUnique: (str) => {
    // Remove all white space
    str = str.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  },
  // Time complexity: O(n)
  // Space complexity: n
  isUniqueHash: (str) => {
    let hashTable = {};
    // Remove all white space
    str = str.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < str.length; i++) {
      if (hashTable[str[i]]) {
        return false;
      } else {
        hashTable[str[i]] = 1;
      }
    }
    return true;
  }
};