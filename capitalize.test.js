import capitalize from "./capitalize"

test('Check if capital is returned', () => {
  expect(capitalize('test')).toBe('Test')
})

test('Check number string input', () => {
  expect(capitalize('123')).toBe('123')
})

test('Check number input and string return', () => {
  expect(capitalize(123)).toBe('123')
})

test('Check null input', () => {
  expect(capitalize(null)).toBe('')
})

test('Check no input', () => {
  expect(capitalize('')).toBe('')
})

test('Check undefined input', () => {
  expect(capitalize(undefined)).toBe('')
})