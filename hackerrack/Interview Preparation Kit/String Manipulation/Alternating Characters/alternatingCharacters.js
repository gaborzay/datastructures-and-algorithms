/**
 * Alternating Characters
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 *
 * @param s: a string
 */
module.exports = function alternatingCharacters(s) {
	let deletes = 0;
	let next = s.charAt(0) === 'A' ? 'B' : 'A';

	for (let i = 1, n = s.length; i < n; i++) {
		if (s.charAt(i) !== next) {
			deletes++
		} else {
			next = s.charAt(i) === 'A' ? 'B' : 'A';
		}
	}

	return deletes;
};