'use strict';

module.exports = {
  /**
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   * @param str
   * @returns {boolean}
   */
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
  /**
   * Time complexity: O(n)
   * Space complexity: O(256) -> 2 bytes per character in JS
   * @param str
   * @returns {boolean}
   */
  isUniqueHash: (str) => {
    const set = new Set();
    // Remove all white space
    str = str.replace(/\s/g, '').toLowerCase();
    const n = str.length;
    for (let i = 0; i < n; i++) {
      if (set.has(str[i])) return false;
      set.add(str[i]);
    }
    return true;
  },
  /**
   * Time complexity: O(n*log(n)) -> from sort
   * Space complexity: O(log(n)) -> from sort
   * @param s1
   * @param s2
   * @returns {boolean}
   */
  isPermutation: (s1, s2) => {
    // Remove all white space
    s1 = s1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    s2 = s2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    if (s1.length !== s2.length) return false;
    const n = s1.length;
    for (let i = 0; i < n; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) return false;
    }
    return true;
  },
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @param str
   * @param n
   * @returns {string}
   */
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
  /**
   * Time complexity: O(n)
   * Space complexity: O(256) -> 2 bytes per character in JS
   * @param str
   * @returns {boolean}
   */
  palindromePermutation: (str) => {
    // Remove all white space
    str = str.replace(/\s/g, '').toLowerCase().split('').sort();
    const n = str.length;
    const map = new Map();
    let oddChars = 0;
    for (let i = 0; i < n; i++) {
      const char = str[i];
      if (!map.has(char)) map.set(char, 1);
      else map.set(char, map.get(char)+1);
    }
    // Count number of odd characters
    for (let char of map.keys()) {
      if (map.has(char) && map.get(char) % 2 !== 0) oddChars++;
    }
    return oddChars < 2;
  },
  /**
   * Time complexity: O(n)
   * Space complexity: O(26)
   * @param s1
   * @param s2
   * @returns {boolean}
   */
  oneAway: (s1, s2) => {
    // Remove all white space
    s1 = s1.replace(/\s/g, '').toLowerCase();
    s2 = s2.replace(/\s/g, '').toLowerCase();
    const n = s1.length;
    const m = s2.length;
    if (n === 0 && m === 1) return true; // weird edge case
    const removeCharacter = (str, n, index) => {
      const front = str.slice(0, index);
      const end = str.slice(index + 1, n);
      return front.concat(end);
    };
    const insertCharacter = (str, n, index, char) => {
      const front = str.slice(0, index);
      const end = str.slice(index, n);
      return front.concat(char, end);
    };
    const replaceCharacter = (str, n, index, char) => {
      const front = str.slice(0, index);
      const end = str.slice(index + 1, n);
      return front.concat(char, end);
    };
    // Check if removing a character makes strings equal
    if (n > m) {
      for (let i = 0; i < n; i++) {
        const strRemoved = removeCharacter(s1, n, i);
        if (strRemoved === s2) return true;
      }
    }
    const getAlphabet = () => {
      const alphabet = [];
      for (let i = 97; i < 123; i++) {
        alphabet.push(String.fromCharCode(i));
      }
      return alphabet;
    };
    const alphabet = getAlphabet();
    const alphaLen = alphabet.length;
    // Check if replacing a character makes strings equal
    if (n === m) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < alphaLen; j++) {
          const strReplaced = replaceCharacter(s1, n, i, alphabet[j]);
          if (strReplaced === s2) return true;
        }
      }
    }
    // Check if inserting a character makes strings equal
    if (n < m) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < alphaLen; j++) {
          const strInserted = insertCharacter(s1, n, i, alphabet[j]);
          if (strInserted === s2) return true;
        }
      }
    }
    return false;
  },
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @param str
   * @returns {string}
   */
  stringCompression: (str) => {
    const n = str.length;
    let count = 1;
    let compressedStr = "";
    let isCompressed = false;
    for (let i = 0; i < n; i += count) {
      let j = i + 1;
      count = 1;
      while (str.charAt(i) === str.charAt(j)) {
        j++;
        count++;
      }
      if (count > 1) isCompressed = true;
      compressedStr += `${str.charAt(i)}${count}`;
    }
    return isCompressed ? compressedStr : str;
  },
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * With a call to isSubstring
   * @param s1
   * @param s2
   * @returns {boolean}
   */
  stringRotationJS: (s1, s2) => ((s2 + s2).indexOf(s1) > -1),
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * Without call to isSubstring
   * @param s1
   * @param s2
   * @returns {boolean}
   */
  stringRotation: (s1, s2) => {
    const s1Len = s1.length;
    const s2Len = s1.length;
    if (s1Len !== s2Len) return false;
    let startIndex = 0;
    s2 = s2 + s2;
    for (let i = 0; i < s2Len; i++) {
      if (s1.charAt(0) === s2.charAt(i)) {
        startIndex = i;
        break;
      }
    }
    for (let j = startIndex, k = 0; j < 2 * s2Len, k < s1Len; j++, k++) {
      if (s1.charAt(k) !== s2.charAt(j)) return false;
    }
    return true;
  },
};