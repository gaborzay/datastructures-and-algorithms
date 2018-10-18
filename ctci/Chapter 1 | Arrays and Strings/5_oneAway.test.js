/**
 * One Away
 * There are three types of edits that can be performed on strings: insert a
 * character, remove a character, or replace a character. Given two strings,
 * write a function to check if they are on edit (or zero edits) away.
 * */

const strFuncs = require('../Data Structures/String/String');

// Removing Characters
test('returns true when removing first character', () => {
  const str1 = "a";
  const str2 = "";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when removing first character', () => {
  const str1 = "pale";
  const str2 = "ale";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when removing character from middle part', () => {
  const str1 = "pale";
  const str2 = "ple";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when removing last character', () => {
  const str1 = "pale";
  const str2 = "pal";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

// Inserting Characters
test('returns true when inserting first character', () => {
  const str1 = "";
  const str2 = "b";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when inserting first character', () => {
  const str1 = "ales";
  const str2 = "pales";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when inserting middle character', () => {
  const str1 = "ples";
  const str2 = "pales";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when inserting last character', () => {
  const str1 = "pales";
  const str2 = "pale";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

// Replacing Characters
test('returns true when replacing first character', () => {
  const str1 = "a";
  const str2 = "b";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when replacing first character', () => {
  const str1 = "pale";
  const str2 = "bale";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when replacing middle character', () => {
  const str1 = "pale";
  const str2 = "pare";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

test('returns true when replacing last character', () => {
  const str1 = "pale";
  const str2 = "pali";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeTruthy();
});

// Failing Cases
test('returns false when more than one away', () => {
  const str1 = "pale";
  const str2 = "bake";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeFalsy();
});

test('returns false when more than one away', () => {
  const str1 = "palesss";
  const str2 = "pale";
  const result = strFuncs.oneAway(str1, str2);
  expect(result).toBeFalsy();
});