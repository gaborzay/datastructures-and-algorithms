/**
 * String Rotation
 * Assume you have a method isSubstring which checks if one word is a substring
 * of another. Give two strings, s1 and s2, write code to check if s2 is a
 * rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a
 * rotation of "erbottlewat").
 * */

const MyString = require('../Data Structures/String/String');

test('check if correctly identifies rotation', () => {
  const s1 = new MyString('');
  const s2 = '';
  const output = s1.stringRotationJS(s2);
  expect(output).toBeTruthy();
});

test('check if correctly identifies rotation', () => {
  const s1 = new MyString('waterbottle');
  const s2 = 'erbottlewat';
  const output = s1.stringRotationJS(s2);
  expect(output).toBeTruthy();
});

test('check if correctly identifies rotation', () => {
  const s1 = new MyString('hello');
  const s2 = 'hello';
  const output = s1.stringRotationJS(s2);
  expect(output).toBeTruthy();
});

test('check if correctly identifies non-rotation', () => {
  const s1 = new MyString('hello');
  const s2 = 'world';
  const output = s1.stringRotationJS(s2);
  expect(output).toBeFalsy();
});

test('check if correctly identifies wrong sized string', () => {
  const s1 = new MyString('hello');
  const s2 = 'wor';
  const output = s1.stringRotationJS(s2);
  expect(output).toBeFalsy();
});

test('check if correctly identifies wrong sized string', () => {
  const s1 = new MyString('he');
  const s2 = 'world';
  const output = s1.stringRotationJS(s2);
  expect(output).toBeFalsy();
});

test('check if correctly identifies rotation', () => {
  const s1 = new MyString('waterbottle');
  const s2 = 'erbottlewat';
  const output = s1.stringRotation(s2);
  expect(output).toBeTruthy();
});

test('check if correctly identifies rotation', () => {
  const s1 = new MyString('hello');
  const s2 = 'hello';
  const output = s1.stringRotation(s2);
  expect(output).toBeTruthy();
});

test('check if correctly identifies non-rotation', () => {
  const s1 = new MyString('hello');
  const s2 = 'world';
  const output = s1.stringRotation(s2);
  expect(output).toBeFalsy();
});

test('check if correctly identifies wrong sized string', () => {
  const s1 = new MyString('hello');
  const s2 = 'wor';
  const output = s1.stringRotation(s2);
  expect(output).toBeFalsy();
});

test('check if correctly identifies wrong sized string', () => {
  const s1 = new MyString('he');
  const s2 = 'world';
  const output = s1.stringRotation(s2);
  expect(output).toBeFalsy();
});