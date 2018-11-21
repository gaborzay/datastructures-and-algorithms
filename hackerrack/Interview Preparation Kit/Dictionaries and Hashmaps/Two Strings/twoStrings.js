/**
 * Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem
 *
 * @param s1: string
 * @param s2: string
 */
module.exports = function twoStrings(s1, s2) {
	let hash = new Set();
	for (let i = 0, l1 = s1.length; i < l1; i++) {
		const c = s1.charAt(i);
		if (!hash.has(c)) {
			hash.add(c);
		}
	}
	for (let j = 0, l2 = s2.length; j < l2; j++) {
		const c = s2.charAt(j);
		if (hash.has(c)) return 'YES';
	}
	return 'NO';
};