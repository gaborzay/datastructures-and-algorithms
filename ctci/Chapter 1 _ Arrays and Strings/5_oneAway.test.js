/**
 * One Away
 *
 * There are three types of edits that can be performed on strings: insert a
 * character, remove a character, or replace a character. Given two strings,
 * write a function to check if they are on edit (or zero edits) away.
 * */

const MyString = require('../Data Structures/String/String');

// Removing Characters
test('returns true when removing first character', () => {
  const str1 = new MyString("a");
  const str2 = "";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when removing first character', () => {
  const str1 = new MyString("pale");
  const str2 = "ale";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when removing character from middle part', () => {
  const str1 = new MyString("pale");
  const str2 = "ple";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when removing last character', () => {
  const str1 = new MyString("pale");
  const str2 = "pal";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

// Inserting Characters
test('returns true when inserting first character', () => {
  const str1 = new MyString("");
  const str2 = "b";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when inserting first character', () => {
  const str1 = new MyString("ales");
  const str2 = "pales";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when inserting middle character', () => {
  const str1 = new MyString("ples");
  const str2 = "pales";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when inserting last character', () => {
  const str1 = new MyString("pales");
  const str2 = "pale";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

// Replacing Characters
test('returns true when replacing first character', () => {
  const str1 = new MyString("a");
  const str2 = "b";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when replacing first character', () => {
  const str1 = new MyString("pale");
  const str2 = "bale";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when replacing middle character', () => {
  const str1 = new MyString("pale");
  const str2 = "pare";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

test('returns true when replacing last character', () => {
  const str1 = new MyString("pale");
  const str2 = "pali";
  const result = str1.oneAway(str2);
  expect(result).toBeTruthy();
});

// Failing Cases
test('returns false when more than one away', () => {
  const str1 = new MyString("pale");
  const str2 = "bake";
  const result = str1.oneAway(str2);
  expect(result).toBeFalsy();
});

test('returns false when more than one away', () => {
  const str1 = new MyString("palesss");
  const str2 = "pale";
  const result = str1.oneAway(str2);
  expect(result).toBeFalsy();
});