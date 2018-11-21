/**
 * Mark and Toys
 * https://www.hackerrank.com/challenges/mark-and-toys/problem
 *
 * @param prices: an array of integers representing toy prices
 * @param k: an integer, the budget
 */
module.exports = function markAndToys(prices, k) {
	let items = 0;
	prices.sort((a,b) => a-b);
	for (let i = 0, n = prices.length; i < n; i++) {
		k -= prices[i];
		if (k < 0) break;
		items++;
	}
	return items;
};