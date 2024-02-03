import caesarCipher from "./caesarCipher";

test('ABCDEF shifted 1 is BCDEFG', () => {
  expect(caesarCipher('ABCDEF', 1)).toBe('BCDEFG')
})

test('cipher is case insensitive', () => {
  expect(caesarCipher('abcdef', 1)).toBe('BCDEFG')
})

test('cipher only shifts A-Z', () => {
  expect(caesarCipher("H'e'l l o, ThErE", 1)).toBe("I'F'M M P, UIFSF")
})

test('cipher wraps around', () => {
  expect(caesarCipher('XYZ', 5)).toBe('CDE')
})


