'use strict';

class MyString extends String {
  constructor(...props) {
    super(...props);
  }

  /**
   * Time complexity: O(n^2)
   * Space complexity: O(1)
   * @returns {boolean}
   */
  isUnique() {
    // Remove all white space
    const str = this.replace(/\s/g, '').toLowerCase();
    for (let i = 0, n = str.length; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (str[i] === str[j]) return false;
      }
    }
    return true;
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(256) -> 2 bytes per character in JS
   * @returns {boolean}
   */
  isUniqueHash() {
    const set = new Set();
    // Remove all white space
    const str = this.replace(/\s/g, '').toLowerCase();
    for (let i = 0, n = str.length; i < n; i++) {
      if (set.has(str[i])) return false;
      set.add(str[i]);
    }
    return true;
  }

  /**
   * Time complexity: O(n*log(n)) -> from sort
   * Space complexity: O(log(n)) -> from sort
   * @param str
   * @returns {boolean}
   */
  isPermutation(str) {
    // Remove all white space
    const s1 = this.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    const s2 = str.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    if (s1.length !== s2.length) return false;
    for (let i = 0, n = s1.length; i < n; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) return false;
    }
    return true;
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @returns {string}
   */
  urlify() {
    const str = this.trim();
    let newStr = "";
    for (let i = 0, n = str.length; i < n; i++) {
      if (str[i] === " ") newStr += "%20";
      else newStr += str[i];
    }
    return newStr;
  }

  // The JS way to do it
  urlifyJS() {
    return this.trim().replace(/\s/g, '%20')
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(256) -> 2 bytes per character in JS
   * @returns {boolean}
   */
  palindromePermutation() {
    // Remove all white space
    const str = this.replace(/\s/g, '').toLowerCase().split('').sort();
    const map = new Map();
    let oddChars = 0;
    for (let i = 0, n = str.length; i < n; i++) {
      const char = str[i];
      if (!map.has(char)) map.set(char, 1);
      else map.set(char, map.get(char) + 1);
    }
    // Count number of odd characters
    for (let char of map.keys()) {
      if (map.has(char) && map.get(char) % 2 !== 0) oddChars++;
    }
    return oddChars < 2;
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(26)
   * @param str
   * @returns {boolean}
   */
  oneAway(str) {
    // Remove all white space
    const s1 = this.replace(/\s/g, '').toLowerCase();
    const s2 = str.replace(/\s/g, '').toLowerCase();
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
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * @returns {string}
   */
  stringCompression() {
    let count = 1;
    let compressedStr = "";
    let isCompressed = false;
    for (let i = 0, n = this.length; i < n; i += count) {
      let j = i + 1;
      count = 1;
      while (this.charAt(i) === this.charAt(j)) {
        j++;
        count++;
      }
      if (count > 1) isCompressed = true;
      compressedStr += `${this.charAt(i)}${count}`;
    }
    return isCompressed ? compressedStr : this.toString();
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * With a call to isSubstring
   * @param str
   * @returns {boolean}
   */
  stringRotationJS(str) {
    return (str + str).indexOf(this) > -1
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   * Without call to isSubstring
   * @param str
   * @returns {boolean}
   */
  stringRotation(str) {
    const s1Len = this.length;
    const s2Len = str.length;
    if (s1Len !== s2Len) return false;
    let startIndex = 0;
    str = str + str;
    for (let i = 0; i < s2Len; i++) {
      if (this.charAt(0) === str.charAt(i)) {
        startIndex = i;
        break;
      }
    }
    for (let j = startIndex, k = 0; j < 2 * s2Len, k < s1Len; j++, k++) {
      if (this.charAt(k) !== str.charAt(j)) return false;
    }
    return true;
  }
}


module.exports = MyString;