const alternatingCharacters = require('./alternatingCharacters');

test('should correctly return deletes when all A\'s', function () {
	const s = 'AAAA';
	const output = alternatingCharacters(s);
	const expected = 3;
	expect(output).toEqual(expected);
});

test('should correctly return deletes when all B\'s', function () {
	const s = 'BBBBB';
	const output = alternatingCharacters(s);
	const expected = 4;
	expect(output).toEqual(expected);
});

test('should correctly return deletes when already in proper order starting with A\'s', function () {
	const s = 'ABABABAB';
	const output = alternatingCharacters(s);
	const expected = 0;
	expect(output).toEqual(expected);
});

test('should correctly return deletes when already in proper order starting with B\'s', function () {
	const s = 'BABABA';
	const output = alternatingCharacters(s);
	const expected = 0;
	expect(output).toEqual(expected);
});

test('should correctly return deletes when already in proper order starting with B\'s', function () {
	const s = 'AAABBB';
	const output = alternatingCharacters(s);
	const expected = 4;
	expect(output).toEqual(expected);
});