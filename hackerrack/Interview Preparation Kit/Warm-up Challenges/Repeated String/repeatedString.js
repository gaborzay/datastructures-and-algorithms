/**
 * Repeated String
 * https://www.hackerrank.com/challenges/repeated-string/problem
 *
 * @param s: a string to repeat
 * @param n: the number of characters to consider
 */
module.exports = function repeatedString(s, n) {
	const l = s.length;
	let repeated = 0;

	for (let i = 0; i < l; i++) {
		if (s.charAt(i) === 'a') repeated++;
	}

	const remainder = n % l;
	repeated *= Math.floor(n/l);

	for (let j = 0; j < remainder; j++) {
		if (s.charAt(j) === 'a') repeated++;
	}

	return repeated;
};