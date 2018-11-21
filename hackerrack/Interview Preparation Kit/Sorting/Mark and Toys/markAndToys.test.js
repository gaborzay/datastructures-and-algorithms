const markAndToys = require('./markAndToys');

test('should return the correct amount of items bought', function () {
	const prices = [1, 12, 5, 111, 200, 1000, 10];
	const k = 50;
	const output = markAndToys(prices, k);
	const expected = 4;
	expect(output).toEqual(expected);
});