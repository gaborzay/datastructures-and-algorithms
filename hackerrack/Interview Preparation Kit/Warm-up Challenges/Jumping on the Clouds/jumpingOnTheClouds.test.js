const jumpingOnTheClouds = require('./jumpingOnTheClouds');

test('should return the correct number of jumps when multiple are possible', function () {
	const c = [0, 0, 1, 0, 0, 1, 0];
	const output = jumpingOnTheClouds(c);
	const expected = 4;
	expect(output).toEqual(expected);
});

test('should return the correct number of jumps when one is possible', function () {
	const c = [0, 0, 0, 0, 1, 0];
	const output = jumpingOnTheClouds(c);
	const expected = 3;
	expect(output).toEqual(expected);
});