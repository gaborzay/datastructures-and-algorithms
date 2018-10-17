'use strict';

module.exports = {
  // Time complexity: O(n^2)
  // Space complexity: O(0)
  isUnique: (str) => {
    // Remove all white space
    str = str.toLowerCase().replace(/\s/g, '');
    const n = str.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (str[i] === str[j]) return false;
      }
    }
    return true;
  },
  // Time complexity: O(n)
  // Space complexity: O(256) -> 2 bytes per character in JS
  isUniqueHash: (str) => {
    let hashTable = {};
    // Remove all white space
    str = str.toLowerCase().replace(/\s/g, '');
    const n = str.length;
    for (let i = 0; i < n; i++) {
      if (hashTable[str[i]]) return false;
      else hashTable[str[i]] = 1;
    }
    return true;
  },
  // Time complexity: O(n*log(n)) -> from sort
  // Space complexity: O(log(n)) -> from sort
  isPermutation: (str1, str2) => {
    // Remove all white space and sort string
    str1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    str2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    if (str1.length !== str2.length) return false;
    const n = str1.length;
    for (let i = 0; i < n; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) return false;
    }
    return true;
  },
  // Time complexity: O(n)
  // Space complexity: O(n)
  urlify: (str, n) => {
    let newStr = "";
    for (let i = 0; i < n; i++) {
      if (str[i] === " ") newStr += "%20";
      else newStr += str[i];
    }
    return newStr;
  },
  // The JS way to do it
  urlifyJS: (str) => (str.trim().replace(/\s/g, '%20')),
  // Time complexity: O(n)
  // Space complexity: O(256) -> 2 bytes per character in JS
  palindromePermutation: (str) => {
    str = str.toLowerCase().replace(/\s/g, '').split('').sort();
    const n = str.length;
    let hashTable = {};
    let oddChars = 0;
    for (let i = 0; i < n; i++) {
      if (!hashTable[str[i]]) hashTable[str[i]] = 1;
      else hashTable[str[i]] += 1;
    }
    for (let char in hashTable) {
      if (hashTable.hasOwnProperty(char) && hashTable[char] % 2 !== 0) oddChars++;
    }
    return oddChars < 2;
  },
};