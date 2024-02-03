// const calculator = require('./calculator');
import { calculator } from "./calculator";

test('Addition of 1+2=3', () => {
  expect(calculator.add(1,2)).toBe(3);
})

test('Subtraction of 1-2=-1', () => {
  expect(calculator.subtract(1,2)).toBe(-1);
})

test('Subtraction of 5-2=3', () => {
  expect(calculator.subtract(5,2)).toBe(3);
})

test('Multiplication of 5*2=10', () => {
  expect(calculator.multiply(5,2)).toBe(10);
})

test('Division of 5/2=2.5', () => {
  expect(calculator.divide(5,2)).toBe(2.5);
})

test('Division of 10/2=5', () => {
  expect(calculator.divide(10,2)).toBe(5);
})