'use strict';

module.exports = {
  // Time complexity: O(n^2)
  // Space complexity: O(0)
  isUnique: (str) => {
    // Remove all white space
    str = str.replace(/\s/g, '').toLowerCase();
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
    str = str.replace(/\s/g, '').toLowerCase();
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
    // Remove all white space
    str1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    str2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
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
    // Remove all white space
    str = str.replace(/\s/g, '').toLowerCase().split('').sort();
    const n = str.length;
    let hashTable = {};
    let oddChars = 0;
    for (let i = 0; i < n; i++) {
      if (!hashTable[str[i]]) hashTable[str[i]] = 1;
      else hashTable[str[i]] += 1;
    }
    // Count number of odd characters
    for (let char in hashTable) {
      if (hashTable.hasOwnProperty(char) && hashTable[char] % 2 !== 0) oddChars++;
    }
    return oddChars < 2;
  },
  // Time complexity: O(n)
  // Space complexity: O(26)
  oneAway: (str1, str2) => {
    // Remove all white space
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    // Helper Functions
    const getAlphabet = () => {
      const alphabet = [];
      for (let i = 97; i < 123; i++) {
        alphabet.push(String.fromCharCode(i));
      }
      return alphabet;
    };
    const removeCharacter = (str, n, index) => {
      const front = str.slice(0, index);
      const end = str.slice(index + 1, n);
      return front.concat(end);
    };
    const insertCharacter = (str, n, index, char) => {
      const front = str.slice(0, index);
      const end = str.slice(index + 1, n);
      return front.concat(char, end);
    };
    const replaceCharacter = (str, n, index, char) => {
      const front = str.slice(0, index);
      const end = str.slice(index, n);
      return front.concat(char, end);
    };
    // Constants
    const n = str1.length;
    const alphabet = getAlphabet();
    const alphaLen = alphabet.length;
    // Check if removing a character makes strings equal
    for (let i = 0; i < n; i++) {
      let strRemoved = removeCharacter(str1, n, i);
      if (strRemoved === str2) return true;
    }
    // Check if inserting a character makes strings equal
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < alphaLen; j++) {
        let strInserted = insertCharacter(str1, n, i, alphabet[j]);
        if (strInserted === str2) return true;
      }
    }
    // Check if replacing a character makes strings equal
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < alphaLen; j++) {
        let strReplaced = replaceCharacter(str1, n, i, alphabet[j]);
        if (strReplaced === str2) return true;
      }
    }
    return false;
  },
};