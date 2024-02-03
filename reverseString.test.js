const { default: reverseString } = require("./reverseString");


test('String return with 1 char', () => {
  expect(reverseString('a')).toBe('a');
})

test('String return with many characters', () => {
  expect(reverseString('abcdef')).toBe('fedcba');
})

test('String return with many characters and capitals', () => {
  expect(reverseString('AbCdEfGhIJ')).toBe('JIhGfEdCbA');
})

test('String return many characters and spaces', () => {
  expect(reverseString('a b c d e f g')).toBe('g f e d c b a');
})

test('String with letters and numbers', () => {
  expect(reverseString('dog123cat456')).toBe('654tac321god');
})

test('test invalid input - number', () => {
  expect(reverseString(123)).toBe(null);
})

test('test invalid input - array', () => {
  expect(reverseString(['h','e','l','l','o'])).toBe(null);
})

test('test invalid input - null', () => {
  expect(reverseString(null)).toBe(null);
})

