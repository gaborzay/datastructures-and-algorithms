/**
 * Luck Balance
 * https://www.hackerrank.com/challenges/luck-balance/problem
 *
 * @param k: the number of important contests Lena can lose
 * @param contests: a 2D array of integers where each contains two integers that represent the luck balance and importance of the contest.
 */
module.exports = function luckBalance(k, contests) {
	let luck = 0;

	contests.sort((a, b) => {
		if (a[1] === b[1]) {
			return b[0] - a[0];
		} else {
			return a[1] - b[1];
		}
	});

	for (let i = 0, n = contests.length; i < n; i++) {
		if (contests[i][1] === 0) {
			luck += contests[i][0];
		} else {
			if (k < 1) {
				luck -= contests[i][0];
			} else {
				luck += contests[i][0];
				k--
			}
		}
	}

	return luck;
};