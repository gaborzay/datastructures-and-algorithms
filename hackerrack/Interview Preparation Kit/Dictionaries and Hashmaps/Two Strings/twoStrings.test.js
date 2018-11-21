const twoStrings = require('./twoStrings');

test('should return YES if there is a substring', function () {
	const s1 = 'hello';
	const s2 = 'world';
	const output = twoStrings(s1,s2);
	const expected = 'YES';
	expect(output).toEqual(expected);
});

test('should return NO if there is no substring', function () {
	const s1 = 'hi';
	const s2 = 'world';
	const output = twoStrings(s1,s2);
	const expected = 'NO';
	expect(output).toEqual(expected);
});