const repeatedString = require('./repeatedString');

test('should return correct occurrences on small string', function () {
	const s = 'aba';
	const n = 10;
	const output = repeatedString(s, n);
	const expected = 7;
	expect(output).toEqual(expected);
});

test('should return correct occurrences on huge string', function () {
	const s = 'a';
	const n = 1000000000000;
	const output = repeatedString(s, n);
	const expected = 1000000000000;
	expect(output).toEqual(expected);
});