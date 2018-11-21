/**
 * Jumping on the Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 *
 * @param c: an array of binary integers
 */
module.exports = function jumpingOnTheClouds(c) {
	let i = 0;
	let n = c.length;
	let jumps = 0;

	while (i < (n-1)) {
		if (c[i+2] !== 1) i += 2; // move ahead 2
		else i++; // move ahead 1
		jumps++;
	}

	return jumps;
};