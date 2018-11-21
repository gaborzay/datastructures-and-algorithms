const countingValleys = require('./countingValleys');

test('should return no valleys if path does not contain any valleys', function () {
	const n = 8;
	const s = "UUUUDDDD";
	const output = countingValleys(n, s);
	const expected = 0;

	expect(output).toEqual(expected);
});

test('should return 1 valley if path contains valley', function () {
	const n = 8;
	const s = "UDDDUDUU";
	const output = countingValleys(n, s);
	const expected = 1;

	expect(output).toEqual(expected);
});

test('should return many valleys if path contains valleys', function () {
	const n = 8;
	const s = "DDUUDDUU";
	const output = countingValleys(n, s);
	const expected = 2;

	expect(output).toEqual(expected);
});