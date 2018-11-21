/**
 * Counting Valleys
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 *
 * @param n: the number of steps
 * @param s: a string describing the path
 */
module.exports = function countingValleys(n, s) {
	let valleys = 0;
	let prevElev = 0;
	let currElev = 0;

	for (let i = 0; i < n; i++) {
		if (s.charAt(i) === 'D') currElev--; // Go down
		if (s.charAt(i) === 'U') currElev++; // Go up
		if (prevElev >= 0 && currElev < 0) valleys++;
		prevElev = currElev;
	}

	return valleys;
};